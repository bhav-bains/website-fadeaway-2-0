// Central work collection (CLAUDE.md section 8): every Fadeaway project lives in src/content/portfolio.yaml.
// Pages pull from here; never hardcode a project on a page. Hidden entries never come back from getWork().
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { ContentTag } from '../data/tags';
import { caseStudyHref, type CaseStudy } from './case-studies';
import type { IllustrationName } from '../components/illustrations';

export type WorkKind = CollectionEntry<'portfolio'>['data']['kind'];
export type WorkGroup = NonNullable<CollectionEntry<'portfolio'>['data']['group']>;
/** A portfolio entry; case-study entries carry their resolved case study (title, summary, image, results) */
export type Work = CollectionEntry<'portfolio'> & { study?: CaseStudy };

/** Page order of kinds (/portfolio/): case studies, featured, labs, list */
export const WORK_KIND_ORDER: WorkKind[] = ['case-study', 'featured', 'labs', 'list'];
/** Order of the list groups on /portfolio/ */
export const WORK_GROUP_ORDER: WorkGroup[] = ['ecommerce', 'practices', 'saas', 'organizations'];

/**
 * Visible work, ordered by kind (case-study, featured, labs, list) then rank. Filter by one kind or several, and/or a
 * content tag; `limit` caps the total after ordering. Empty when nothing matches, so callers can skip the section.
 * A case-study entry is dropped when its case study is missing or a placeholder (outside dev).
 * Internal tools and demo sites (tag `internal`) only show on /labs/ (founder, Oct 4): pass `includeInternal` there only.
 */
export async function getWork({
  kind,
  tag,
  limit,
  includeInternal = false,
}: { kind?: WorkKind | WorkKind[]; tag?: ContentTag; limit?: number; includeInternal?: boolean } = {}): Promise<Work[]> {
  const kinds = kind ? (Array.isArray(kind) ? kind : [kind]) : WORK_KIND_ORDER;
  const entries = await getCollection(
    'portfolio',
    ({ data }) =>
      !data.hidden &&
      (includeInternal || !data.tags.includes('internal')) &&
      kinds.includes(data.kind) &&
      (!tag || data.tags.includes(tag)),
  );
  const work: Work[] = [];
  for (const entry of entries) {
    if (!entry.data.caseStudy) {
      work.push(entry);
      continue;
    }
    const study = await getEntry(entry.data.caseStudy);
    if (study && (import.meta.env.DEV || !study.data.placeholder)) work.push({ ...entry, study });
    else if (entry.data.kind !== 'case-study') work.push(entry); // featured card falls back to the live site
  }
  work.sort(
    (a, b) => WORK_KIND_ORDER.indexOf(a.data.kind) - WORK_KIND_ORDER.indexOf(b.data.kind) || a.data.rank - b.data.rank,
  );
  return limit ? work.slice(0, limit) : work;
}

/**
 * "Real Work" sections (Home, About, Build, Growth, solution pages): case studies with the tag first, then featured
 * and labs entries with it, max 3 by default. List items never show outside /portfolio/.
 */
export const getRealWork = (tag: ContentTag, limit = 3) => getWork({ kind: ['case-study', 'featured', 'labs'], tag, limit });

/** Where a card links: the case study when the entry has one, otherwise the live site (may be undefined for labs) */
/** Internal tools and demos (tag `internal`) are never linked (founder, Oct 4) */
export const isInternalWork = (w: Work) => w.data.tags.includes('internal');

export const workHref = (w: Work) => (w.study ? caseStudyHref(w.study) : isInternalWork(w) ? undefined : w.data.url);

/** True when the card links off-site (opens in a new tab) */
export const isExternalWork = (w: Work) => !w.study && !isInternalWork(w) && !!w.data.url;

/** Outbound rel per entry: noopener always, plus noreferrer / nofollow when the entry sets them. None for case studies. */
export const workRel = (w: Work) =>
  isExternalWork(w)
    ? ['noopener', w.data.noreferrer && 'noreferrer', w.data.nofollow && 'nofollow'].filter(Boolean).join(' ')
    : undefined;

/**
 * Line art for a card without an image: the entry's `art`, else by industry tag, then kind / service tag.
 * Same illustrations the rest of the site uses (e-commerce store, practice booking, studio class, sports...).
 */
export function workArt(w: Work): IllustrationName {
  if (w.data.art) return w.data.art;
  const t = w.data.tags;
  if (t.includes('ecommerce')) return 'ecommerce';
  if (t.includes('wellness-counselling')) return 'wellness';
  if (t.includes('boutique-fitness')) return 'fitness';
  if (t.includes('sports-academies')) return 'sports';
  if (w.data.kind === 'labs') return 'launch';
  if (t.includes('build')) return 'wireframe';
  if (t.includes('growth')) return 'growth';
  return 'layers';
}

/** Display domain for a URL: "https://www.routethis.com/" → "routethis.com" */
export const workDomain = (url?: string) => (url ? new URL(url).hostname.replace(/^www\./, '') : undefined);

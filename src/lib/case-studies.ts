import { getCollection, type CollectionEntry } from 'astro:content';
import type { ContentTag } from '../data/tags';
import { routes } from '../data/routes';

export type CaseStudy = CollectionEntry<'case-studies'>;

/**
 * Case studies (optionally only those with a tag), strongest first (lowest rank). Empty when none exist, so callers can skip the section.
 * Placeholder entries only appear in `astro dev`; production builds (live site and deploy previews) never include them.
 * `realOnly` drops placeholders in dev too (the Case Studies pages, now that real entries exist).
 */
export async function getCaseStudies({
  tag,
  limit,
  realOnly = false,
}: { tag?: ContentTag; limit?: number; realOnly?: boolean } = {}): Promise<CaseStudy[]> {
  const entries = await getCollection(
    'case-studies',
    ({ data }) => (!tag || data.tags.includes(tag)) && ((import.meta.env.DEV && !realOnly) || !data.placeholder),
  );
  entries.sort((a, b) => a.data.rank - b.data.rank);
  return limit ? entries.slice(0, limit) : entries;
}

/** Detail page URL: /case-studies/[entry id]/ (the entry's file name) */
export const caseStudyHref = (entry: CaseStudy) => `${routes.caseStudies}${entry.id}/`;

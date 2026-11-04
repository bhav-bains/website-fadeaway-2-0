// Articles (spec: copy/articles.md). Pages read articles only through here.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { ContentTag } from '../data/tags';
import { routes } from '../data/routes';
import { siteConfig } from '../data/site';
import { pageDates } from './page-dates';
import type { IllustrationName } from '../components/illustrations';

export type Article = CollectionEntry<'articles'>;

/** Article page URL: /articles/[entry id]/ (the entry's file name) */
export const articleHref = (entry: Article) => `${routes.articles}${entry.id}/`;

/**
 * Published articles (optionally only those with a tag), newest first by git publish date (an article not committed
 * yet counts as newest). Drafts appear only in `npm run dev`, never in a production build.
 */
export async function getArticles({ tag, limit }: { tag?: ContentTag; limit?: number } = {}): Promise<Article[]> {
  const entries = await getCollection(
    'articles',
    ({ data }) => (import.meta.env.DEV || !data.draft) && (!tag || data.tags.includes(tag)),
  );
  const published = (e: Article) => pageDates(articleHref(e)).published ?? '9999';
  entries.sort((a, b) => published(b).localeCompare(published(a)));
  return limit ? entries.slice(0, limit) : entries;
}

/** Minutes to read the body at about 200 words a minute (at least 1) */
export const readingMinutes = (entry: Article) =>
  Math.max(1, Math.ceil((entry.body ?? '').split(/\s+/).filter(Boolean).length / 200));

/** Title tag: seoTitle when set, else "{title} | Fadeaway Creatives" when it fits in 60 chars, else the title */
export function articleTitleTag(entry: Article) {
  const { seoTitle, title } = entry.data;
  if (seoTitle) return seoTitle;
  const branded = `${title} | ${siteConfig.name}`;
  return branded.length <= 60 ? branded : title;
}

/** Card line art when an article has no image: by its first topic tag */
const ART_BY_TAG: Partial<Record<ContentTag, IllustrationName>> = {
  ecommerce: 'ecommerce',
  'wellness-counselling': 'wellness',
  'boutique-fitness': 'fitness',
  'sports-academies': 'sports',
  build: 'wireframe',
  'custom-website': 'wireframe',
  'website-redesign': 'wireframe',
  'website-migration': 'wireframe',
  growth: 'growth',
  labs: 'launch',
  'labs-product': 'launch',
};

export const articleArt = (entry: Article): IllustrationName =>
  entry.data.tags.map((t) => ART_BY_TAG[t]).find((a): a is IllustrationName => !!a) ?? 'growth';

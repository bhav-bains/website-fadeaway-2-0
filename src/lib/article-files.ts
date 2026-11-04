// Article entry files on disk, for code that runs outside Astro's content layer (astro.config.mjs sitemap filter,
// src/lib/page-dates.ts). Pages use src/lib/articles.ts instead.
import { existsSync, readdirSync, readFileSync } from 'node:fs';

export const ARTICLES_DIR = 'src/content/articles';

/** Repo-relative paths of every article entry (drafts included) */
export function articleFiles(): string[] {
  if (!existsSync(ARTICLES_DIR)) return [];
  return readdirSync(ARTICLES_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => `${ARTICLES_DIR}/${f}`);
}

const isDraft = (file: string) => {
  const frontmatter = readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  return /^draft:\s*true\s*(#.*)?$/m.test(frontmatter);
};

/** True once at least one article is published (not a draft): /articles/ then goes into the sitemap and is indexed */
export const hasPublishedArticles = () => articleFiles().some((f) => !isDraft(f));

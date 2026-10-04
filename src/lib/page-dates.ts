// Page dates from git (CLAUDE.md section 4, "Dates and sitemap"). Dates are metadata only, never shown on the page.
// One route → source files map feeds both the sitemap <lastmod> (astro.config.mjs `serialize`) and each page's
// JSON-LD dateModified (SeoHead), so the two always match. A page's date = the latest git date among its files:
// its route file in src/pages/ (found automatically), its data file in src/data/pages/, its copy file in copy/,
// and for case-study pages its entry in src/content/case-studies/. No known source → no date (never build time).
import { existsSync } from 'node:fs';
import { routes } from '../data/routes';
import { gitDates } from './git-dates';

const data = (name: string) => `src/data/pages/${name}.ts`;
const copy = (name: string) => `copy/${name}.md`;

/** Data + copy files per route. Add a line for every new page (its route file needs no entry). */
export const PAGE_SOURCES: Record<string, string[]> = {
  [routes.home]: [data('home'), copy('home')],
  [routes.build]: [data('build'), copy('build')],
  [routes.growth]: [data('growth'), copy('growth')],
  [routes.ecommerce]: [data('ecommerce'), copy('ecommerce')],
  [routes.wellnessCounselling]: [data('wellness'), copy('wellness-counselling')],
  [routes.boutiqueFitness]: [data('fitness'), copy('boutique-fitness')],
  [routes.sports]: [data('sports'), copy('sports')],
  [routes.labs]: [data('labs'), copy('labs')],
  [routes.caseStudies]: [data('case-studies'), copy('case-studies')],
  [routes.portfolio]: [data('portfolio'), copy('portfolio'), 'src/content/portfolio.yaml'],
  [routes.about]: [data('about'), copy('about')],
  [routes.contact]: [data('contact'), copy('contact')],
  [routes.audit]: [data('audit'), copy('audit')],
  [routes.demoRequest]: [data('demo'), copy('demo-request')],
  [routes.privacy]: [data('legal'), copy('privacy')],
  [routes.terms]: [data('legal'), copy('terms')],
};

/** Every case-study detail page: the shared template + labels, plus that study's own entry file */
const CASE_STUDY_TEMPLATE = ['src/pages/case-studies/[slug].astro', data('case-studies'), copy('case-studies')];

const normalize = (pathname: string) => (pathname.endsWith('/') ? pathname : `${pathname}/`);
const firstExisting = (candidates: string[]) => candidates.find((f) => existsSync(f));

function routeFile(path: string) {
  const base = path === '/' ? 'index' : path.slice(1, -1);
  return firstExisting([`src/pages/${base}.astro`, `src/pages/${base}/index.astro`]);
}

function caseStudyEntry(path: string) {
  const slug = path.match(/^\/case-studies\/([^/]+)\/$/)?.[1];
  return slug && firstExisting([`src/content/case-studies/${slug}.md`, `src/content/case-studies/${slug}.mdx`]);
}

/** Source files for a URL path; `primary` is the file whose first commit is the publish date */
export function pageSources(pathname: string): { primary?: string; files: string[] } {
  const path = normalize(pathname);
  const entry = caseStudyEntry(path);
  if (entry) return { primary: entry, files: [...CASE_STUDY_TEMPLATE, entry] };
  const route = routeFile(path);
  return { primary: route, files: [route, ...(PAGE_SOURCES[path] ?? [])].filter((f): f is string => !!f) };
}

const cache = new Map<string, { published?: string; modified?: string }>();

/** UTC ISO dates for a URL path: published (primary file's first commit), modified (latest across all sources) */
export function pageDates(pathname: string): { published?: string; modified?: string } {
  const path = normalize(pathname);
  const hit = cache.get(path);
  if (hit) return hit;
  const { primary, files } = pageSources(path);
  for (const f of files) if (!existsSync(f)) console.warn(`[page-dates] ${path}: source file not found: ${f}`);
  const dates = files.length ? { published: gitDates(primary).published, modified: gitDates(files).modified } : {};
  cache.set(path, dates);
  return dates;
}

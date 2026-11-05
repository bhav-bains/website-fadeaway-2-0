# fadeawaycreatives.com

The website of **Fadeaway Creatives**, a founder-led growth partner for businesses across Canada and the US: websites, SEO and AEO (answer engine optimization), e-commerce and Fadeaway Labs.

- **Live site:** https://fadeawaycreatives.com (relaunched Oct 14, 2026)
- **Hosting:** Netlify, deploying `main` automatically
- **Stack:** Astro 7, Tailwind CSS v4, MDX, `@astrojs/sitemap`. Static HTML, no database. Forms use Netlify Forms.

> **Working with Claude Code?** Read [`CLAUDE.md`](CLAUDE.md) first. It holds the standing rules for copy, design, SEO/AEO, structured data and git.

---

## Getting started

Requirements: **Node 22.19 or newer** and npm.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:4321.

On Windows PowerShell, if plain `npm` is blocked by the execution policy, use `npm.cmd run dev`, or allow scripts once with `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload. Draft articles and placeholder case studies show here only. |
| `npm run build` | Production build into `dist/`. Run it before every commit. |
| `npm run preview` | Serve the production build locally (for Lighthouse checks). |

Every page URL ends in a slash (`/contact/`). In `npm run dev`, `/contact` without the slash returns a 404 on purpose; Netlify redirects it in production.

---

## Branches and releases

| Branch | Purpose |
| --- | --- |
| `main` | **Production.** Never work on it directly. It changes only through a release. |
| `dev` | All day-to-day work happens here. |
| `mobile-updates` | Permanent branch for work from mobile cloud sessions. Merge it into `dev` when it has new commits; never delete it. |

**Always ask before committing or pushing.** Claude Code never commits or pushes without an explicit yes.

**Release** (only when the founder asks), always as a real merge commit:

```bash
git checkout main
git pull origin main
git merge --no-ff dev
git push origin main
git checkout dev
```

`--no-ff` matters: page dates in the sitemap and structured data come from git's first-parent history, so a release must be a merge commit, never a fast-forward. Netlify deploys about 30 seconds after the push.

**Sync habit:** start every session with `git pull` on `dev`.

---

## How content works

```
copy/<page>.md  →  src/data/pages/<page>.ts  →  src/pages/<route>.astro  →  src/components/blocks/*
 approved copy      the same words, as data      the page: picks blocks      shared, copy-free blocks
```

- **`copy/` is the source of truth** for every word on the site. Page data in `src/data/pages/` mirrors it word for word. When copy changes, update both in the same commit.
- **Blocks never contain copy.** They render whatever the page passes in, so one block serves many pages.
- **Design tokens** live in `src/styles/theme.css` (brand palette plus semantic tokens such as `canvas`, `ink`, `accent`, `highlight`). Components use semantic tokens only, never raw hex values.

### Project structure

```
copy/                    Approved page copy (one .md per page) and the article spec
public/                  Static files: robots.txt, _redirects, og-default.jpg, favicons
src/
  components/
    blocks/              Shared page blocks (Section, Hero variants, CardGrid, Faq, ArticleCard...)
    illustrations/       Line-art SVG illustrations, named through index.ts
    seo/                 SeoHead (meta, canonical, JSON-LD) and Analytics (GA4, Meta Pixel)
    ui/                  Icon, ArrowLink, Logo, SocialIcon
  content/
    articles/            Articles (/articles/), one .md per article
    case-studies/        Case studies (/case-studies/), one .md per client
    portfolio.yaml       Every project on the site, one item each
    testimonials/        Client quotes (empty until real, permission-confirmed quotes arrive)
  data/
    pages/               Page content, mirrored from copy/
    site.ts              Entity facts: name, founder, location, socials, analytics IDs
    routes.ts            Every internal URL (link to routes.x, never a hardcoded path)
    navigation.ts        Header and footer menus
    tags.ts              Content tags and how they display
  layouts/BaseLayout.astro
  lib/                   schema.ts (JSON-LD), git-dates.ts + page-dates.ts (dates), articles.ts, work.ts...
  pages/                 Routes; src/pages/_inactive/ holds parked pages that are not built
  styles/                theme.css (tokens) and globals.css
```

---

## Common tasks

### Change copy on a page
1. Edit `copy/<page>.md`.
2. Make the same change in `src/data/pages/<page>.ts`.
3. `npm run build`, check the page in `npm run dev`.

### Publish an article
1. Add `src/content/articles/<slug>.md` with the fields described in `copy/articles.md` ("Article fields"): `title`, optional `seoTitle`, `description` (155 characters or fewer), `summary` (40 to 80 words), `tags`, optional `image` / `ogImage` / `takeaways`, `faq`, `draft`.
2. Keep `draft: true` while reviewing. Drafts show only in `npm run dev`, with a "Draft" badge.
3. Set `draft: false` and release. The article appears on `/articles/`, in the sitemap, and in the "From the Blog" section of every page that shares its tag.

Dates are never typed by hand: published and modified dates come from git.

### Add a project to the portfolio
Add one item to `src/content/portfolio.yaml`. It shows everywhere it belongs (`/portfolio/`, Real Work sections, Labs) by its `kind` and `tags`. Set `hidden: true` to pull it without deleting it.

### Add a case study
Copy `src/content/case-studies/placeholder-ecommerce.md` (it documents every field), fill it in, remove `placeholder: true`, add `permissionConfirmed: true` (the build fails without it), and point its `portfolio.yaml` entry at it with `caseStudy: <slug>`. Use `hidden: true` to pull one temporarily.

### Redirect an old URL
Add a line to `public/_redirects` (Netlify format: `/old/  /new/  301`). Use `301` for permanent moves and `302` for temporary ones.

### Add a new page
Create the route in `src/pages/`, its data in `src/data/pages/`, its copy in `copy/`, add the URL to `src/data/routes.ts`, and add a line to `PAGE_SOURCES` in `src/lib/page-dates.ts` so the page gets dates.

---

## SEO and AEO

Everything important is in the static HTML: headings, copy, FAQ text and JSON-LD never depend on client-side JavaScript.

- **Every page** has a title (60 characters or fewer), meta description (155 or fewer), self-referencing canonical, Open Graph and Twitter tags, and robots meta. `SeoHead` warns at build time when a title or description is too long.
- **Structured data** (`src/lib/schema.ts`): Organization and WebSite on every page; BreadcrumbList on interior pages; FAQPage, HowTo, Service, BlogPosting and Article where a page has them, built from the same data the page shows, so they always match.
- **Answer capsules:** each page opens with a short, quotable summary right under the Hero, for AI answers.
- **Dates and sitemap:** `@astrojs/sitemap` regenerates `sitemap-index.xml` on every build. Each URL's `<lastmod>` and JSON-LD `dateModified` come from git, never from the build time. Noindex pages (success pages, the 404) stay out of the sitemap.
- **Crawlers:** `public/robots.txt` allows all crawlers, AI search crawlers included.
- **After a release with new pages:** request indexing in Google Search Console (URL Inspection) and Bing Webmaster Tools.

### Before calling a page done
- Title ≤ 60 characters, description ≤ 155, exactly one H1
- No `#` placeholder links; every internal link resolves (with the trailing slash)
- No em or en dashes in page copy; copy matches `copy/<page>.md` word for word
- FAQ text matches its FAQPage JSON-LD exactly
- Mobile layout checked at 360 to 1440 px wide
- `npm run build` passes

---

## Forms

All forms are Netlify Forms with a honeypot field:

| Form | Page |
| --- | --- |
| `website-contact-form` | `/contact/` |
| `audit-request` | `/audit/` |
| `labs-intake` | `/labs/start/` |

Submissions appear in the Netlify dashboard under **Forms**. The demo request page is parked for now (`src/pages/_demo-request.astro`, not built; `/demo-request/` redirects to `/contact/`).

---

## Analytics

GA4 and the Meta Pixel load from `src/components/seo/Analytics.astro`; their IDs live in `src/data/site.ts`.

---

## Claude Design

Brand tokens and fonts are synced to the Claude Design project "Fadeaway Creatives" from `.design-sync/`. Re-run `/design-sync` after changing `src/styles/theme.css` (steps in `.design-sync/NOTES.md`).

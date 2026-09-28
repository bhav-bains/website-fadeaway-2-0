# CLAUDE.md: fadeawaycreatives.com

Astro site, hosted on Netlify. This file gives Claude Code the standing rules for the website rebuild. Read it at the start of every session.

---

## 1. Project structure (verified against `dev`, Sept 28, 2026)

- **Stack:** Astro 7.3, Tailwind v4.3 via `@tailwindcss/vite` (no `tailwind.config`, no PostCSS config), `@astrojs/mdx` 8, `@astrojs/sitemap`, `clsx`. Node 22.19+ required by `undici` (this machine: 22.23.2). All components are `.astro`; no React, no daisyUI. No database: Supabase (client, edge function, migrations) was removed; forms use Netlify Forms.
- **Git:** remote `origin` → github.com/bhav-bains/website-fadeaway-2-0 (`main`, `dev`). `main` is production and stays untouched during the rebuild (see section 2).
- **Config:** `astro.config.mjs` sets `site: "https://fadeawaycreatives.com"`. `public/robots.txt` allows all and points to `sitemap-index.xml`. No `netlify.toml` or `public/_redirects` yet.
- **Layout:** `src/layouts/BaseLayout.astro` for every page: head (fonts, `SeoHead`, `Analytics`), skip link, Header, `<main id="main">`, Footer. Pages render only their sections inside it. Props: the SeoHead props plus `mainClass`.
  - `src/components/seo/SeoHead.astro`: title, description, canonical (trailing slash, production domain), robots, OG, Twitter, one JSON-LD `@graph`. Props: `title`, `description`, `canonical`, `ogImage`, `ogImageAlt`, `ogType`, `noIndex`, `jsonLd` (array of page nodes). Warns at build when title > 60 or description > 155 chars.
  - `src/components/seo/Analytics.astro`: GA4 + Meta Pixel, IDs in `site.ts`.
  - `src/lib/schema.ts`: JSON-LD builders (`organizationSchema`, `websiteSchema`, `buildGraph`, `serializeJsonLd`). Organization + WebSite are on every page; entity facts come from `src/data/site.ts`.
  - Default OG image is still the logo until the homepage share image exists.
  - Sitemap excludes noindex pages (filter in `astro.config.mjs`).
- **Header / Footer:** `Header.astro`, `Footer.astro`, fed by `src/data/navigation.ts`. That file still has 14 `#` placeholder links and the old nav structure (Audit & Growth Strategy, Startups & SaaS, etc.); header CTA is Contact → /contact. Replace with the nav/footer in `copy/home.md`.
- **Live pages (`src/pages/`):** `/` (`index.astro`), `/contact`, `/contact-success`, `/sports`, `/wellness`.
- **Parked pages (`src/pages/_inactive/`, not routed by Astro):** old index, `blog/index`, `blog/[slug]`, `demo-request`, `demo-success`, `services/web-design`. `/audit-request` and `/audit-success` do not exist anywhere.
- **Components:** `src/components/blocks/` holds the new shared blocks (`Section.astro` so far). `Button.astro` renders an `<a>` when given `href`, a `<button>` otherwise; never wrap a Button in a link. Legacy: AgitatorCard, AgitatorSection, Badge, Button, Card, FeatureGrid, Footer, Header, Hero, LabsMVPSection, PackagesSection, PillarsSection, ProjectShowcase, ROISection, ServiceCard, ServicesSection, SolutionSection, StepsGridSection, TestimonialSection.
- **Forms:** `/contact` uses **Netlify Forms** (`data-netlify="true"`, honeypot `bot-field`, action `/contact-success`). No Supabase form on live pages.
- **Content collections** (`src/content.config.ts`, `glob()` loaders, `z` from `astro/zod`): `case-studies` and `testimonials` (empty; tags validated against `src/data/tags.ts`; `permissionConfirmed: true` required on every entry), `blog` (3 placeholder-era posts, free-form tags). `src/data/landing-content.ts` is only used by `_inactive/index.astro`.
- **Theme / tokens:** `src/styles/theme.css` is the single source for design tokens (and the basis for the Claude Design theme). Two layers: brand palette (`fadeaway-*`, the cool-grey `neutral-*` scale) and semantic tokens (`canvas`, `surface`, `surface-raised`, `ink`, `ink-soft`, `ink-muted`, `line`, `accent`, `highlight`, `font-display`, `font-body`, `radius-card`, `radius-control`, `shadow-glow-*`, `max-w-site`). **New blocks use semantic tokens only**; no hex values, `rgba()` or `[#...]` in components. Type scale (sm 16px to 6xl 80px) and 8px spacing steps 1 to 10 match the pre-v4 site.
- **Fonts:** Outfit + DM Sans, self-hosted via the Astro Fonts API (`fonts` in `astro.config.mjs`, `<Font>` in the layout), exposed as `--ff-outfit` / `--ff-dm-sans`.
- **Styles:** `src/styles/globals.css` imports the theme, keeps two v3-compat base rules (border color, button cursor), base heading styles, and shared classes are `@utility` blocks (`section-padding`, `container-max`, `gradient-text`, `glass-effect`, `glass-dark`, `btn-primary/secondary/tertiary`, `input-primary`, `badge-primary`, `card-glass`, `text-balance`, `no-scrollbar`).
- **Images:** `src/assets/*.png`, rendered through `astro:assets` `<Image>` (webp output).
- **Missing:** homepage og image, `_redirects`, FAQPage/HowTo/Breadcrumb schema.
- **Old copy still in code** (index, sports, wellness, `site.ts`, `navigation.ts`): all replaced by `/copy/` as each page is rebuilt.
- `.env` is gitignored. Never print or commit it.

## 2. How we work

- **Copy source of truth is `/copy/`.** One file per page (`copy/home.md` first). Build from it exactly. **Never write, rewrite, shorten, or "improve" copy.** If something reads wrong or doesn't fit the design, flag it and ask.
- **Copy changes the user gives in chat are approved.** Apply them in the code and update the `/copy/` file in the same change, so the file always matches the site. Expect frequent updates; the current file is the base.
- **Positioning: AEO leads.** Answer engine optimization is the focus and the market's hot term. When listing SEO/AEO services, put SEO + AEO first.
- **Work happens on `dev`.** No per-page branches and no pull requests by default. A separate branch only when a specific piece of work needs it.
- **`main` stays untouched** until the whole rebuild is done and tested. Then one push to production.
- **Sync habit:** start every session with `git pull` on `dev`, end every session with `git push` on `dev`.
- **Page by page, section by section.** Implement one section at a time, show the diff, wait for review, then commit to `dev`.
- **Reusable blocks.** Homepage first; its blocks become the shared blocks for every later page, so build them to be reusable, not homepage-specific.
- Test locally (`npm run dev`, `npm run build`) before committing.
- Don't create or delete pages, routes, or redirects without asking.

## 3. Responsive rules (always)

- **Mobile-first, every time.** Unprefixed classes are the phone layout; add `sm:` / `md:` / `lg:` / `xl:` to scale up. Never design desktop first and patch mobile.
- Every block must be fully responsive: no horizontal scroll at 320px, no fixed pixel widths that can overflow, images fluid.
- Touch targets at least 44px (`Button` enforces this).
- Check layouts at 360, 390, 768, 1024, 1280 and 1440 wide.
- Spacing scale note: steps 1 to 10 are 8px each (`p-2` = 16px, `p-4` = 32px, `p-10` = 80px); 11 and up use Tailwind defaults (`p-12` = 48px, `p-24` = 96px). So `size-4` is 32px, not 16px: **icons always use `size-icon-xs` (12px), `size-icon-sm` (16px) or `size-icon` (20px)**. Small supporting text uses `text-meta` (14px).

## 3b. Copy rules (enforced sitewide)

- **No em dashes (—) anywhere in page copy.** Hyphens in compound words (e-commerce, founder-led) are fine. En dashes are also out; use "to" for ranges ("3 to 6 month").
- **Never the word "retainer."** The plans are the Attract Plan and the Growth Plan.
- **"Full Audit," never "Deep Audit."** Full Audit is $945, fixed. No "Niche Launch Package" or "Studio Launch Package" anywhere.
- **No comparisons to other agencies** in any copy, alt text, or metadata.
- **Banned terms:** "lightning-fast," "blazing fast," "sub-second," "dominate," "full-service agency," "growth hackers," "digital gurus," "360 marketing."
- Slogans go in a **display line above the H1**. The H1 itself always contains a real service term.

## 4. SEO / AEO technical rules

- **Everything important is in the raw HTML.** Astro renders static HTML, which is ideal: no content, headings, FAQ text, or JSON-LD may depend on client-side JavaScript. Check with View Source, not Inspect.
- **One H1 per page**, taken from the page's `h1` field in `/copy/`.
- **Answer capsule** (the `answer_capsule` field) renders as real text near the top of the page, directly under the Hero.
- **Title ≤ 60 characters, meta description ≤ 155**, both from the copy file.
- Each page sets: title, meta description, canonical, Open Graph (title, description, url, type, locale, image), Twitter card, robots meta.
- **JSON-LD is rendered server-side** in `<head>` or the body, never injected by a script.
  - **Organization** lives in the base layout, sitewide.
  - **No LocalBusiness schema for Fadeaway itself.** Fadeaway serves Canada and the US; Vancouver is only an HQ address.
  - **FAQPage:** generated from the same data that renders the visible FAQ, so question and answer text match word for word. 3 to 6 questions per page.
  - **BreadcrumbList** on every interior page. **HowTo** where a page has a process section. **Service** entries per page as listed in its copy file.
- **Internal links are real `<a href>` anchors.** Zero `#` placeholder links at launch. Every link must resolve.
- **Sections render only when they have real content.** An empty proof or testimonial section renders nothing, not placeholder cards.
- Visible "last updated" date on each page (set at launch).
- Pending dev decision before launch: robots.txt rules for AI crawlers. OpenAI's **GPTBot** (training) and **OAI-SearchBot** (live search) are separate; blocking GPTBot does not remove the site from ChatGPT search, blocking OAI-SearchBot does. Don't change robots.txt without asking.

## 5. Entity facts: use this exact wording everywhere

- Name: **Fadeaway Creatives** (Labs is **Fadeaway Labs**, part of the same entity)
- **Founder-led · 15+ years of experience · Fadeaway est. 2023**
- Location line: **"Vancouver, BC, working with clients across Canada and the US."**
- Organization schema: `areaServed` = Canada, United States; `foundingDate` 2023; address Vancouver, BC, Canada. `sameAs`: Instagram, Facebook, LinkedIn (confirmed, in `src/data/site.ts`); Crunchbase, Clutch, GoodFirms, DesignRush once claimed (pending). `knowsAbout`: SEO, answer engine optimization, web development, e-commerce, business process automation, AI implementation, MVP development.
- Contact: hello@fadeawaycreatives.com

## 6. URL map

| Page | URL |
|---|---|
| Home | / |
| Build Services | /services/build |
| Growth Services | /services/growth |
| E-commerce | /solutions/ecommerce |
| Wellness & Counselling | /solutions/wellness-counselling |
| Boutique Fitness | /solutions/boutique-fitness |
| Sports Academies | /solutions/sports |
| Fadeaway Labs | /labs |
| About | /about |
| Free audit | /audit (**not built yet.** Decision: all "Get Your Free Audit" CTAs link to **/contact** until an audit page exists.) |
| Demo request (fitness, wellness, sports) | /demo-request (parked in `_inactive`, not live on `dev`) |
| Old service page | /services/web-design (parked in `_inactive`; decide when the Build page is done, 301 to /services/build if production still has it) |
| Current solution pages | /sports, /wellness (live on `dev`; the new map moves them to /solutions/sports and /solutions/wellness-counselling, so 301s needed. Ask first.) |
| Portfolio | /portfolio |
| Resources | /resources |
| Contact | /contact |
| Privacy / Terms | /privacy, /terms |

If a live URL changes, add a 301 in Netlify `_redirects` (ask first).

## 7. Shared blocks to build (homepage first, reused everywhere)

- **SeoHead:** all meta, OG, Twitter, canonical, robots, plus a JSON-LD slot.
- **BaseLayout:** header/nav, footer, sitewide Organization schema.
- **Hero:** optional display line above the H1, eyebrow, H1, sub-headline, two CTAs, optional answer capsule below.
- **CardGrid:** heading + real prose per card + link (industries, value pillars, Labs, method).
- **Steps:** numbered process that also emits HowTo schema.
- **Faq:** takes a `faq` array, renders visible Q&A, and emits matching FAQPage JSON-LD.
- **ProofGrid / Testimonials / BlogCards:** pull from content collections filtered by tag; render nothing when empty.
  - Homepage `#work` section: built fully (tag filtering on `featured`), but **hidden until the portfolio is built**, via a visibility flag in the page data.
- **CtaBlock:** heading, one line, one button.
- Later pages add **PricingCard** and **Breadcrumb**.

## 8. Content collections and tags

Collections (empty to start, filled only with real, permission-confirmed content): `case-studies`, `testimonials`, `posts`.
Each entry has `tags`. Tag names (use exactly): `featured`, `ecommerce`, `wellness-counselling`, `boutique-fitness`, `sports-academies`, `labs`, `labs-product`, `build`, `growth`.
**Never invent a client, result, quote, or article.**

## 9. QA checklist before calling a page done

- [ ] View Source shows all headings, copy, FAQ text, and JSON-LD in the raw HTML
- [ ] JSON-LD validates (schema.org validator / Google Rich Results Test)
- [ ] FAQ visible text matches the FAQPage JSON-LD exactly
- [ ] Title ≤ 60 chars, meta description ≤ 155 chars, one H1
- [ ] No `#` placeholder links; every internal link resolves
- [ ] No em dashes or en dashes in rendered copy (grep the build output)
- [ ] Copy matches `/copy/[page].md` word for word
- [ ] Lighthouse check (performance, accessibility, SEO) on a local production build (`npm run build` + `npm run preview`)
- [ ] Mobile layout checked

# CLAUDE.md: fadeawaycreatives.com

Astro site, hosted on Netlify. This file gives Claude Code the standing rules for the website rebuild. Read it at the start of every session.

---

## 1. Project structure (verified against `dev`, Oct 2, 2026)

- **Stack:** Astro 7.3, Tailwind v4.3 via `@tailwindcss/vite` (no `tailwind.config`, no PostCSS config), `@astrojs/mdx` 8, `@astrojs/sitemap`, `clsx`. Node 22.19+ required by `undici` (desktop: 22.23.2, laptop: 24.15). All components are `.astro`; no React, no daisyUI. No database: Supabase (client, edge function, migrations) was removed; forms use Netlify Forms.
- **Git:** github.com/bhav-bains/website-fadeaway-2-0 (`main`, `dev`). The remote is named `origin` on the desktop and `bhav-laptop` on the laptop; check with `git remote`. `main` is production and stays untouched during the rebuild (see section 2).
- **Windows / PowerShell:** plain `npm` is blocked by the execution policy on the laptop; use `npm.cmd run dev` (or set `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once).
- **Config:** `astro.config.mjs` sets `site: "https://fadeawaycreatives.com"`. **URL form: trailing slash everywhere** (`trailingSlash: 'always'`, `build.format: 'directory'`): every page is `/path/`, and `routes.ts`, canonicals, JSON-LD, the sitemap and form actions all use it. Hardcoded paths need the slash too (`/contact/`). In `npm run dev`, `/path` without the slash 404s by design; Netlify 301s it to `/path/` in production. `public/robots.txt` allows all and points to `sitemap-index.xml`. No `netlify.toml`. `public/_redirects` (Oct 3) holds the 301s for old production URLs: `/sports/` → `/solutions/sports/`, `/wellness/` → `/solutions/wellness-counselling/`, `/services/web-design/` → `/services/build/`. They take effect on the live site with the launch merge. Old `/blog/` URLs (index + 3 posts, once live on production) get their 301s when `/articles/` is built.
- **Layout:** `src/layouts/BaseLayout.astro` for every page: head (fonts, `SeoHead`, `Analytics`), skip link, Header, `<main id="main">`, Footer. Pages render only their sections inside it. Props: the SeoHead props plus `mainClass`.
  - `src/components/seo/SeoHead.astro`: title, description, canonical (trailing slash, production domain), robots, OG, Twitter, one JSON-LD `@graph`. Props: `title`, `description`, `canonical`, `ogImage`, `ogImageAlt`, `ogType`, `noIndex`, `jsonLd` (array of page nodes). Warns at build when title > 60 or description > 155 chars.
  - `src/components/seo/Analytics.astro`: GA4 + Meta Pixel, IDs in `site.ts`.
  - `src/lib/schema.ts`: JSON-LD builders (`organizationSchema`, `websiteSchema`, `howToSchema`, `faqSchema`, `breadcrumbSchema`, `serviceSchema`, `aboutPageSchema`, `founderSchema`, `buildGraph`, `serializeJsonLd`). Organization + WebSite are on every page; entity facts come from `src/data/site.ts`. Pages pass their own nodes (HowTo, FAQPage...) via the layout's `jsonLd` prop, built from the same data the page renders.
  - Default OG image: `public/og-default.jpg` (1200x630, `defaultOgImage` + `defaultOgImageAlt` in `site.ts`). Pages can pass their own `ogImage`.
  - Sitemap excludes noindex pages (filter in `astro.config.mjs`).
- **Header / Footer:** `Header.astro`, `Footer.astro`, fed by `src/data/navigation.ts` (no `#` placeholder links left). The nav's Growth sub-services ("SEO + AEO · Full Audit · Growth Strategy · CRO · Paid Media") no longer match the homepage Growth tiles; align them when the nav is revisited.
- **Routes:** every internal URL lives in `src/data/routes.ts`; link to `routes.x`, never a hardcoded path.
- **Live pages (`src/pages/`):** rebuilt: `/`, `/services/build`, `/services/growth`, `/solutions/ecommerce`, `/solutions/wellness-counselling`, `/solutions/boutique-fitness`, `/solutions/sports`, `/labs`, `/about`, `/audit`, `/audit-success`, `/demo-request`, `/demo-success`, `/contact`, `/contact-success` (merged into `dev` Oct 2, copy approved Oct 2; WhatsApp link from `site.ts` `whatsapp`, kept out of `sameAs`), and `404.astro`. (Netlify serves `dist/404.html` for missing URLs; copy in `copy/404.md`, approved). noindex pages get no canonical tag.
- **Parked pages (`src/pages/_inactive/`, not routed by Astro):** `home-2025.astro` (the previous homepage, for reference), old index, `blog/index`, `blog/[slug]`, the old `demo-request` / `demo-success` (replaced by the rebuilt pages), `services/web-design`, the old `sports` / `wellness` pages (parked Oct 3; their URLs 301 via `public/_redirects`).
- **Page content lives in `src/data/pages/<page>.ts`** (e.g. `home.ts`), copied word for word from `/copy/<page>.md`. Blocks never contain copy; pages pass content in.
- **Components:**
  - `src/components/blocks/`: shared page blocks (see section 7).
  - `src/components/blocks/hero/`: `Hero.astro` picks a variant (`centered`, `split`, `editorial`, `visual`, `showcase`, `statement`, `blueprint`); the homepage ships `visual`, service pages `blueprint`. `HeroPreview.astro` lets a page offer variants in `npm run dev` via `/?hero=<name>` (or `all`).
  - `src/components/ui/`: `Icon.astro` (shared line icons: add new ones to the `IconName` type and the `icons` map), `ArrowLink.astro` (text link with arrow), `LineRings.astro` (generic oversized ring line art), `Logo.astro`, `SocialIcon.astro`.
  - `src/components/illustrations/`: decorative SVG illustrations, named in page data through the `index.ts` registry (AiShopping, Ask, Booking, Class, Court, Cycle, Dashboard, Ecommerce, Fitness, Growth, Launch, Layers, Quote, Radius, Sports, Wellness, Wireframe). No words inside, theme tokens only, `aria-hidden`.
  - `Button.astro` renders an `<a>` when given `href`, a `<button>` otherwise; never wrap a Button in a link. New blocks use `size="base"`.
  - Legacy (used by `_inactive` pages only, including the old sports / wellness pages; safe to retire): AgitatorCard, AgitatorSection, Badge, Card, FeatureGrid, Hero (root), LabsMVPSection, PackagesSection, PillarsSection, ProjectShowcase, ROISection, ServiceCard, ServicesSection, SolutionSection, StepsGridSection, TestimonialSection.
- **Forms:** all **Netlify Forms** with honeypot `bot-field`: `website-contact-form` (`/contact`, name kept from the old page so notifications keep working), `audit-request` (`/audit`), `demo-request` (`/demo-request`), `labs-intake` (`/labs/start`). The new forms use `blocks/form/` (`FormHero`, `Field`), with the form name in the page data. `Field` also has `checkboxes` (multi-select pills, posts `name[]`) and `radios` (single-select pills); `select` options are themed. The book-a-call link lives in `site.ts` `bookingUrl` (Google Calendar booking page, founder Oct 4); every "book a call" link reads it (first use: under the `/labs/start/` form). Where submissions go is still open (section 10).
- **Content collections** (`src/content.config.ts`, `glob()` loaders, `z` from `astro/zod`): `case-studies` (3 dev-only placeholder entries, see section 8), `testimonials` (empty), `blog` (3 placeholder-era posts, free-form tags). Tags validated against `src/data/tags.ts`. `src/lib/case-studies.ts` → `getCaseStudies({ tag, limit })`. `src/data/landing-content.ts` is only used by `_inactive/index.astro`.
- **Theme / tokens:** `src/styles/theme.css` is the single source for design tokens (and the basis for the Claude Design theme). Two layers: brand palette (`fadeaway-*`, the cool-grey `neutral-*` scale) and semantic tokens (`canvas`, `surface`, `surface-raised`, `ink`, `ink-soft`, `ink-muted`, `line`, `accent`, `highlight`, `font-display`, `font-body`, `radius-card`, `radius-control`, `shadow-glow-*`, `max-w-site`). **New blocks use semantic tokens only**; no hex values, `rgba()` or `[#...]` in components. Type scale (sm 16px to 6xl 80px) and 8px spacing steps 1 to 10 match the pre-v4 site.
- **Fonts:** Outfit + DM Sans, self-hosted via the Astro Fonts API (`fonts` in `astro.config.mjs`, `<Font>` in the layout), exposed as `--ff-outfit` / `--ff-dm-sans`.
- **Styles:** `src/styles/globals.css` imports the theme, keeps two v3-compat base rules (border color, button cursor), base heading styles, and shared classes are `@utility` blocks (`section-padding`, `container-max`, `gradient-text`, `glass-effect`, `glass-dark`, `btn-primary/secondary/tertiary`, `input-primary`, `badge-primary`, `card-glass`, `text-balance`, `no-scrollbar`).
- **Images:** `src/assets/*.png`, rendered through `astro:assets` `<Image>` (webp output).
- **Missing:** `/articles` (on hold for launch, see section 10). `/resources` is retired; `/privacy` and `/terms` are built.
- **Old copy still in code** (`site.ts`, parked `_inactive` pages): replaced by `/copy/` as each page is rebuilt.
- **Claude Design sync** (`.design-sync/`): the brand tokens, fonts and a conventions guide are synced to the Claude Design project "Fadeaway Creatives". Tokens-only (Astro components can't be imported there). Re-run `/design-sync` after `theme.css` changes; `.design-sync/NOTES.md` has the steps.
- `.env` is gitignored. Never print or commit it.

## 2. How we work

- **Copy source of truth is `/copy/`.** One file per page (`copy/home.md` first). Build from it exactly. **Never write, rewrite, shorten, or "improve" copy.** If something reads wrong or doesn't fit the design, flag it and ask.
- **Copy changes the user gives in chat are approved.** Apply them in the code and update the `/copy/` file in the same change, so the file always matches the site. Expect frequent updates; the current file is the base.
- **Positioning: AEO leads.** Answer engine optimization is the focus and the market's hot term. When listing SEO/AEO services, put SEO + AEO first.
- **Work happens on `dev`.** No per-page branches and no pull requests by default. A separate branch only when a specific piece of work needs it.
- **Build every page on `dev` first. No merges to `main`** until all pages are built and tested; then one push to production.
  - **Launch = the merge of `dev` into `main`, and it must be a real merge commit (`git merge --no-ff dev`), not a fast-forward.** Every page date comes from git first-parent history (section 4, "Dates and sitemap"): a page's `dateModified` / sitemap `<lastmod>` is the last merge that changed one of its source files, and a case study's `datePublished` is the day its entry first lands on the built branch (the launch merge on `main`). A fast-forward would carry the `dev` commit dates instead. After the first production deploy, check one page's sitemap `<lastmod>` and JSON-LD show the launch date (Netlify must have full git history; a shallow clone logs a `[git-dates]` warning).
- **Sync habit:** start every session with `git pull` on `dev`, end every session with `git push` on `dev`.
- **Page by page, section by section.** Implement one section at a time, show the diff, wait for review, then commit to `dev`.
- **Reusable blocks.** Homepage first; its blocks become the shared blocks for every later page, so build them to be reusable, not homepage-specific.
- **Design direction: fresh, not generic.** Break the usual template patterns (endless card grids, identical section layouts) and give the eye something new in each section, while staying clean and on-brand. Vary layouts across a page; prefer a considered idea (annotated visuals, oversized type, open lists) over the default card.
- **Decoration = big, subtle line SVGs, not glow blobs.** For atmosphere in cards and panels, use an oversized line illustration that relates to the content (theme colour, low opacity, bleeding off an edge, masked to fade toward the text). Avoid blurred gradient "glow" circles.
- Test locally before committing. **Claude verifies with `npm run build` and the HTML in `dist/` only.** Never open the browser pane, take screenshots, or start a dev/preview server (not even in the background to curl a page) without asking first and getting a yes. The user reviews visually in their own `npm.cmd run dev`.
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
- **Dates and sitemap (founder, Oct 3): dates are metadata only, never shown on the page.** Every date comes from git through `src/lib/git-dates.ts`; never hand-type a date or use build time.
  - **Case studies:** Article `datePublished` / `dateModified` from git (already built; see section 2 for the launch merge rule). Also emit `og:type` `article` with `article:published_time` and `article:modified_time` meta tags from the same dates.
  - **Every other indexable page:** `dateModified` in its page JSON-LD (WebPage, CollectionPage, AboutPage, ContactPage), from the latest git date among the files that make the page.
  - **Built Oct 3:** `src/lib/git-dates.ts` (UTC ISO timestamps from first-parent history, the same format `@astrojs/sitemap` writes) → `src/lib/page-dates.ts` (`PAGE_SOURCES`: data + copy files per route; route files and case-study entries are found automatically; **add a line for every new page**) → sitemap `serialize` in `astro.config.mjs` and `SeoHead` (stamps `dateModified` on the page node, adds a WebPage node where a page has none, Article `datePublished` + `article:*_time` meta). No frontmatter date overrides.
  - **Dynamic sitemap:** `@astrojs/sitemap` regenerates the sitemap on every build, so new pages and new case studies appear automatically with no manual list. Every URL gets `<lastmod>` = the latest git date among the files that make that page: its route file in `src/pages/`, its data file in `src/data/pages/`, its copy file in `copy/`, and for case-study pages the entry in `src/content/case-studies/`. Implement with the integration's `serialize` option and one route-to-source-files map (shared with the JSON-LD `dateModified`). A page with no known source gets no `lastmod` (never the build time, which would mark every page as changed on every deploy). Noindex pages (success pages) stay out. `public/robots.txt` keeps pointing to `sitemap-index.xml`.
  - **After launch:** submit `https://fadeawaycreatives.com/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools.
- Pending dev decision before launch: robots.txt rules for AI crawlers. OpenAI's **GPTBot** (training) and **OAI-SearchBot** (live search) are separate; blocking GPTBot does not remove the site from ChatGPT search, blocking OAI-SearchBot does. Don't change robots.txt without asking.

## 5. Entity facts: use this exact wording everywhere

- Name: **Fadeaway Creatives** (Labs is **Fadeaway Labs**, part of the same entity)
- **Founder-led · 15+ years of experience · Fadeaway est. 2023**
- Location line: **"Vancouver, BC, working with clients across Canada and the US."**
- Organization schema: `areaServed` = Canada, United States; `foundingDate` 2023; address Vancouver, BC, Canada. `sameAs`: Instagram, Facebook, LinkedIn (confirmed, in `src/data/site.ts`); Crunchbase, Clutch, GoodFirms, DesignRush once claimed (pending). `knowsAbout`: SEO, answer engine optimization, web development, e-commerce, business process automation, AI implementation, MVP development, plus the platforms and tools we genuinely use (Shopify, WooCommerce, WordPress, BigCommerce, headless commerce, Next.js, Astro, Shopify Hydrogen, Stripe, Google Search Console, Google Analytics, Google Merchant Center, Google Ads, Klaviyo, Meta Ads, ChatGPT, Perplexity, Google Gemini). Keep this list and the logo bands in sync; never list a tool we don't use.
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
| Labs intake | /labs/start + /labs/start/success (built Oct 4 from `copy/labs-start.md`, Claude draft awaiting approval; Netlify form `labs-intake`; success page noindex, out of the sitemap). Every Labs page CTA uses `routes.labsStart`. |
| About | /about |
| Free audit | /audit + /audit-success (built Oct 1 from `copy/audit.md`, copy approved; Netlify form `audit-request`). Every "Get Your Free Audit" CTA uses `routes.audit`. The `AuditCta` block (URL field) carries `?website=` to the form. Promise: branded report within 24 hours. |
| Demo request (fitness, wellness, sports) | /demo-request + /demo-success (rebuilt from `copy/demo-request.md`, Netlify form `demo-request`; success page noindex, out of the sitemap) |
| Old service page | /services/web-design (parked in `_inactive`; 301 to /services/build in `public/_redirects`) |
| Old solution pages | /sports, /wellness (live on production until launch; pages parked in `_inactive`, 301s to /solutions/sports and /solutions/wellness-counselling in `public/_redirects`) |
| Portfolio | /portfolio |
| Resources (header dropdown, no landing page) | Case Studies /case-studies · Portfolio Work /portfolio · Articles /articles · About /about (founder, Oct 3). /resources is retired; "View All Resources" CTAs go to /articles |
| Contact | /contact |
| Privacy / Terms | /privacy, /terms |

If a live URL changes, add a 301 in Netlify `_redirects` (ask first).

## 7. Shared blocks (built on the homepage, reused everywhere)

All in `src/components/blocks/`. Mobile-first, semantic tokens only, no copy inside (content comes from `src/data/pages/*.ts`).

- **SeoHead / BaseLayout:** all meta, OG, Twitter, canonical, robots, JSON-LD `@graph`; header, footer, sitewide Organization + WebSite schema. Done.
- **Section:** shell for every section: anchor `id`, optional `eyebrow` / `heading` (H2) / `intro` (one paragraph or an array of paragraphs; `introStyle="wide"` for an answer capsule), `layout` (`stack` | `split`, split pins the header left on lg), `tone` (`canvas` | `alt` | `surface` | `deep`; pages alternate `canvas` / `alt` bands), `width` (`site` | `narrow` | `prose`), `separator`, an `actions` slot for buttons/links under the intro, `labelledBy` when the H2 lives inside the content, and `lead` (a standfirst above the header; solutions pages put the answer capsule here in the first section after the Hero instead of a standalone paragraph block).
- **Hero** (`hero/`): display line above the H1, eyebrow, H1, sub-headline, two CTAs. Answer capsule renders in the Trust Bar directly under it.
- **IconGrid:** icon tile + title + text. `size="sm"` for one-line captions (Trust Bar), `size="md"` for a sentence or two (Labs). `columns` 2 to 4.
- **CardGrid:** illustration + title + prose + link, whole card clickable (Industries).
- **NumberedList:** 01 to 04 points with hairlines, no icons (Why; pairs with `layout="split"`).
- **ServiceGrid:** service cards with a tone (`accent` | `highlight`), oversized corner line art (`build` | `growth`), icon badge, sub-service tiles, footer link (Build & Growth).
- **Steps:** numbered process with a connector line; pair with `howToSchema()` fed the same items (How It Works).
- **FeatureList:** icon beside title + one sentence, hairline dividers, no cards (Method).
- **ProofGrid:** case-study cards from `getCaseStudies()`; renders nothing when empty; columns adapt to 1, 2 or 3 entries.
  - **Real Work sections** (Home, About, Build, Growth, solution pages) use **WorkGrid** fed by `getRealWork(tag)` (`src/lib/work.ts`): case studies with the page tag first, then featured and labs entries from `portfolio.yaml`, max 3; case studies render as **CaseStudyCard** (extracted from ProofGrid), the rest as **WorkCard**. Live in production since Oct 4 (no `showInProduction` gate).
- **Faq:** native `<details>` accordion from a `faq` array; pair with `faqSchema()` fed the same array.
- **CtaBlock:** heading, one line, one button. `layout="split"` for inline call-outs (Labs), `layout="center"` with `headingAs="h2"` for a closing CTA.
- **Added on the e-commerce page:** **Breadcrumb** (+ `breadcrumbSchema()`), **LogoBand** (platform/tool marquee in the Hero), **AnnotatedVisual** (numbered markers over an illustration), **BentoGrid** (numbered points + CTA tile), **ServiceIndex** (editorial service rows with optional links + CTA), `Steps direction="vertical"` (timeline for longer steps), `serviceSchema()`. Section line art lives in `illustrations/` (`IllusCycle`, `IllusAsk`), placed in a split Section's `actions` slot. No glow blobs in shared blocks or hero variants: CtaBlock, ServiceGrid, Steps and the heroes use line art (`ui/LineRings.astro` is the generic oversized ring art for backgrounds). Legacy components still have glows; they retire with their pages. Button keeps its small hover glow.
- **Added on later pages:** service pages: **SpecGrid**, **ServiceRows**, **LinkIndex**, **SystemFlow** (6-step snake pipeline + HowTo), **Ladder**, **AuditCta**; funnel pages: **PricingCard** / **PricingSection**, **DemoOffer**, **Timeline**, **ForkCallout**, `form/` (**FormHero**, **Field**; also used by `/labs/start/`); Labs: **LinkCards**; About: **FactList**, **FounderCard**.
- **Pipeline:** stages as CRM-style chevron segments, accent to highlight; horizontal bar on lg, stacked and pointing down below (homepage `#salesperson`).
- Still to build: **Testimonials**, **BlogCards** (render nothing until real content exists).

## 8. Content collections and tags

Collections (filled only with real, permission-confirmed content): `case-studies`, `testimonials`, `posts`.

**Central work collection (founder, Oct 4): `src/content/portfolio.yaml` holds every Fadeaway project, one item each** (case-study index entries, featured, list, labs). Pages pull from it through `getWork({ kind, tag, limit })` (`src/lib/work.ts`, skips `hidden: true`); never hardcode projects on a page. Distribution: `/portfolio/` shows all visible work in this order: case studies, featured, labs, list (spec: `copy/portfolio.md`); `/labs/` shows `kind: labs` (From Labs to Live Users = entries without the `internal` tag, then the `internal` row: demo sites and internal tools, "Internal" badge, never linked via `workHref`; **`internal` entries appear on /labs/ only**: `getWork()` skips them unless `includeInternal: true`); Home, Build, Growth and solution pages' "Real Work" show case studies with the page tag first, then featured and labs entries with that tag, max 3 cards; list items appear only on `/portfolio/`. Full case-study stories stay in `src/content/case-studies/`; their `portfolio.yaml` entry points to them with `caseStudy`. Outbound `rel` comes from each entry (`noopener` always; `noreferrer` on featured + list for now; `nofollow` only when set). Adding a project = adding one item; unhiding an entry publishes it everywhere it belongs.
Each entry has `tags`. Tag names (use exactly): `featured`, `ecommerce`, `wellness-counselling`, `boutique-fitness`, `sports-academies`, `labs`, `labs-product`, `build`, `custom-website`, `website-redesign`, `website-migration`, `growth`, `internal` (Labs-only, never linked). The three website tags are Build sub-tags (founder, Oct 4): keep `build` on the entry for filtering, and use the optional `displayTags` field to pick which chips show (NWP and Echo show Custom Website + Growth).
**Never invent a client, result, quote, or article.**

- **Real entries** need `permissionConfirmed: true`; the build fails without it.
- **Placeholder entries** (`placeholder: true`) exist only to design layouts. `getCaseStudies()` shows them in `npm run dev` and drops them from every production build (live site and deploy previews); ProofGrid tags them "Placeholder". `src/content/case-studies/placeholder-*.md` are three of these; `placeholder-ecommerce.md` documents every field a real case study needs.
- **Launch plan:** 3 real case studies replace the placeholders (copy a placeholder file, fill it in, remove `placeholder: true`, add `permissionConfirmed: true`).

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
- [ ] Sitemap lists the page with a git-based `<lastmod>`, and its JSON-LD `dateModified` matches (noindex pages never appear in the sitemap)

## 10. Rebuild status

- **Home (`/`): all sections built** from `copy/home.md` (Hero, Trust Bar, Industries, Salesperson (Pipeline, added Oct 2), Why, Build & Growth, How It Works, E-commerce, Labs, Real Work, Method, FAQ, closing CTA). Local QA passes: one H1, title/description lengths, no dashes, no `#` links, HowTo + FAQPage match the visible text.
  - Open before launch: the launch-only salesperson line ("This site works the same way...", in `copy/home.md`) goes in only once the audit report workflow is live, Lighthouse + schema validator pass.
- **E-commerce (`/solutions/ecommerce`): all sections built** (merged into `dev` Sept 30) from `copy/ecommerce.md` (Hero statement + platform logo band, AI Shopping with the answer capsule as lead, Standard bento, What We Do (ServiceIndex), How It Works (vertical Steps), Real Work, FAQ, closing CTA). Schema: BreadcrumbList, 6 Service, HowTo, FAQPage. Sections alternate canvas / `alt` bands.
  - Renders nothing yet: Testimonials (no real quotes), From the Blog (no `/resources`; data is `blog` in `ecommerce.ts`). Real Work hidden in production until `/portfolio` exists.
  - Copy approved Sept 30 (meta description, answer capsule, Service schema list, FAQ).
- **Build (`/services/build`): all sections built, merged into `dev` Oct 1.** Service pages use the `blueprint` Hero and drafting-style line art (SpecGrid, ServiceRows, IllusLayers, IllusQuote) so they read differently from solutions pages. Schema: BreadcrumbList, 4 Service, HowTo, FAQPage. Copy approved Oct 1.
- **Demo request (`/demo-request`, `/demo-success`) and Free Audit (`/audit`, `/audit-success`): built**, copy approved Oct 1. Open: audit workflow + branded report template (24-hour promise), where form submissions go.
- **Growth (`/services/growth`): all sections built from `copy/growth.md` v2, merged into `dev` Oct 1.** Copy items still marked "needs approval" in the copy file. No prices anywhere. Centerpiece: How We Move Revenue (`SystemFlow`, 6-step snake pipeline, HowTo). New blocks: `SystemFlow`, `Ladder`; SpecGrid `columns`/`art`, ServiceIndex `art`, AuditCta optional `text`. Results Strip renders only when `results` in `growth.ts` has real numbers. Schema: BreadcrumbList, 7 Service, HowTo, FAQPage.
- **Wellness & Counselling (`/solutions/wellness-counselling`): all sections built as a conversion funnel, merged into `dev` Oct 1.** Some copy items still marked "needs approval" in the copy file. First page with real prices (PricingCard). New blocks: `PricingCard`, `DemoOffer`, `Timeline`; BentoGrid handles 4 items + CTA; CtaBlock optional `link`; `serviceSchema` accepts `offers` (one Offer per currency, USD + CAD at the same number: clients pay in their own currency, the US is the growth market). The /wellness/ 301 is in `public/_redirects`.
- **Boutique Fitness (`/solutions/boutique-fitness`) and Sports Academies (`/solutions/sports`): all sections built, merged into `dev` Oct 1.** Copy items still marked "needs approval" in their copy files. Same funnel blocks as Wellness; pricing body is the shared `PricingSection`. Sports adds a Method section, a founder note ("Why Fadeaway", founder's own sports lines still open) and a Hero `proofLine`. Old `/sports/` and `/wellness/` 301 via `public/_redirects`.
- **Labs (`/labs`): all sections built from `copy/labs.md`, merged into `dev` Oct 1.** "We always cookin'." is the display line (not the H1) and the CTA bookend (`CtaBlock signoff`). Hero art `IllusCourt` is an original abstract fadeaway shot (no real player likeness). Products (#products) and the founder quote render nothing until supplied. New: `LinkCards`, `IllusLaunch`, IconGrid optional `link`, `chat` icon.
- **Labs updates (founder, Oct 4):** Why Labs Exists and How Labs Pricing Works removed (capsule is the What We Build intro; pricing is covered by the FAQ), no 24/7 salesperson line on Labs, hero CTAs scroll to #what-we-build and #idea-to-mvp, "From Labs to Live Users" (3 across) then the unheaded internal tools row. New: CtaBlock `secondaryCta`, WorkCard "Internal" badge, `internal` tag.
- **About (`/about`): all sections built from `copy/about.md`, merged into `dev` Oct 1.** Entity page: AboutPage (mainEntity → Organization), founder Person (`founderSchema()`, facts in `site.ts` `founder`; sitewide Organization now names the founder). "At a Glance" is a plain-text `FactList`. Open: founder photo, LinkedIn (Person sameAs), name-story and bio lines in his words, contractor wording, directory sameAs URLs.
- **"24/7 salesperson" framing (copy added Oct 2): applied on every page.** Homepage `#salesperson` section, plus one adapted line on Build, Growth, E-commerce, Wellness, Fitness, Sports and Labs. Marked `Added Oct 2` in each copy file.
- **Share image:** sitewide default `public/og-default.jpg` is in place; page-specific images are optional.
- **Privacy (`/privacy`) and Terms (`/terms`), merged into `dev` Oct 2: built from DRAFT copy (`copy/privacy.md`, `copy/terms.md`, written by Claude at the founder's request Oct 2), awaiting founder review and legal review before launch.** Shared `LegalDoc` block (visible effective date, sticky table of contents); `webPageSchema()`. `src/data/pages/legal.ts` mirrors the copy files word for word. Open: cookie consent decision (GA4 + Meta Pixel load for everyone, no banner).
- **Case Studies (`/case-studies/` + `/case-studies/[slug]/`), merged into `dev` Oct 3: built from `copy/case-studies.md`, copy approved Oct 3 (title/description gained AEO).** Real entries (all copy approved Oct 3), each with a share image and a gallery from `src/assets/case-studies/<client>/`: New West Progressives and Echo Storytelling Agency (`featured`, `build`, `growth`), HeartStamp (`featured`, `growth`, `ecommerce`; results chips describe the work until real results are supplied). The Case Studies pages show real entries only, in dev too (`getCaseStudies({ realOnly: true })`). Article `datePublished` / `dateModified` and `article:*_time` meta come from git (section 4). ProofGrid cards now link to the detail page (`caseStudyHref()`); the live-site link lives on the detail page. Tag chips via `TAG_DISPLAY` / `visibleTags()` in `tags.ts` (`featured` is never shown). Schema: CollectionPage + ItemList, Article (about the client), BreadcrumbList, FAQPage (listing).
- **Portfolio (`/portfolio/`): built Oct 4 from `copy/portfolio.md`, copy approved Oct 4.** All projects come from `src/content/portfolio.yaml` via `getWork()` (section 8). Blocks: WorkCard (line art from `workArt()` when no image), WorkCompactCard, WorkGrid, CaseStudyCard. Homepage e-commerce link is `/portfolio/#ecommerce`. Labs `#products` (non-internal labs entries; SoftwareApplication schema for ours/cofounded) and `#see-it-working` (`internal` entries, Labs only) come from the same collection.
- **Articles (`/articles/` + `/articles/[slug]/`): on hold for launch (founder, Oct 4).** The founder writes 3 articles first; then build from `copy/articles.md` (drafted Oct 4, awaiting approval; it has the listing, template, `articles` collection fields and writing checklist), add the Resources menu link back (commented out in `navigation.ts`) and decide the old `/blog/` 301s and the 3 placeholder-era posts. Nothing links to `/articles/` until then (the "From the Blog" sections render nothing without posts).
- **Next:** remaining pages in the URL map (section 6). Every homepage link to them must resolve before launch.

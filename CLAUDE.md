# CLAUDE.md: fadeawaycreatives.com

Astro site, hosted on Netlify. This file gives Claude Code the standing rules for the website rebuild. Read it at the start of every session.

---

## 1. Project structure (first-pass map; Claude Code: verify and extend in the first session)

- **Stack:** Astro 5, integrations `tailwind` (Tailwind 3 + daisyUI, `daisy-` prefix), `react`, `mdx`. React 18 islands. Supabase JS client.
- **Git:** local branch `dev`, remote `bhav-laptop` → github.com/bhav-bains/website-fadeaway-2-0 (`main`, `dev`). Confirm which branch Netlify deploys to production before merging anything.
- **Layout:** one layout, `src/layouts/Layout.astro`. Sets title, description, OG and Twitter only. Loads GA4 (G-4T10QZ6L2D) with a plain `<script>` (should be `is:inline`). No canonical, no robots meta, no JSON-LD, no og:url, no `site` set in `astro.config.mjs`.
- **Header / Footer:** React components (`Header.tsx` with `client:load`, `Footer.tsx`). Both are full of `#` links (Services, Process, Pricing, Blog, social icons, Privacy, Terms). Footer location line is old wording.
- **Pages:** `/` (`index.astro`, ~24 KB, content partly from `src/data/landing-content.ts`), `/services/web-design`, `/audit-request`, `/audit-success`, `/demo-request`, `/demo-success`, `/blog`, `/blog/[slug]`.
- **Broken links on the current homepage:** `/services/high-performance`, `/services/local-seo`, `/services/growth-automation` (no such pages).
- **Components (Astro):** ContentSection, FeatureGrid, PillarsSection, ProjectShowcase, RealityCheck, ROISection, ServiceCard, ServiceHero, TheSolution (mostly built for `/services/web-design`). **(React):** Badge, Button, Card, ContactForm, Header, Footer, Input.
- **Forms:** audit and demo forms use **Netlify Forms** (`data-netlify="true"`). The homepage ContactForm posts to a **Supabase edge function** (`supabase/functions/contact-form`). Two backends: decide whether to keep both.
- **Content collections:** `blog` only (`src/content/blog/*.mdx`, 3 placeholder-era posts with `tags`). No case-studies or testimonials collections yet.
- **FAQ today:** `<details>` rendered server-side from `landing-content.ts` (good), but no FAQPage JSON-LD.
- **Styles/tokens:** `tailwind.config.cjs` (fadeaway orange #FF6B35, teal #00BFA5, graphite/dark; fonts Outfit + DM Sans; custom 8px spacing scale), `src/styles/globals.css`.
- **Missing:** `netlify.toml`, `public/_redirects`, `public/robots.txt`, sitemap integration, og image.
- **Old copy still live in code:** "SEO Agency for Sports & Wellness Brands" titles, `$999 one-time setup`, `$99–199` plans, "Idea-to-MVP from $5,000". All replaced by `/copy/`.
- `.env` is gitignored (good). Never print or commit it.

## 2. How we work

- **Copy source of truth is `/copy/`.** One file per page (`copy/home.md` first). Build from it exactly. **Never write, rewrite, shorten, or "improve" copy.** If something reads wrong or doesn't fit the design, flag it and ask.
- **Page by page, section by section.** One git branch per page. Implement one section at a time, show the diff, wait for review, then commit.
- **Each page merges through a pull request** so Netlify builds a deploy preview to review first.
- **Homepage first.** Its blocks become the shared blocks for every later page, so build them to be reusable, not homepage-specific.
- Don't create or delete pages, routes, or redirects without asking.

## 3. Copy rules (enforced sitewide)

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
- Organization schema: `areaServed` = Canada, United States; `foundingDate` 2023; address Vancouver, BC, Canada. `sameAs` gets LinkedIn, Crunchbase, Clutch, GoodFirms, DesignRush, Instagram, and Facebook once claimed (pending). `knowsAbout`: SEO, answer engine optimization, web development, e-commerce, business process automation, AI implementation, MVP development.
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
| Free audit | /audit (**decision pending:** the live route is `/audit-request`. Either keep `/audit-request` and update copy links, or move to `/audit` with a 301. Ask first.) |
| Demo request (fitness, wellness, sports) | /demo-request (already exists) |
| Old service page | /services/web-design (exists; its future is decided when the Build page is done, 301 to /services/build if retired) |
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
- **CtaBlock:** heading, one line, one button.
- Later pages add **PricingCard** and **Breadcrumb**.

## 8. Content collections and tags

Collections (empty to start, filled only with real, permission-confirmed content): `case-studies`, `testimonials`, `posts`.
Each entry has `tags`. Tag names (use exactly): `featured`, `ecommerce`, `wellness-counselling`, `boutique-fitness`, `sports-academies`, `labs`, `labs-product`, `build`, `growth`.
**Never invent a client, result, quote, or article.**

## 9. QA checklist before merging a page

- [ ] View Source shows all headings, copy, FAQ text, and JSON-LD in the raw HTML
- [ ] JSON-LD validates (schema.org validator / Google Rich Results Test)
- [ ] FAQ visible text matches the FAQPage JSON-LD exactly
- [ ] Title ≤ 60 chars, meta description ≤ 155 chars, one H1
- [ ] No `#` placeholder links; every internal link resolves
- [ ] No em dashes or en dashes in rendered copy (grep the build output)
- [ ] Copy matches `/copy/[page].md` word for word
- [ ] Lighthouse check (performance, accessibility, SEO) on the Netlify deploy preview
- [ ] Mobile layout checked

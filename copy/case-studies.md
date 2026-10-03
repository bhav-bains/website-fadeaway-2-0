---
# Case Studies: listing page (/case-studies/) + detail page template (/case-studies/[slug]/).
# Drafted by Claude, Oct 3 2026. Approved by the founder Oct 3 (title and description: AEO added).
# Resources dropdown item (founder, Oct 3). First real entry: New West Progressives
# (src/content/case-studies/new-west-progressives.md). Echo Stories and HeartStamp follow the same format.
page: case-studies
url: /case-studies/
title: "Website, SEO & AEO Case Studies | Fadeaway Creatives"
description: "Website, migration, SEO and AEO case studies from Fadeaway Creatives: real projects for growing businesses across Canada and the US, with real results."
canonical: "https://fadeawaycreatives.com/case-studies/"
og:
  image: /og-default.jpg
robots: "index, follow"
display_line: "Proof, not promises."
h1: "Website and Growth Case Studies"
answer_capsule: >
  Fadeaway Creatives case studies show real projects for growing businesses across Canada and the US:
  website redesigns, platform migrations, and ongoing SEO, AEO, and campaign work. Each one covers the
  problem, what we built, and what changed, like tripling a civic campaign's website traffic after a Wix
  to WordPress migration. Every result is real and shared with the client's permission.
schema:
  - Organization     # sitewide
  - CollectionPage   # with an ItemList of the case study detail URLs
  - BreadcrumbList   # Home > Case Studies
  - FAQPage
last_updated: TODO
faq:
  - q: "What kind of results do your projects get?"
    a: "It depends on the project and where the business started, so every case study shows what changed for that specific client: more traffic, more sign-ups or sales, a faster site, or a smoother launch. We never invent or round up a number, and we never guarantee rankings. A free audit shows where your own site stands."
  - q: "Do you only work in the industries shown here?"
    a: "No. We work with growing businesses across Canada and the US, with deep experience in e-commerce, wellness and counselling, boutique fitness, and sports programs. Our Build and Growth services are open to any business. Browse our portfolio to see the full range of websites and projects we've delivered."
  - q: "How do I start a project like these?"
    a: "Start with a free audit. We review your website, SEO and AEO readiness, performance, and local visibility, then send a branded report within 24 hours. You'll know exactly what to fix first, and if you want help, we scope the project with a fixed price before any work starts."
---

<!--
Page job: the proof hub. Short and visual: cards first, words second. Each card opens a full case study.
Keep it simple for launch (founder, Oct 3): one listing page + one detail template. No filters until there are 6+.
Word counts: capsule 60 (40 to 80). FAQ answers 56 / 48 / 49 (40 to 60).
-->

## Section 0: Meta Data (/case-studies/)

| Field | Value | Status |
|---|---|---|
| Title tag | Website & SEO Case Studies \| Fadeaway Creatives (52 chars) | Approved Oct 3 |
| Meta description | Website, migration, SEO and AEO case studies from Fadeaway Creatives: real projects for growing businesses across Canada and the US, with real results. (151 chars) | Approved Oct 3 |
| Display line | Proof, not promises. | Approved Oct 3 |
| H1 | Website and Growth Case Studies | Approved Oct 3 |
| Answer capsule | See frontmatter (60 words). Mentions the NWP result, so it goes live only once NWP is published | Approved Oct 3 |
| Schema | Organization (sitewide), CollectionPage + ItemList, BreadcrumbList, FAQPage | Set |

# Listing page (/case-studies/)

## Breadcrumb {#breadcrumb}

Home → Case Studies

## Hero {#hero}

- Display line (bold, largest type, above the H1): **Proof, not promises.**
- Eyebrow: Case Studies
- H1: Website and Growth Case Studies
- Sub-headline: Real projects, real results. See how we've helped growing businesses get found, win customers, and run better online.
- Answer capsule: renders as real text directly under the Hero (frontmatter).

## Case Studies {#case-studies}

- All published case studies, strongest first (`rank`), as cards.
- Card: image, client name, title, summary, result chips, and **Read the case study →** linking to `/case-studies/[slug]/`.
  The whole card is the link. (Different from ProofGrid today, where the client name links out to the live site.
  On cards, link to our case study; the live-site link lives on the detail page.)
- Layout follows ProofGrid's count rules (1 = wide feature, 2 = side by side, 3+ = 3 across).

## More of Our Work {#more-work}

One line + link, under the grid:
Want to see more? We've built websites for e-commerce brands, practices, nonprofits, and software companies.
[Link: See Our Portfolio Work → /portfolio/]

## Frequently Asked Questions {#faq}

From frontmatter `faq` (visible text and FAQPage JSON-LD from the same data).

## CTA {#cta}

Reuse AuditCta:
- Heading: Want Results Like These?
- Line: Start with a free audit of your website. We'll show you what's working, what isn't, and what to fix first.
- Button: Get Your Free Audit → /audit/

**Empty state (no published case studies yet in production):** render the Hero, the More of Our Work line, and
the CTA only. No empty grid, no "coming soon" cards.

---

# Detail page template (/case-studies/[slug]/)

One template for every case study. Content comes from the entry file in `src/content/case-studies/[slug].md`
(frontmatter + markdown body). Only the shared labels and CTAs below live here.

**Meta (per entry):**
- Title tag: `{client} Case Study | Fadeaway Creatives` (NWP: 53 chars). If over 60, use `{client} | Fadeaway Creatives`.
- Meta description: `metaDescription` field (≤155). NWP: 145 chars.
- H1: `title`
- Canonical: https://fadeawaycreatives.com/case-studies/[slug]/
- og:image: the entry's `image` when set, else /og-default.jpg
- Schema: Article (headline = title, description = metaDescription, image, author + publisher = Organization,
  about = the client as an Organization with `url`), BreadcrumbList (Home > Case Studies > {client}).
  No FAQ on detail pages.

**Sections, in order:**

1. **Breadcrumb:** Home → Case Studies → {client}
2. **Header:** eyebrow "Case Study" · tag chips (Build, Growth, industry) linking to those pages · H1 (`title`) · `summary` as the lead paragraph (it's the answer capsule) ·
   link **Visit the live site ↗** (`url`, opens in a new tab)
3. **Hero image:** `image` (the "after"), full width
4. **Quick facts** (reuse FactList): Client (`client`) · Industry (`industry`) · Services (`services`, joined) ·
   Timeline (`timeline`)
5. **Results at a glance:** `results` as large chips (eyebrow: Results)
6. **The story:** the markdown body (The Challenge · What We Did · Ongoing Growth and Campaigns · The Results)
6b. **A Closer Look** (only when the entry has a `gallery`): heading "A Closer Look", extra screenshots of the
   build, the first one wide. Added by Claude, Oct 3 (founder asked to use the full NWP image set): heading approved Oct 3.
7. **Before and after** (only when `beforeImage` exists): heading "Before and After", two images side by side
   (stacked on mobile), labels "Before" and "After"
8. **Testimonial** (only when a permission-confirmed testimonial exists for this client): quote, name, role
9. **CTA** (AuditCta): Heading: Is Your Website Pulling Its Weight? · Line: A free audit shows what's working,
   what isn't, and what to fix first, in a branded report within 24 hours. · Button: Get Your Free Audit → /audit/
10. **More case studies** (only when 2+ published): up to 2 other cards, heading "More Case Studies"

## Schema additions (content.config.ts, case-studies collection)

All optional, so placeholders and older entries still build:

| Field | Type | Used for |
|---|---|---|
| metaDescription | string (≤155) | Detail page meta description |
| industry | string | Quick facts |
| services | string[] | Quick facts |
| timeline | string | Quick facts |
| beforeImage | image() | Before and After section |
| beforeImageAlt | string | Before image alt text |
| ogImage | image() (1200x630) | Detail page share image (added Oct 3) |
| gallery | { image, alt }[] | A Closer Look screenshots (added Oct 3) |

## Where case study cards show elsewhere

Unchanged: Home (`featured`), Build (`build`), Growth (`growth`), industry pages (industry tag), via
`getCaseStudies({ tag })`. Once detail pages exist, every card links to its detail page.

<!--
OPEN ITEMS
- NWP publishes with the relaunch (founder, Oct 3). No publish delay.
- NWP images: src/assets/case-studies/nwp-after.png (new site, browser mockup) and nwp-before.png (old site), 1600x1000.
- NWP testimonial: Alysia Ker, President. Request email later (founder, Oct 3). Testimonial entry only once approved in writing.
- NWP maintenance line: hosting, security updates, backups, uptime monitoring and day-to-day maintenance (founder confirmed Oct 3).
- Echo Stories and HeartStamp: same format, next.
-->

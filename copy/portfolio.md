---
# Portfolio page (/portfolio/): working copy. Drafted by Claude Oct 4 2026 from founder answers (Oct 3 to 4).
# Founder to approve. Build from this file exactly; flag anything that reads wrong instead of rewriting it.
#
# DATA: every project comes from src/content/portfolio.yaml, the central work collection (CLAUDE.md section 8).
# Nothing about a project is written in this file or hardcoded in the page. This page shows ALL visible work.
# Case-study entries point to src/content/case-studies/ for their title, summary, image and results.
page: portfolio
url: /portfolio/
title: "Web Design, SEO, AEO & Growth Portfolio | Fadeaway Creatives"
description: "Web design, SEO, AEO and growth work by Fadeaway Creatives: custom websites, e-commerce stores and Labs products for businesses across Canada and the US."
canonical: "https://fadeawaycreatives.com/portfolio/"
og:
  type: website
  image: /og-default.jpg
robots: "index, follow"
display_line: "Built, launched, still growing."
eyebrow: "Portfolio"
h1: "Web Design, SEO, AEO and Growth Portfolio"
sub_headline: "From custom websites and e-commerce stores to SEO, AEO and lead generation: work we've built and grown for businesses across Canada and the US."
answer_capsule: >
  The Fadeaway Creatives portfolio covers custom websites, redesigns and migrations, e-commerce stores
  (Shopify stores and more), SEO and AEO, and growth campaigns for growing businesses across Canada and the US.
  It also includes our own Fadeaway Labs products, like JabJab MMA and Anvido, built from idea to MVP.
keywords:
  primary: "web design portfolio"
  secondary: ["web development portfolio", "website design examples", "shopify plus website examples", "dental website design examples"]
schema:
  - Organization     # sitewide, from the base layout
  - CollectionPage   # dateModified from git (CLAUDE.md section 4, "Dates and sitemap")
  - ItemList         # inside CollectionPage.mainEntity: every visible entry, in page order
  - BreadcrumbList   # Home > Portfolio
  - FAQPage
faq:
  - q: "How does a project with Fadeaway start?"
    a: "Most projects start with a free audit or a short call. We look at what you have, what's holding it back, and what you need, then send a written scope with a fixed price before any work starts. Website builds, redesigns, migrations and ongoing growth work are all scoped this way."
  - q: "Can you rebuild a website we already have?"
    a: "Yes. Many projects listed here, like CenturionPro and Crane Mountain Dental, replaced an older site that had stopped performing. We rebuild on a modern, modular setup with SEO and AEO built in, and we carry your content, links and search visibility over carefully so nothing important is lost along the way."
  - q: "What is Fadeaway Labs?"
    a: "Fadeaway Labs is where we build software: MVPs, automations, AI tools and web apps. Some are for clients, and some are our own products, like JabJab MMA and Anvido. If you have a product idea or a process you want automated, we can take it from idea to a working first version."
---

<!--
Page job: show the full range of real work fast, then move people to the case studies and the free audit.
Who lands here: prospects comparing agencies (from the Resources menu, the homepage "Real Work" section, service
and solution pages), referrals checking us out, and AI tools looking for proof of what Fadeaway builds.
Rules: no prices; no comparisons to other agencies; no em or en dashes; no placeholder cards; a section with no
visible entries renders nothing. No portfolio detail pages: a card links to the live site, or to its case study.
Word counts: answer capsule 46 (40 to 80). FAQ answers 51 / 52 / 52 (40 to 60).
-->

## Section 0: Meta Data & Keyword Targeting (/portfolio/)

| Field | Value | Status |
|---|---|---|
| Title tag | Web Design, SEO, AEO & Growth Portfolio \| Fadeaway Creatives (60 chars) | Approved Oct 4 |
| Meta description | Web design, SEO, AEO and growth work by Fadeaway Creatives: custom websites, e-commerce stores and Labs products for businesses across Canada and the US. (153 chars) | Approved Oct 4 |
| Canonical | https://fadeawaycreatives.com/portfolio/ | Set |
| Robots | index, follow | Set |
| Open Graph | type website, image /og-default.jpg, title + description as above | Set |
| Display line | Built, launched, still growing. | Approved Oct 4 |
| H1 | Web Design, SEO, AEO and Growth Portfolio | Approved Oct 4 |
| Answer capsule | See frontmatter (46 words) | Approved Oct 4 |
| Primary keyword | web design portfolio | Set (proof page; no ranking target beyond brand + portfolio terms) |
| Schema | Organization (sitewide), CollectionPage with ItemList, BreadcrumbList, FAQPage | Set |
| Dates | `dateModified` in CollectionPage JSON-LD and sitemap `lastmod`, both from git. Sources for this page: `src/pages/portfolio.astro`, its data file, `copy/portfolio.md`, `src/content/portfolio.yaml` | Set |
| Last updated | Metadata only, never visible (CLAUDE.md section 4) | Set |

### Schema detail

- **CollectionPage:** `@id` https://fadeawaycreatives.com/portfolio/#webpage, `name` = title tag, `description` = meta
  description, `isPartOf` the WebSite, `dateModified` from git.
- **ItemList** (`mainEntity`): one `ListItem` per visible entry, in page order (case studies, featured, labs, list).
  Each item: `position`, `name`, `url` (case studies: the case-study detail URL; everything else: the live site URL).
- **BreadcrumbList:** Home → Portfolio.
- **FAQPage:** from frontmatter `faq`; visible text and JSON-LD generated from the same data, word for word.

## Breadcrumb {#breadcrumb}

Home → Portfolio

## Hero {#hero}

- Display line (bold, largest type, above the H1): **Built, launched, still growing.**
- Eyebrow: Portfolio
- H1: Web Design, SEO, AEO and Growth Portfolio
- Sub-headline: From custom websites and e-commerce stores to SEO, AEO and lead generation: work we've built and grown for businesses across Canada and the US.
- Answer capsule: renders as real text directly under the Hero (frontmatter `answer_capsule`).
- Jump links (plain anchor links, no JS), in page order:
  Case Studies → #case-studies · Featured → #featured · From the Lab → #labs · E-commerce → #ecommerce ·
  Practices & Local → #practices · SaaS & Enterprise → #saas · Organizations → #organizations

## Case Studies {#case-studies}

- Eyebrow: Case Studies
- Heading: From Problem to Results
- Line: What each client needed, what we built, and what changed.
- Data: `portfolio.yaml` entries with `kind: case-study`, in `rank` order. Each pulls title, summary, image and results
  from its `caseStudy` entry in `src/content/case-studies/`.
- Card: the same card as /case-studies/ (image, client, title, summary, result chips). The whole card links to the
  case-study detail page.
- [Link: See All Case Studies → /case-studies/]

## Featured Work {#featured}

- Eyebrow: Featured Work
- Heading: Websites, Stores and Growth Programs
- Line: A closer look at websites, stores and growth programs we've delivered.
- Data: `kind: featured`, in `rank` order (4 visible at launch).
- Layout: 2 across on desktop and tablet, 1 on mobile.
- Card: image (line art when the entry has no `image`), industry, chips (above the name, like case-study cards), name, summary, and an
  no Ongoing badge (founder, Oct 4). Button: **Visit Site ↗** (new tab). If the entry has `caseStudy`, the card
  links to the case study instead and the button reads **Read the Case Study**.

## From the Lab {#labs}

- Eyebrow: Fadeaway Labs
- Heading: From the Lab
- Line: Products we build from idea to MVP, for ourselves and for clients.
- Data: `kind: labs`, in `rank` order.
- Card: status badge (Live, Beta, Alpha), chips above the name, name, industry line (it says whose it is: Our product, Co-founded, Client
  build, Industry demo), summary, chips. Button: **Visit Site ↗** (new tab) when the entry has a `url`; no button when
  it doesn't.
- Layout: 3 across on desktop, 2 on tablet, 1 on mobile.
- [Link: Explore Fadeaway Labs → /labs/]
- Under the sports demo card only: [Link: Get Your Free Demo → /demo-request/]

## More of Our Work {#more-work}

- Heading: More of Our Work
- No line under the heading (founder, Oct 4).
- Data: `kind: list`, grouped by `group`, each group in `rank` order. Group order, headings and anchors:
  1. **E-commerce** `{#ecommerce}`. First line under the heading: Featured above: [CenturionPro → #featured]. Full story: [HeartStamp → /case-studies/heartstamp/].
  2. **Practices & Local Businesses** `{#practices}`
  3. **SaaS & Enterprise** `{#saas}`
  4. **Organizations** `{#organizations}`
- Compact card (no image, no logo): name, domain, and the entry's `industry` and up to 3 `chips` when it has them.
  The whole card links to the live site (new tab).
- Layout: 3 across on desktop, 2 on tablet, 1 on mobile.

## Frequently Asked Questions {#faq}

- Heading: Frequently Asked Questions
- From frontmatter `faq` (3 questions). Visible text and FAQPage JSON-LD from the same data.

## CTA {#cta}

Reuse AuditCta:
- Heading: Want Work Like This for Your Business?
- Line: Start with a free audit of your website. We'll show you what's working, what isn't, and what to fix first.
- Button: Get Your Free Audit → /audit/

---

## Build notes

**Links.** Every outbound link opens in a new tab. `rel` is built per entry from `portfolio.yaml`:

| Section | rel |
|---|---|
| Featured | `noopener noreferrer` |
| More of Our Work (15 list entries) | `noopener noreferrer` |
| From the Lab | `noopener` |
| Case studies (internal links to detail pages) | none needed |

`nofollow` is added only when an entry sets `nofollow: true` (none do for now). The founder changes these per entry.

**Accessibility.** Cards that are fully clickable have one link with a clear accessible name (e.g. "RouteThis, visit
site, opens in a new tab"). Status and Ongoing badges are text, not colour only. Jump links are a `<nav aria-label="Portfolio sections">`.

**Empty states.** A section or group with no visible entries renders nothing (no heading, no "coming soon").
Hidden entries (`hidden: true`) never render and never appear in the ItemList.

**Reused blocks.** Breadcrumb, Hero (display line variant), ProofGrid (case studies), a new WorkCard (featured and
labs, with an image-optional variant), a new WorkCompactCard (list), Faq, AuditCta.

## Sitewide changes this page unlocks (done Oct 4)

- Resources menu "Portfolio Work" (/portfolio/) resolves.
- Homepage "Real Work": live in production (the `showInProduction` gate is removed); fed from `getRealWork` (CLAUDE.md section 8).
- Homepage E-commerce link: `/portfolio/?filter=ecommerce` becomes `/portfolio/#ecommerce`.
- Build, Growth and solution pages "Real Work": switch to `getWork` (case studies with the page tag first, then
  featured and labs entries with that tag, max 3).
- Labs page "Our Products" (`owner` ours, cofounded) and "See It Working" (`owner` client, demo): from `getWork({ kind: 'labs' })`.

<!--
OPEN ITEMS
- Screenshots for the 4 featured cards and the Labs cards (Claude can capture them through the desktop browser and
  make mockups, or the founder sends them). Cards ship without images until then.
- FFD Fresno (dental clinic, website rebuild, ongoing): hidden until the new site is live.
- Easytiffin (marketplace): hidden until beta launches.
- Fadeaway Leads CRM (internal, alpha): hidden until screenshots exist; never link the live app. Turn off public
  sign-up on the app and replace "Dominate" in its headline.
- Yoga studio and wellness practice demos: hidden until each is live.
- Optional 5th featured card: Strength Counselling or Phare Counselling (needs one line on what we did).
- List entries: add `industry` + `chips` one by one after launch.
- JabJab MMA and Anvido: add a Fadeaway footer credit; JabJab homepage headline still says "real-time betting odds".

CHANGE LOG
- Oct 4 (founder review): title + H1 now cover web design, SEO, AEO and growth; display line "Built, launched, still
  growing."; range-led sub-headline; capsule names redesigns, migrations, e-commerce stores (Shopify stores and more),
  SEO and AEO, drops "Every project here is real..."; Case Studies heading "From Problem to Results"; Featured heading
  "Websites, Stores and Growth Programs"; Featured 4 across on laptop; no Ongoing badge; line art when a card has no image.
- Oct 4 (founder): capsule drops "from dental practices ... nonprofits"; More of Our Work line removed; card chips moved above the name.
- Oct 4: full page spec. Order changed (founder): From the Lab now sits above More of Our Work. Data moved to the
  central work collection (portfolio.yaml, including case-study index entries). Link rel: noreferrer on featured
  and list, Labs and case studies normal, no nofollow for now (founder). Compact cards for list entries.
-->

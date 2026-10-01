---
# Build Services page copy: working copy. The founder approves and edits it section by
# section during dev. Build each section only after its copy is confirmed.
# Built from the Claude Doc's Build Services Draft tab (rev 313, rechecked Sept 23),
# updated with later decisions and the homepage / e-commerce build lessons. Change log at the bottom.
page: build
url: /services/build
title: "Fadeaway Creatives | Custom Web Development & Redesign"
description: "Custom web development, website redesigns, and e-commerce builds. Enterprise-quality work, a fixed price for every scope, AEO built in."
canonical: "https://fadeawaycreatives.com/services/build"
og:
  title: "Fadeaway Creatives | Custom Web Development & Redesign"
  description: "Custom web development, website redesigns, and e-commerce builds. Enterprise-quality work, a fixed price for every scope, AEO built in."
  url: "https://fadeawaycreatives.com/services/build"
  type: website
  locale: en_US
  image: TODO  # Build-page share image needed
twitter:
  card: summary_large_image
robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
h1: "Custom Web Development, Built to Convert and Rank"
answer_capsule: >-
  Fadeaway Creatives builds custom websites, redesigns existing sites, and
  builds e-commerce stores for growing businesses across Canada and the US,
  engineered for real customers and for AI search, not just Google. Every
  project starts with a written scope of work and a fixed price, and
  migrations keep the search rankings you've already earned.
keywords:
  primary: "custom web development"   # 3,300/mo US KD 2; 250/mo Canada KD 0
  secondary: ["website redesign agency", "shopify website design", "website migration services"]
  # "ecommerce web design agency" belongs to /solutions/ecommerce only (one page, one question).
pricing: none  # No numbers on this page. Builds are scoped and quoted per project.
schema:
  - Organization    # sitewide, from the base layout
  - BreadcrumbList  # Home > Build (no /services hub page, same decision as e-commerce)
  - Service         # one entry each: Custom Web Development, Website Redesign, E-commerce Store Builds, Website Migration. No prices.
  - HowTo           # from How It Works (3 steps)
  - FAQPage         # generated from the faq list below
content_tag: build  # Real Work, Testimonials, and From the Blog pull entries with this tag
last_updated: TODO  # set at launch, visible on the page
---

<!--
Notes for the build:
- Reuse the existing blocks: Breadcrumb, Hero, CardGrid, ServiceGrid/FeatureList, Steps (HowTo),
  ProofGrid, Testimonials, Faq, BlogCards, CtaBlock.
- The industry cards and the Labs cards already exist on the homepage. Reuse the same block;
  the copy below is this page's own wording where it differs.
- Answer capsule renders as real text directly under the Hero.
- [Link: text → url] and [CTA: text → url] are link specs, not visible brackets.
-->

## Section 0: Meta Data & Keyword Targeting (/services/build)

(Review table. Same values as the frontmatter above; the build reads the frontmatter. Change both together.)

| Field | Value | Status |
|---|---|---|
| Title tag | Fadeaway Creatives \| Custom Web Development & Redesign (54 chars) | Updated, needs approval (was 62 chars, over the limit) |
| Meta description | Custom web development, website redesigns, and e-commerce builds. Enterprise-quality work, a fixed price for every scope, AEO built in. (135 chars) | Updated, needs approval |
| Canonical | https://fadeawaycreatives.com/services/build | Set |
| H1 | Custom Web Development, Built to Convert and Rank | Set |
| og:title / og:description | Mirror title tag / meta description | Set |
| og:image / twitter:image | Build-page share image | Needs asset |
| og:url | https://fadeawaycreatives.com/services/build | Set |
| og:type | website | Set |
| twitter:card | summary_large_image | Set |
| Robots meta | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | Set |
| Viewport meta | width=device-width, initial-scale=1, viewport-fit=cover (sitewide, in the layout) | Set |
| Schema: Organization | Inherited sitewide, no LocalBusiness for Fadeaway itself | Set |
| Schema: Service | Custom Web Development, Website Redesign, E-commerce Store Builds, Website Migration. No prices. | Set |
| Schema: HowTo | From How It Works (3 steps) | Set |
| Schema: FAQPage | From the FAQ list, matches visible copy verbatim | Set |
| Schema: BreadcrumbList | Home > Build (no /services hub page) | Updated, needs approval (was Home > Services > Build) |
| Answer capsule | See frontmatter `answer_capsule` (53 words) | Updated, needs approval |
| Visible FAQ block | 6 questions, 40 to 52 word answers | Set |
| Last updated date | Set at launch | Pending launch |
| Internal links | All 4 Solutions pages, /labs, /contact, /demo-request, /audit, /portfolio, /resources. Zero `#` placeholders. | To QA |
| Primary keyword | custom web development (3,300/mo US, KD 2; 250/mo Canada, KD 0) | Set |
| Secondary keywords | website redesign agency, shopify website design, website migration services | Set |
| Pricing display | None. Every build is scoped and quoted | Set |

## Breadcrumb {#breadcrumb}

Home → Build

## Hero {#hero}

- Eyebrow: Website Design and Development for Growing Businesses
- H1: Custom Web Development, Built to Convert and Rank
- Sub-headline: Custom websites, redesigns, and e-commerce stores, built for real customers and for AI search. A clear scope and a fixed price before anything starts.
- Primary CTA: Get a Quote → /contact
- Secondary CTA: See How It Works → #how-it-works
- Answer capsule: renders directly under the Hero, from the frontmatter.

## Built Right, From Day One {#standard}

### AEO & SEO Built In
Schema markup, structured data, and answer-ready content from launch, not bolted on later.

### Clean, Intuitive UX/UI
Designed so your customers find what they need and take action, not just something that looks good.

### Custom-Designed for Your Brand
Every site is designed around your brand, never pulled from a generic, reused template.

### Built to Load Fast for Your Customers
Performance that holds up under real traffic, not just a lab test score.

### Secure & Scalable
Built to handle growth and stay protected as your business scales, not rebuilt when you outgrow it.

### Mobile-First Responsive Design
Built for how your customers actually browse, not adapted afterward.

## What We Build: Custom Development, Redesigns, and E-commerce Stores {#services}

### Custom Web Development
When your business runs on more than a standard template can handle, we build your website from scratch around exactly what you need. That means custom functionality, integrations with the tools you already use, and a site structured the way your business actually works, not squeezed into someone else's layout.

### Website Redesign
If your current site is holding your business back, we rebuild it properly. We keep what already works, like your search rankings and content, and fix what doesn't, so the new site converts visitors instead of losing them.

### E-commerce Store Builds
We build the full storefront and checkout experience, not just a homepage. That includes clean product and category structure that scales as your catalog grows, a headless setup with a custom storefront when you need full design control, fast page loads, and a checkout flow designed to reduce abandoned carts, not just look good in a demo.
[Link: See how we build and grow online stores → /solutions/ecommerce]

### Website Migration
Migrations are the moment most businesses lose the search visibility they worked years to build, and the moment messy backend data becomes impossible to ignore. We handle the technical migration end to end, cleaning up disorganized databases and content along the way, so your rankings, redirects, and content move with you instead of disappearing or dragging old problems into the new site.

## Tailor-Made Solutions for Your Industry {#industries}

Every industry searches, sells, and converts differently. Pick yours below to see exactly how we build for it.

### E-commerce
Online stores live and die by conversion. We build storefronts that turn browsers into buyers, not just another product page.
[Link: See E-commerce Work → /solutions/ecommerce]

### Wellness & Counselling
Therapists, counsellors, chiropractors, and wellness practices run on booked appointments. We build sites that keep that calendar full.
[Link: See Wellness & Counselling Work → /solutions/wellness-counselling]

### Boutique Fitness
Every empty spot in a class is lost revenue. We build sites for yoga, pilates, spin, and barre studios that keep classes booked solid.
[Link: See Boutique Fitness Work → /solutions/boutique-fitness]

### Sports Academies
Clubs, academies, combat sports gyms, and camps grow when parents can find them. We build sites that make it easy to find you and sign up, connected to the registration software you already use.
[Link: See Sports Work → /solutions/sports]

**Fitness studio, wellness practice, or sports academy?** We'll build you a free custom demo first.
[Link: Request Your Free Demo → /demo-request]

[CTA touchpoint: Not sure which fits? Get Your Free Audit → /audit]

## How It Works {#how-it-works}

(Emits HowTo schema.)

1. **Initial Audit and Scope of Work**: We start by understanding your business, your industry, and what your current site is or isn't doing for you. Based on that, we map out whether a proven approach for your niche fits or whether the project calls for something built from scratch, always with a clear scope of work and clear deliverables.
2. **Build and Launch**: We work in three phases. First, deep research, covering keywords, content strategy, site structure, and getting the site ready for both search engines and AI search from day one. Second, design, covering the look, feel, and user experience that matches your brand. Third, development, covering building, testing, and securing the site before it goes live.
3. **Growth**: A website is the starting point, not the finish line. Once you're live, we move into ongoing SEO and AEO work under a Growth Plan, so the traffic and rankings keep building.
   [Link: How Growth works → /services/growth]

## How Pricing Works {#pricing}

Every build is scoped and priced before we start. You get a written scope of work, a fixed price for that scope, and a launch timeline you can plan around. No hourly billing, no surprise invoices.

### Start With a Full Audit
Most builds start with a Full Audit that maps what your current site is and isn't doing for you. If you move ahead with the build, the audit fee is credited toward it, so you never pay twice for the same work.

### Priced Around Your Project
Custom builds, migrations, and e-commerce stores are each quoted on what your project actually needs, not squeezed into a package that doesn't fit. Audit and plan pricing for fitness, wellness, and sports is listed on those industry pages, and e-commerce is quoted per scope.

[CTA touchpoint: Get a Quote → /contact]

## Real Work, Real Results {#real-work}

(ProofGrid, tag `build`. Renders nothing until an approved case study exists. No placeholder cards in production.)

[CTA touchpoint: Like what you see? Get a Quote → /contact]
[CTA: View Full Portfolio → /portfolio]  (only once /portfolio exists)

<!--
Case studies (founder, Sept 30): three real case studies. Every other real project is a portfolio
entry on /portfolio, not a case study. Each case study still needs a verifiable result (number +
timeframe), written permission to be named, and an image before it renders. Never invent a number.
- New West Progressives (NWP): website design, setup, and launch for the New Westminster civic party,
  plus monthly campaign operations (maintenance, landing pages, petition pages, KPI dashboard).
  Suggested tags: featured, build, growth.
- Echo Storytelling Agency: website and marketing work, including the white paper landing page
  (echostories.com/white-paper-story). Suggested tags: featured, build, growth.
  (Part of Bhav's Echo work was done as an Echo contractor in 2023. Show only the work Fadeaway did as Fadeaway.)
- HeartStamp: technical, on-page, and AI visibility audit plus a 30-60-90 day growth roadmap on a
  Next.js stack. Suggested tags: featured, growth (+ ecommerce if HeartStamp sells products online).
Portfolio entries (no case study): Conexus Credit Union Merger, Luisa Paixao, Strength Counselling,
Boarderline Skate Shop, Blank A Brand, Chronic Ink Tattoo, CAD Details, CPRO Solutions.
-->

## Fadeaway Labs, for Everything Beyond a Website {#labs}

Not every problem is a website problem. If your business runs on more than a site, like custom software, automations, or AI tools that actually do work for you, that's Fadeaway Labs, and we built it because we love this work.

(Same four cards as the homepage Labs section; reuse the block and its data.)

### From Idea to MVP
Got a product idea? We take it from architecture to launch, a working first version real users can try, with a roadmap for what comes next.

### Business Process Automation
We connect your CRM, email, booking software, and internal tools, then automate the manual work between them, with AI handling the sorting, summaries, and follow-ups.

### Claude & ChatGPT, Set Up for Your Business
Most teams already pay for AI tools. We set them up to know your business, connect them to your tools, and train your team to use them with confidence.

### Custom Apps & Dashboards
Client portals, internal tools, and live dashboards tracking rankings, bookings, and revenue in one place, so you're never guessing what's working.

[CTA: Have a Custom Project in Mind? → /labs]

## Testimonials {#testimonials}

(Testimonials block, tag `build`. Renders nothing until real, permission-confirmed quotes exist.)

## Frequently Asked Questions {#faq}

(Render from the `faq` data below. The same data generates the FAQPage JSON-LD.)

```yaml
faq:
  - q: "What's the difference between custom web development and a website redesign?"
    a: "Custom web development is built from scratch around a workflow no template can handle, like unique functionality or specific integrations. A website redesign rebuilds your existing site properly, keeping what already works, like your search rankings and content, and fixing what doesn't."
  - q: "Can you migrate my site without losing my Google rankings?"
    a: "Yes. Migrations are the moment most businesses lose the search visibility they built over years, so we handle the technical migration end to end, including cleaning up messy backend data, so your rankings, redirects, and content move with you instead of disappearing."
  - q: "Do you build on Shopify or WooCommerce?"
    a: "We build on Shopify, WooCommerce, fully custom platforms, and headless setups with a decoupled storefront, depending on what fits your business. The right platform depends on your catalog size, your budget, and how much control you need over the backend."
  - q: "What if I need custom software instead of a website?"
    a: "That's exactly what Fadeaway Labs handles. Custom software, business process automation, AI setup, dashboards, and MVPs taken from idea to launch all live there, separate from website builds. If you're not sure which one you need, the Full Audit or a quick call will tell you."
  - q: "How long does a website project take?"
    a: "Every project gets a written scope of work before anything starts, and that scope includes the timeline, so you know when your site launches before you commit. A focused redesign moves faster than a custom build or a large migration, and your timeline is set around your actual scope, not a template."
  - q: "How much does a custom website cost?"
    a: "Every build is scoped and priced before we start. You get a written scope of work and a fixed price for that scope, never hourly billing. Most projects start with a Full Audit, and if you move ahead with the build, the audit fee is credited toward it."
```

## From the Blog {#blog}

(BlogCards block, tag `build`. Renders nothing until /resources exists and has real Build posts.)

Real, practical answers to the website questions we hear most.
[CTA: View All Resources → /resources]

<!-- First article candidate: a website migration guide around "website migration services" (800/mo US, KD 4, cleanest SERP in the Build research). -->

## Ready to Build Something Real? {#cta}

Tell us what you're building, and we'll map out the scope and cost before anything starts.
[CTA: Get a Quote → /contact]

<!--
CHANGE LOG vs the Claude Doc draft (rev 313). Originals stay in the Doc.
1. Title tag shortened: was "Fadeaway Creatives | Custom Web Development & Website Redesign" (62 chars, over the
   60 limit). "Website" dropped from the end.
2. Meta description: "fixed pricing where it counts" became "a fixed price for every scope". The old line
   implied some work isn't fixed-price, which isn't true for builds.
3. Answer capsule rewritten (53 words). Old version was identical to the sub-headline (the homepage and
   e-commerce pages dropped that duplication), didn't name Fadeaway, and had no specific fact. Now names the
   entity, Canada and the US, and the migration point. Old: "We build custom websites, redesign existing
   brands, and craft e-commerce stores for growing businesses, engineered for real customers and for AI
   search, not just Google. Every project comes with a clear scope of work and fixed pricing before anything starts."
4. Sub-headline shortened so it no longer repeats the capsule.
5. Hero CTAs: were "See Our Work → /portfolio" (primary) and "Get Your Free Audit → /audit" (secondary).
   /portfolio doesn't exist and the proof section renders nothing while empty, so primary is now
   "Get a Quote → /contact" (same ask as this page's other CTAs) and secondary jumps to How It Works.
6. Breadcrumb: Home > Build. There is no /services hub page (same call as e-commerce, Sept 29).
7. Industry cards: the demo offer moved off the Boutique Fitness card into one line under the grid covering
   fitness, wellness, and sports (founder decision, Sept 23 evening: demo requests apply to all three).
   The Doc's note "Wellness and Sports are portfolio-only" is superseded.
8. "Priced Around Your Project": "Audit and ongoing plan pricing is listed on our industry pages" was wrong
   for e-commerce (scope-priced, no numbers). Now names fitness, wellness, and sports, and says e-commerce
   is quoted per scope. (Same fix the Growth page still needs, W9.)
9. Labs section: the four cards now match the homepage Labs cards (written after the Labs page was done).
   Old cards: Custom Web Apps & SaaS / AI Automation & Workflows / AI Chatbots & Qualified Leads /
   Performance Dashboards. Intro comma splice fixed, "genuinely" dropped.
10. Links added: E-commerce Store Builds → /solutions/ecommerce, Growth step → /services/growth.
11. Small grammar fixes: "Mobile-First Responsive Design Experience" became "Mobile-First Responsive Design";
    migration copy "not disappear or drag" became "instead of disappearing or dragging".
12. Real Work: Conexus flagged. Check that Fadeaway can claim and name it.

OPEN ITEMS
- og:image for this page.
- /demo-request is parked in src/pages/_inactive. Rebuild it before launch, or drop the demo line.
- /audit doesn't exist. The homepage sends audit CTAs to /contact for now; do the same here until it's built.
- /portfolio and /resources don't exist. Hide those CTAs until the pages exist.
- Old /services/web-design page: 301 it to /services/build if production still serves it (ask first).
- Case study results and permissions.
-->

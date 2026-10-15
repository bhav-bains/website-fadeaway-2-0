---
# About Us page copy: working copy. The founder approves and edits it section by section during dev.
# Build each section only after its copy is confirmed.
# Built from the Claude Doc's About Us Draft tab (rev 2, Sept 23), updated with later decisions
# (growing businesses wording sitewide, no /portfolio yet, no low-price framing). Change log at the bottom.
# This is the entity page: Organization schema, sameAs, knowsAbout, and the founder's Person schema
# get their fullest home here. Every fact must match the footer, schema, and homepage word for word.
page: about
url: /about/
title: "About Fadeaway Creatives | Founder-Led Growth Partners"
description: "Fadeaway Creatives is a founder-led growth partner in Vancouver, BC, building websites, SEO, AEO, and AI systems for businesses across Canada and the US."
canonical: "https://fadeawaycreatives.com/about/"
og:
  title: "About Fadeaway Creatives | Founder-Led Growth Partners"
  description: "Fadeaway Creatives is a founder-led growth partner in Vancouver, BC, building websites, SEO, AEO, and AI systems for businesses across Canada and the US."
  url: "https://fadeawaycreatives.com/about/"
  type: website
  locale: en_US
  image: /og-default.jpg  # swap for a founder or team photo once available
twitter:
  card: summary_large_image
robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
display_line: "We take the work seriously and ourselves lightly."
h1: "About Fadeaway Creatives"
answer_capsule: >-
  Fadeaway Creatives is a founder-led growth partner based in Vancouver, BC,
  working with growing businesses across Canada and the United States. Founded
  in 2023 and backed by 15+ years of experience, we build websites, run SEO and
  AEO, and create custom software and AI automation through Fadeaway Labs, with
  fixed pricing and results measured in bookings and sales, not traffic.
keywords:
  primary: none   # branded entity page ("fadeaway creatives", "about fadeaway creatives")
pricing: none
schema:
  - AboutPage       # mainEntity → the Organization
  - Organization    # full entity: name, url, logo, foundingDate 2023, founder (Person), address (Vancouver, BC, Canada),
                    # areaServed (Canada, United States), sameAs (LinkedIn, Crunchbase, Clutch, GoodFirms, DesignRush,
                    # Instagram, Facebook as each is claimed), knowsAbout (from site.ts). No LocalBusiness type.
  - Person          # founder: name, jobTitle, worksFor Fadeaway Creatives, sameAs (personal LinkedIn)
  - BreadcrumbList  # Home > About
  - FAQPage         # generated from the faq list below
last_updated: TODO  # set at launch; update when team or facts change
---

<!--
Notes for the build:
- Reuse existing blocks: Breadcrumb, Hero (display line variant), a simple fact list ("At a Glance"),
  CardGrid, a founder card (photo, name, title, bio, LinkedIn), Faq, CtaBlock.
- "At a Glance" is the page's main AEO asset: one fact per line, plain text in the HTML.
- [Link: text → url] and [CTA: text → url] are link specs, not visible brackets.
-->

## Section 0: Meta Data (/about/)

(Review table. Same values as the frontmatter above; the build reads the frontmatter. Change both together.)

| Field | Value | Status |
|---|---|---|
| Title tag | About Fadeaway Creatives \| Founder-Led Growth Partners (54 chars) | Set |
| Meta description | Fadeaway Creatives is a founder-led growth partner in Vancouver, BC, building websites, SEO, AEO, and AI systems for businesses across Canada and the US. (153 chars) | Set |
| Canonical | https://fadeawaycreatives.com/about/ | Set |
| Display line | We take the work seriously and ourselves lightly. | Set |
| H1 | About Fadeaway Creatives | Set |
| og:image / twitter:image | /og-default.jpg until a founder or team photo exists | Set (default) |
| Robots meta | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | Set |
| Schema: AboutPage | mainEntity → Organization | Set |
| Schema: Organization | Full entity (see frontmatter). sameAs grows as directory listings are claimed | Pending sameAs list |
| Schema: Person | Bhav Bains, Founder, worksFor Fadeaway Creatives, sameAs personal LinkedIn | Pending LinkedIn URL |
| Schema: BreadcrumbList | Home > About | Set |
| Schema: FAQPage | From the FAQ list, matches visible copy verbatim | Set |
| Answer capsule | See frontmatter (60 words) | Updated, needs approval ("growing businesses") |
| Visible FAQ block | 5 questions, 40 to 60 word answers | Set |
| Last updated date | Set at launch | Pending launch |
| Internal links | All 4 Solutions pages, /labs/, /services/build/, /services/growth/, /audit/, /contact/ | To QA |
| Primary keyword | None. Branded entity page | Set |

## Breadcrumb {#breadcrumb}

Home → About

## Hero {#hero}

- Display line (bold, largest type in the Hero, above the H1): **We take the work seriously and ourselves lightly.**
- H1: About Fadeaway Creatives
- Sub-headline: We're a founder-led growth partner for growing businesses across Canada and the US. We build the websites, search visibility, and AI systems that bring in customers, so owners can get back to running the business.
- Primary CTA: Get Your Free Audit → /audit/
- Secondary CTA: See How We Work → #how-we-work
- Visual: founder or team photo (placeholder illustration until a photo exists).
- Answer capsule: renders directly under the Hero, from the frontmatter.

## Fadeaway at a Glance {#at-a-glance}

- **Founded:** 2023
- **Based in:** Vancouver, British Columbia, Canada
- **Works with:** growing businesses across Canada and the United States
- **Led by:** Bhav Bains, founder, 15+ years of experience
- **What we do:** websites and builds, SEO and AEO, custom software and AI automation (Fadeaway Labs)
- **Industries we know best:** e-commerce brands, wellness and counselling practices, boutique fitness studios, sports programs
- **How we price:** fixed pricing, scope agreed before work starts, no hourly billing
- **How we measure success:** bookings, sales, and customers, not traffic or impressions

## Why "Fadeaway" {#why-fadeaway}

The name comes from basketball. A fadeaway is one of the hardest shots in the game to guard. It takes years of footwork, balance, and practice, and when it's done right, it looks effortless.

That's how we think about our work. The engineering, research, and strategy underneath are deep. What you see on top is simple: a site that works, customers who find you, and pricing you understood before we started.

<!-- OPEN (founder): your own version of why you picked the name. One or two lines, in your words. -->

## What We Believe {#beliefs}

### Growing businesses deserve enterprise-level work
Real engineering, real strategy, and real results, without enterprise overhead or enterprise complexity.

### Pricing should never be a guessing game
Fixed prices, defined scope, and clear deliverables before any work starts. You'll always know exactly what you're getting.

### Results mean customers, not charts
We measure ourselves by bookings, sales, and revenue. Traffic and impressions only matter when they turn into customers walking through the door.

### Built to last, not just to launch
Every site, system, and search strategy is built to hold up as your business grows, including for AI search, not just today's Google.

### Knowledge should be shared
We publish what we know: the strategies, the reasons behind what works, and the problems we see over and over. Clients still hire us, because doing the work well is where the real value is.

### We fix the front door
We don't replace the booking system, CRM, or registration software you already run. We build the website and presence in front of it and wire it in.

## Meet the Founder {#founder}

(Hidden for launch, founder Oct 4: this becomes a team section later. Kept here so it can return as is. The founder's
Person schema stays, without the bio, since the FAQ and At a Glance still name him.)

### Bhav Bains, Founder
Bhav has spent more than 15 years building websites, search strategies, and digital systems for businesses, and started Fadeaway Creatives in 2023 to give growing businesses the kind of work usually reserved for companies with enterprise budgets. He still leads strategy directly, personally leads our sports and combat sports work, and spends as much time as he can in the lab building what comes next.

[Founder photo] · [Link: LinkedIn → personal LinkedIn URL]

<!-- OPEN (founder): 2 to 4 lines on your real background, notable work, and what drives you.
Confirm name and title as shown. Add your LinkedIn URL (also used in Person schema). -->

## How We Work {#how-we-work}

### Founder-led, always
Strategy and client relationships stay with the founder. You're never handed off to someone who doesn't know your business.

### The right specialists for each project
A core team plus specialist contractors matched to what your project actually needs, so you get deep skill in each area without paying for people you don't use.

### A playbook for your industry
Every industry we serve has its own research, systems, and proven process. We never start your project from zero, and you never pay for us to learn how businesses like yours work.

## Who We Work With {#who-we-work-with}

### E-commerce
Online stores that need to turn browsers into buyers.
[Link: E-commerce → /solutions/ecommerce/]

### Wellness & Counselling
Therapists, counsellors, chiropractors, and wellness practices ready to be found beyond the directories.
[Link: Wellness & Counselling → /solutions/wellness-counselling/]

### Boutique Fitness
Yoga, pilates, spin, and barre studios that want every class full.
[Link: Boutique Fitness → /solutions/boutique-fitness/]

### Sports Programs
Clubs, academies, combat sports gyms, and camps that want parents to find them first.
[Link: Sports Academies → /solutions/sports/]

### Fadeaway Labs
MVPs, automation, custom apps, and AI setup for anyone building something new.
[Link: Fadeaway Labs → /labs/]

### Any Growing Business
Websites and growth work for businesses outside these industries, scoped to your market.
[Links: Build Services → /services/build/ · Growth Services → /services/growth/]

## Work We're Proud Of {#real-work}

(Heading changed from "Real Work", founder Oct 4.)

(ProofGrid, tag `featured`. Renders nothing until an approved case study exists. No client is named on this page outside approved case studies.)

We'd rather show you than tell you.
[Link: View Full Portfolio → /portfolio/]  (added Oct 4; same label as the homepage)

## Frequently Asked Questions {#faq}

(Render from the `faq` data below. The same data generates the FAQPage JSON-LD.)

```yaml
faq:
  - q: "Who founded Fadeaway Creatives?"
    a: "Fadeaway Creatives was founded in 2023 by Bhav Bains, who brings more than 15 years of experience in web development, search, and digital growth. The company is still founder-led today: he works directly on strategy and client relationships, supported by a core team and specialist contractors matched to each project."
  - q: "Where is Fadeaway Creatives based?"
    a: "Fadeaway Creatives is based in Vancouver, British Columbia, and works with businesses across Canada and the United States. Everything we do runs remotely, from audits and strategy calls to builds and launches, so we build for how your specific local market searches, wherever your business is."
  - q: "Why is it called Fadeaway?"
    a: "The name comes from basketball. A fadeaway is one of the hardest shots in the game to guard: it takes years of footwork and practice, and done right, it looks effortless. That's the standard we hold our own work to, deep skill underneath and a clean, simple result on top."
  - q: "What does Fadeaway Creatives do?"
    a: "We build websites, run SEO and AEO so businesses get found on Google and in AI answers, and create custom software and AI automation through Fadeaway Labs. We know e-commerce, wellness and counselling, boutique fitness, and sports programs best, and every project runs on fixed pricing agreed before work starts."
  - q: "How is the work done?"
    a: "Every client gets founder-led strategy, a core team, and specialist contractors matched to the project. Each industry we serve has its own proven playbook, research, and systems, so we never start your project from zero, and you never pay for us to learn how businesses like yours work."
```

## Let's Talk About Your Business {#cta}

Start with a free audit and see exactly where you stand, or book a call and tell us what you're working on.
[CTA: Get Your Free Audit → /audit/]
[Link: Book a Call → /contact/]

<!--
CHANGE LOG vs the Claude Doc draft (rev 2, Sept 23). Originals stay in the Doc.
1. "Small businesses" became "growing businesses" in the capsule, sub-headline, At a Glance, and founder
   bio, matching the homepage H1 and the Growth page's wider audience (founder, Oct 1).
2. Hero secondary CTA: "See Our Work → /portfolio" became "See How We Work → #how-we-work". /portfolio
   doesn't exist yet. The Real Work CTA to /portfolio only renders once the page exists.
3. "Without enterprise complexity or enterprise price tags" became "without enterprise overhead or
   enterprise complexity". The old line implied cheap, which clashes with the no-underselling direction
   on the Growth page (founder, Oct 1).
4. "Knowledge should be free" became "Knowledge should be shared" (same idea, without implying the work
   is free). Comma splice fixed in its copy.
5. "Who we work with" (At a Glance) became "Industries we know best", and a new "Any Growing Business"
   card links to Build and Growth, so the page doesn't read as four-industries-only.
6. "What does Fadeaway Creatives do?" FAQ: "We work mainly with..." became "We know ... best", same reason.
7. Real Work uses the `featured` tag (the three real case studies, once approved). No client named
   elsewhere on the page.
8. Breadcrumb Home > About; URLs use the trailing slash. Internal AEO/SEO check lines from the Doc are
   not page copy and are left out.

OPEN ITEMS (founder)
- Why "Fadeaway": your own version of the name story, one or two lines.
- Meet the Founder: 2 to 4 lines of real background; confirm name and title; LinkedIn URL; photo.
- Contractor model: confirm you're comfortable stating "a core team plus specialist contractors" publicly.
- Organization sameAs: add each directory profile URL as it's claimed (LinkedIn, Crunchbase, Clutch,
  GoodFirms, DesignRush, Instagram, Facebook).
- Founder or team photo for the Hero and og:image.
-->

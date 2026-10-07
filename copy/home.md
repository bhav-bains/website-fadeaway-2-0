---
# Homepage copy: approved source for the build.
# Exported from the Claude Doc "Homepage Copy - Draft" (rev 57, Sept 23, 2026).
# Do not rewrite copy. If something reads wrong, flag it; don't fix it silently.
page: home
url: /
title: "Fadeaway Creatives | Revenue-Focused Growth Partners"
description: "SEO, AI search, and websites built to turn traffic into paying customers. Fixed pricing, real growth, no guesswork."
canonical: "https://fadeawaycreatives.com/"
og:
  title: "Fadeaway Creatives | Revenue-Focused Growth Partners"
  description: "SEO, AI search, and websites built to turn traffic into paying customers. Fixed pricing, real growth, no guesswork."
  url: "https://fadeawaycreatives.com/"
  type: website
  locale: en_US
  image: TODO  # homepage share image still needed
twitter:
  card: summary_large_image
robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
h1: "Websites, SEO & AI Search for Growing Businesses"
display_line: "Revenue-Focused. Growth Partners."
answer_capsule: >-
  Fadeaway Creatives builds websites and runs SEO and AEO for growing businesses
  across Canada and the US, so customers find you on Google and in AI answers.
  Founder-led with 15+ years of experience, we work with e-commerce brands,
  wellness practices, boutique studios, and sports programs, with fixed pricing
  and results measured in bookings and sales.
keywords:
  primary: "revenue-focused growth partner for growing businesses (brand + category level)"
  secondary: ["AEO agency", "AI search optimization", "website redesign agency"]
schema:
  - Organization   # sitewide, in the base layout. See CLAUDE.md entity facts. No LocalBusiness for Fadeaway.
  - FAQPage        # generated from the faq list at the bottom of this file
  - HowTo          # from the How It Works section (Instant Audit, Full Audit, Build/Grow)
last_updated: TODO  # set at launch, visible on the page
---

<!--
Notes for the build:
- The answer capsule has no dedicated slot in the current copy. Render it as the
  first paragraph directly under the Hero (or use it as the Hero sub-copy block
  on mobile). It must be in the raw HTML near the top of the page.
- Section ids below are the anchors. Use them as element ids.
- [Link: text → url] and [CTA: text → url] are link specs, not visible brackets.
-->

## Header / Nav {#header}

- Logo → /
- **Services** (dropdown)
  - Build: Custom Web Development · Website Redesign · E-commerce Builds · Site Migration → all link to /services/build
  - Growth: SEO + AEO · Full Audit · Growth Strategy · CRO · Paid Media → all link to /services/growth
  - Design: "Build" and "Growth" are big and bold (each links to its page); the sub-services under each are subtle supporting text.
- **Solutions** (dropdown): E-commerce → /solutions/ecommerce · Wellness & Counselling → /solutions/wellness-counselling · Boutique Fitness → /solutions/boutique-fitness · Sports Academies → /solutions/sports
- **Labs** → /labs
- **Resources** (dropdown, no landing page; founder, Oct 3): Case Studies → /case-studies/ · Portfolio Work → /portfolio/ · Articles → /articles/ · About → /about/
- **Contact** → /contact
- CTA button: **Get Your Free Audit** → /audit

## Hero {#hero}

- Display line (bold, largest type in the Hero, above the H1): **Revenue-Focused. Growth Partners.**
- Eyebrow: Growth Partner for Local Businesses Across the US & Canada
- H1: Websites, SEO & AI Search for Growing Businesses
- Sub-headline: We build websites ready for SEO and AI search, and run growth systems that turn traffic into paying customers. Fixed pricing, no guesswork, built to scale as you grow.
- Free audit box (founder, Oct 7; replaces both CTA buttons, "See How It Works" removed): field label **Your website**, placeholder `yourbusiness.com`, button **Get Your Free Audit**. Submitting carries the URL to /audit/ (`?website=`), which pre-fills its form. Label and placeholder reuse the Audit CTA block wording; button keeps the old CTA label.
- Visual: illustration (search bar, AI answer card citing a business, bookings chart, reviews, map pin). Hero fits one screen.
- Answer capsule: not shown inside the Hero (it repeated the sub-headline). It renders as the intro paragraph of the Trust Bar, directly under the Hero.

## Trust Bar {#trust}

Format: answer capsule (from frontmatter `answer_capsule`) as a centered intro paragraph, then 4 icon boxes.
TODO (later): rework into a subtler row: smaller icon + short heading, 3 to 4 items. Avoid repeating the Why section's points.

1. **15+ Years Experience** · sub-line: Founder-led, hands-on from first call to launch
2. **SEO + AEO Specialists** · Built for Google and modern AI search
3. **Fixed Pricing** · No hourly billing, scope defined before we start
4. **Revenue-Tracked** · Results measured in bookings & sales, not traffic

## Growth Built Around Your Industry {#industries}

Badge above the heading (founder, Oct 7): **Our Solutions**

Intro: Websites, SEO and AEO shaped around how your customers search and book.

### E-commerce
(First in order. All 4 cards are equal weight in a 2x2 grid, each with its own illustration.)
We bring deep, hands-on experience with larger e-commerce stores: the technical SEO and site work that turns search traffic into sales in a competitive, established market. It's not a quick-win space, which is exactly why the foundation matters more than shortcuts.
[Link: See how we help e-commerce brands → /solutions/ecommerce]

### Wellness & Counselling
Fill your caseload. We build websites and run SEO and AEO for therapists, counsellors, chiropractors, and wellness practices, so clients find you beyond directory listings like Psychology Today. Built to work with the practice software you already use, like Jane App or SimplePractice.
[Link: See how we help wellness & counselling practices → /solutions/wellness-counselling]

### Boutique Fitness
Keep every class full. We build websites and local SEO systems for yoga, pilates, spin/cycling, and barre-format studios ready to scale memberships and fill every class slot. Built to work with the booking software you already use, like Mindbody or Momence.
[Link: See how we help boutique fitness studios → /solutions/boutique-fitness]

### Sports Academies
Fill your roster and keep it full. For clubs, academies, combat sports gyms, and camps, we build websites parents can actually find on Google and in AI answers, connected to the registration software you already use, like LeagueApps or TeamSnap.
[Link: See how we help sports programs → /solutions/sports]

## Your Website Should Be Your Best Salesperson {#salesperson}

It works 24/7, never calls in sick, and talks to every customer the moment they're ready. Most websites just sit there. We build yours to do the whole job.

### Find the Customers
SEO puts you in front of people searching on Google, and AEO makes your case when someone asks an AI assistant for a recommendation.

### Answer Their Questions
Clear pages and FAQs handle what a good salesperson would explain: what you offer, what it costs, and why you're the right choice.

### Close the Sale
Booking, checkout, and sign-up flows that make saying yes effortless, on any phone, at any hour.

### Follow Up
Email, reviews, and lead campaigns that bring people back instead of letting them go cold.

### Report the Numbers
A dashboard showing which visits turned into bookings and sales, so you know exactly what your website is earning.

<!-- Added Oct 2 (founder): the "24/7 salesperson" framing. This section is the core of it; each other page
carries one adapted line. Layout suggestion: 5 numbered steps, like a sales pipeline.
ADD AT LAUNCH ONLY IF the free audit report workflow is live (so the claim is true):
"This site works the same way. It brings in and qualifies our own leads around the clock." -->

## How We Work With You {#services}

Eyebrow: Our Services

### Build
From a full website redesign to migrating an existing site without losing your search rankings, every build is designed around your brand and scoped with a fixed price before we start, so you get enterprise-quality work without an enterprise price tag or timeline.
Sub-service tiles (no label): Custom Web Development · Website Redesign · E-commerce Builds · Site Migration
[Link: See Build Services → /services/build]

### Growth
We start with a clear picture of where you stand: a free Instant Audit, then a Full Audit that maps exactly what needs to change. From there, ongoing SEO and AEO work keeps you visible on Google and in AI search results, with every deliverable tied to bookings and sales, not traffic.
Sub-service tiles (no label): Local SEO · AI Search (AEO) · Conversion Optimization · Paid Ads
[Link: See Growth Services → /services/growth]

## MVPs, AI Automation & Custom Software {#labs}

Badge above the heading (founder, Oct 7): **Fadeaway Labs**

(Heading dropped its "Fadeaway Labs:" prefix, founder Oct 7: the badge carries the name. Header left aligned.)

Fadeaway Labs is where we build for the love of building: MVPs, business automation, custom software, and AI tools set up properly inside your business. If you can picture a system that would save you hours a week, this is where we make it real.

### From Idea to MVP
Got a product idea? We take it from architecture to launch, a working first version real users can try, with a roadmap for what comes next.

### Business Process Automation
We connect your CRM, email, booking software, and internal tools, then automate the manual work between them, with AI handling the sorting, summaries, and follow-ups.

### Claude & ChatGPT, Set Up for Your Business
Most teams already pay for AI tools. We set them up to know your business, connect them to your tools, and train your team to use them with confidence.

### Custom Apps & Dashboards
Client portals, internal tools, and live dashboards tracking rankings, bookings, and revenue in one place, so you're never guessing what's working.

**Have a Custom Project in Mind?** Let's map the architecture, scope the MVP, and build a roadmap to bring it to life.
[CTA: Let's Build Your MVP → /labs/]

## Why Growing Businesses Choose Fadeaway {#why}

Layout: split. Heading on the left (pinned on desktop), numbered list 01 to 04 on the right. No cards or icons.

### Clear Pricing & Deliverable Transparency
Fixed pricing, defined scope, no guesswork. You'll know exactly what you're getting and what it costs before we start.

### Revenue-First
We track bookings, sales, and customers walking through the door, not traffic or impressions.

### Future-Proof
SEO and AEO built to scale as your business grows, not just launch and fade.

### Reliable Growth Partner
Enterprise-level work, real engineering and real strategy, at small-business-reasonable pricing.

## How It Works {#how-it-works}

**HIDDEN (founder, Oct 7): not rendered on the site, and its HowTo schema is off, until restored.**

(Feeds HowTo schema. No prices in this section.)

1. **Instant Audit (Free)**: We run a fast, automated audit of your website, local search visibility, and paid opportunities, and send you the results at no cost.
2. **Full Audit**: We do a full account review, keyword research, and build a clear action plan for your business.
3. **Build, Then Grow**: From there, we either build or rebuild your site around your brand, or move straight into an ongoing Growth Plan, whichever your business needs first.

## Your Store, Built for AI Search {#ecommerce}

E-commerce is one of the most competitive spaces in search: established players, deep case-study libraries, years of SEO investment already in place. That's exactly why we treat it as a long-term investment, not a quick fix. We handle the technical SEO and AEO work that gets your store found by Google and by AI shopping assistants, alongside site builds, migrations, and checkout optimization that turn that traffic into sales.

(Removed, founder Oct 7: the "See our e-commerce work" link under the CTA.)
[Secondary CTA: See the E-commerce Approach → /solutions/ecommerce]

## Real Work, Real Results {#work}

Intro: See what we've built for businesses like yours.

Component: tag-based proof grid. Pulls the 3 strongest case studies tagged `featured` from the case-studies collection. **Renders nothing while the collection is empty** (no placeholder cards on the live site). Never hardcode or invent a project, name, or result.

[CTA: View Full Portfolio → /portfolio]

## Our SEO & AEO Method {#method}

Here's exactly how we get you found, on Google and in AI search.

### Google Business Profile & Map Pack
We optimize your Google Business Profile so you show up first on the map when local customers search.

### Neighborhood-Level Content
Customers search their specific area, not just your city, so we build content targeting the neighborhoods you actually serve.

### Structured Data for AI Search
We add the schema markup to your site, like Organization, LocalBusiness, and FAQPage, that AI search tools like ChatGPT and Google's AI Overviews read to decide who to recommend.

### Review Generation
We set up automated reminders that make it easy for happy customers to leave a review right after a great experience.

### Site Performance
We build every site to load fast for real customers, using the techniques search engines actually reward.

### Conversion Tracking
We track which searches turn into a booked appointment or a paid customer, not just which pages get visited.

## Frequently Asked Questions {#faq}

(Render from the `faq` data below. The same data generates the FAQPage JSON-LD, so visible text and schema always match word for word.)

```yaml
faq:
  - q: "What's included in the free Instant Audit?"
    a: "A quick, automated review of your website, local search visibility, and paid media opportunities, enough to flag where you're losing ground and what's worth fixing first. We walk you through the results so nothing gets lost in a report. It's free, with no obligation to work with us afterward."
  - q: "What's included in the Full Audit?"
    a: "A full account and website review, keyword research for your market, an in-depth AEO readiness check, a content strategy foundation, quick wins, and a clear 3 to 6 month action plan. It's a fixed, one-time fee with no hourly billing, and if you move ahead with a new website, the fee is credited toward your build."
  - q: "Do you work with the booking system or CRM I already use?"
    a: "Yes. We don't replace the software you already run your business on. We build your website and growth systems to work with what you have, like Jane App, SimplePractice, Mindbody, Momence, LeagueApps, or TeamSnap, so your team keeps its tools and your customers get a smoother way in."
  - q: "Do you work with businesses outside Vancouver?"
    a: "Yes. We're based in Vancouver, BC, and work with clients across Canada and the United States. Everything from audits and strategy calls to builds and launches happens remotely, and we build for how your specific local market searches, wherever your business is."
  - q: "How long until I see results?"
    a: "SEO and AEO build over time. Your Full Audit includes a 3 to 6 month action plan, and that's the window where ranking and visibility gains start compounding. Technical fixes and local listing improvements usually show up sooner, and your dashboard tracks bookings and sales the whole way, so you're never guessing."
```

## Ready to Grow? {#cta}

Start with a free Instant Audit: a clear picture of where you stand, no obligation.
[CTA: Get Your Free Audit → /audit]

## Footer {#footer}

- Tagline: Growth partner for local businesses across the US & Canada.
- Location line: Vancouver, BC, working with clients across Canada and the US.
- **Services:** Build → /services/build · Growth → /services/growth · Fadeaway Labs → /labs
- **Solutions:** E-commerce → /solutions/ecommerce · Wellness & Counselling → /solutions/wellness-counselling · Boutique Fitness → /solutions/boutique-fitness · Sports Academies → /solutions/sports
- **Company:** About → /about · Contact → /contact · Privacy Policy → /privacy · Terms of Service → /terms
- **Social:** Instagram · Facebook · hello@fadeawaycreatives.com

<!--
Open items for this page (not blockers for building the blocks):
- og:image / twitter:image asset needed.
- Organization schema sameAs links wait on directory listings (LinkedIn, Crunchbase, Clutch, GoodFirms, DesignRush).
- Links to pages not rebuilt yet (/audit, /portfolio, /labs, /about, /solutions/*, /services/*, /resources, /privacy, /terms):
  each must resolve at launch. Either keep the current live pages at those URLs, or decide per link before merging.
- Resolved Oct 4: the e-commerce link goes to /portfolio/#ecommerce (no query-string filter).
- Boutique Fitness card could mention the free demo request (applies to fitness, wellness, sports). Optional, not in approved copy yet.
CHANGE LOG (Oct 1): founder decision, no prices on the homepage. FAQ 2 changed from
"How much does the Full Audit cost?" / "The Full Audit is a fixed $945, one time. It includes a full
account review, keyword research, a content strategy foundation, quick wins, and a clear 3 to 6 month
action plan. No hourly billing, no surprises, and if you move ahead with a new website, the fee is
credited toward your build."
to "What's included in the Full Audit?" (no number). The Full Audit stays $945 for every client;
the number now appears only on the Boutique Fitness, Wellness & Counselling, and Sports pages.
Dev: update the FAQ data in src/data/pages/home.ts to match (it feeds both the visible FAQ and the JSON-LD).
CHANGE LOG (Oct 2): new section "Your Website Should Be Your Best Salesperson" {#salesperson} between Industries and Why
(founder: the website is a 24/7 salesperson; same thinking for Fadeaway's own site). Maps the five sales jobs to our services.
-->

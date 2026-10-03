---
# Growth Services page copy: working copy, v2 (strength-led, no pricing). The founder approves and
# edits it section by section during dev. Build each section only after its copy is confirmed.
# v2 (Oct 1) follows the founder's direction: no prices anywhere on this page, show the method and
# the strength, open to any growing business. Plan names and prices live only on the Boutique
# Fitness, Wellness & Counselling, and Sports pages. Change log at the bottom.
page: growth
url: /services/growth
title: "Fadeaway Creatives | SEO Audit Agency & Growth Partners"
description: "SEO audits, AEO, and growth work built to turn search visibility into bookings and sales. Every number we report is tied to revenue."
canonical: "https://fadeawaycreatives.com/services/growth/"
og:
  title: "Fadeaway Creatives | SEO Audit Agency & Growth Partners"
  description: "SEO audits, AEO, and growth work built to turn search visibility into bookings and sales. Every number we report is tied to revenue."
  url: "https://fadeawaycreatives.com/services/growth/"
  type: website
  locale: en_US
  image: /og-default.jpg
twitter:
  card: summary_large_image
robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
display_line: "Get ready for the AI search era."
h1: "SEO Audits Built to Grow Revenue"
answer_capsule: >-
  Fadeaway Creatives is a growth partner for businesses across Canada and the
  US. We start with a free Instant Audit and a fixed-price Full Audit to find
  where your revenue is leaking, fix conversion first, then grow demand through
  SEO, AEO, and paid media on Google and Meta. Every engagement is scoped to
  your business and reported in bookings and sales, not rankings.
keywords:
  primary: "seo audit agency"   # 1,900/mo US KD 9; 20/mo Canada KD 6; $25 CPC
  secondary: ["seo audit services", "aeo agency", "generative engine optimization agency", "ppc management agency"]
pricing: none  # No numbers on this page, including the Full Audit. Prices live on the three demo-industry pages.
schema:
  - Organization    # sitewide, from the base layout
  - BreadcrumbList  # Home > Growth
  - Service         # one entry each: Instant Audit, Full Audit, SEO, Answer Engine Optimization (AEO), Conversion Rate Optimization, Paid Media Management, Email & Lead Generation. No prices.
  - HowTo           # from How We Move Revenue (6 steps)
  - FAQPage         # generated from the faq list below
content_tag: growth  # Real Work, Testimonials, and From the Blog pull entries with this tag
last_updated: TODO  # set at launch, visible on the page
---

<!--
Notes for the build:
- Reuse the existing blocks: Breadcrumb, Hero (display line variant), CardGrid, Steps (HowTo),
  FeatureList / ServiceGrid, ProofGrid, Testimonials, Faq, BlogCards, CtaBlock.
- No PricingCard on this page (v1 needed one; v2 doesn't).
- Answer capsule renders as real text directly under the Hero.
- [Link: text → url] and [CTA: text → url] are link specs, not visible brackets.
-->

## Section 0: Meta Data & Keyword Targeting (/services/growth/)

(Review table. Same values as the frontmatter above; the build reads the frontmatter. Change both together.)

| Field | Value | Status |
|---|---|---|
| Title tag | Fadeaway Creatives \| SEO Audit Agency & Growth Partners (55 chars) | Set |
| Meta description | SEO audits, AEO, and growth work built to turn search visibility into bookings and sales. Every number we report is tied to revenue. (132 chars) | Updated, needs approval |
| Canonical | https://fadeawaycreatives.com/services/growth/ | Set |
| Display line | Get ready for the AI search era. | Set |
| H1 | SEO Audits Built to Grow Revenue | Set |
| og:title / og:description | Mirror title tag / meta description | Set |
| og:image / twitter:image | /og-default.jpg | Set (default) |
| Robots meta | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | Set |
| Schema: Organization | Inherited sitewide, no LocalBusiness for Fadeaway itself | Set |
| Schema: Service | Instant Audit, Full Audit, SEO, AEO, Conversion Rate Optimization, Paid Media Management, Email & Lead Generation. No prices. | Updated, needs approval |
| Schema: HowTo | From How We Move Revenue (6 steps) | Updated, needs approval |
| Schema: FAQPage | From the FAQ list, matches visible copy verbatim | Set |
| Schema: BreadcrumbList | Home > Growth | Set |
| Answer capsule | See frontmatter `answer_capsule` | Updated, needs approval |
| Visible FAQ block | 6 questions, 40 to 60 word answers, no prices | Updated, needs approval |
| Last updated date | Set at launch | Pending launch |
| Internal links | All 4 Solutions pages, /services/build/, /labs/, /audit/, /contact/. Zero `#` placeholders. | To QA |
| Primary keyword | seo audit agency (1,900/mo US KD 9; 20/mo Canada KD 6; $25 CPC) | Set |
| Secondary keywords | seo audit services, aeo agency, generative engine optimization agency, ppc management agency | Set |
| Pricing display | None. No numbers anywhere on this page | Set (founder, Oct 1) |

## Breadcrumb {#breadcrumb}

Home → Growth

## Hero {#hero}

- Display line (bold, largest type in the Hero, above the H1): **Get ready for the AI search era.**
- Eyebrow: SEO, AEO and Revenue Growth
- H1: SEO Audits Built to Grow Revenue
- Sub-headline: We find where your revenue is leaking, fix it, then run the SEO, AEO, and paid work that turns search into bookings and sales.
- Primary CTA: Get Your Free Audit → /audit/
- Secondary CTA: See How We Move Revenue → #revenue-system
- Answer capsule: renders directly under the Hero, from the frontmatter.

## Audited Right, From Day One {#standard}

Every audit and every ongoing engagement follows the same standard: real data, real reporting, real accountability.

### Revenue-Tracked Growth
Every audit and every report measures bookings, sales, and customers, the numbers that actually matter to your business.

### Built for Google and AI Search
Your audit covers technical SEO and the structured data, schema, and content signals that AI search tools read to decide who to recommend.

### Grounded in Real Data
Every recommendation comes from your actual keyword data, your competitors' real rankings, and your site's own numbers.

### Clear, Ongoing Reporting
A live dashboard tracking your rankings, traffic, bookings, and revenue, plus a monthly report and a monthly strategy call.

## Results Strip {#results}

(Stat block. Renders only when at least one real, verified result is filled in. No placeholder numbers in production.)

<!--
FOUNDER TO SUPPLY (Oct 1: unnamed results are approved): one to three growth results without client
names, each as number + metric + timeframe + client type. Example of the FORMAT only, not real data:
"[+X%] organic traffic in [Y] months for a [B2B services firm]". Never invent or round up a number.
-->

## How We Move Revenue {#revenue-system}

(Emits HowTo schema. This is the page's centerpiece.)

A great salesperson in an empty room sells nothing. Growth is how we send the right people in.

Growth isn't one tactic. It's a system, and every step feeds the next.
<!-- Added Oct 2 (founder): "your website is a 24/7 salesperson" framing. One line per page, worded for this audience. -->

1. **Measure the baseline**: Before we change anything, we make sure every booking, form, call, and sale is tracked in Google Analytics and Search Console, so you know what your revenue looks like today and can see exactly what moves it.
2. **Find the leaks**: The Full Audit maps where you're losing customers: pages that don't rank, AI tools that don't mention you, slow pages, unclear offers, and forms people abandon. You get a prioritized 3 to 6 month action plan.
3. **Fix conversion first**: More traffic into a leaky site is wasted spend. We fix the pages, offers, and checkout or booking flows that turn visitors into customers before we push for more visitors.
4. **Grow demand**: Then we bring in the right people through SEO on Google, AEO for ChatGPT, Perplexity, and Google's AI Overviews, and paid campaigns on Google and Meta when speed matters.
5. **Compound it**: Content, reviews, email, and lead generation keep past customers coming back and make every month's work build on the last instead of starting over.
6. **Report and adjust**: A live dashboard, a monthly report, and a monthly strategy call show what each piece is doing for revenue. Strategy shifts based on what the data shows, not on a fixed calendar.

[CTA touchpoint: See where your revenue is leaking. Get Your Free Audit → /audit/]

## What We Run for You {#capabilities}

### Technical SEO
Site health, crawlability, page speed, and structure, monitored continuously so search engines can find, read, and rank every page that matters.

### Answer Engine Optimization (AEO)
Structured data, schema, and answer-ready content that AI search tools read when deciding who to recommend, plus tracking of when and how your business shows up in AI-generated answers.

### Local and Organic Visibility
Google Business Profile, local listings, reviews, and a content calendar built around how your customers actually search, from neighbourhood searches to category terms.

### Conversion Rate Optimization
Ongoing testing of your key pages, offers, forms, and checkout or booking flows, so more of the traffic you already have turns into revenue.

### Paid Media on Google and Meta
Campaign strategy, setup, and ongoing management, built around cost per booking or sale, not clicks. Ad spend is paid directly by you to Google and Meta, so you always see exactly where every dollar goes.

### Email and Lead Generation
Lead capture, nurture sequences, and email campaigns that turn one-time visitors and past customers into repeat revenue.

### Reporting You Can Actually Use
One dashboard combining paid, organic, and AI search performance, tied to bookings and sales, with a monthly report and strategy call to walk you through it.

## The Growth Ladder {#growth-ladder}

Every engagement starts small and grows with the results.

1. **Instant Audit (free)**: A fast review of your website, SEO and AEO readiness basics, performance, site structure, on-page copy, local search visibility, and paid media opportunities. You get the results in a clear report and we walk you through them.
2. **Full Audit (fixed price)**: A full account and website review, keyword research for your market, an in-depth AEO readiness check, a content strategy foundation, quick wins ready to act on, and a clear 3 to 6 month action plan.
3. **Ongoing growth work**: SEO, AEO, conversion, paid media, and email, scoped to your business and your goals, with a fixed monthly fee agreed before anything starts.

Starting with a new website instead? The build covers the audit's groundwork, so you pay for one or the other, never both.
[Link: See Build Services → /services/build/]

## Built Around Your Industry {#industries}

Search behavior looks different in every industry, so the growth work does too.

### E-commerce
E-commerce SEO is a long game in a competitive field. We run the technical audits and ongoing search work that compound over time, not overnight tricks.
[Link: See E-commerce Growth Work → /solutions/ecommerce/]

### Wellness & Counselling
"SEO for therapists" alone is searched about 1,600 times a month in the US, and patients search for therapists, counsellors, and chiropractors every day. We build the strategy around that demand, so you're found beyond directory listings.
[Link: See Wellness & Counselling Growth Work → /solutions/wellness-counselling/]

### Boutique Fitness
Class bookings live and die by local search and referrals. We run the ongoing SEO work that keeps your studio visible when someone's looking for a new class.
[Link: See Boutique Fitness Growth Work → /solutions/boutique-fitness/]

### Sports Academies
Parents search for clubs, fees, and season dates all year, and "how to choose a sports club" alone is searched about 2,800 times a month in the US. Our SEO and AEO work makes sure they find your program when they do.
[Link: See Sports Academies Growth Work → /solutions/sports/]

### Other Growing Businesses
Service firms, agencies, local service businesses, and online products. If your customers search before they buy, the same system applies. We scope the work around your market after the audit.
[Link: Tell Us About Your Business → /contact/]

## Need Something Else First? {#something-else}

### Website Needs Work First
If your website itself needs to be built or redesigned before growth work makes sense, that's a Build project, not growth work.
[Link: See Build Services → /services/build/]

### Need Custom Software Instead
If what you actually need is custom software, automations, or dashboards rather than a website, that's Fadeaway Labs.
[Link: See Fadeaway Labs → /labs/]

## Real Work, Real Results {#real-work}

(ProofGrid, tag `growth`. Renders nothing until an approved case study exists. Growth outcomes only: ranking movement, traffic, leads, bookings, or revenue.)

<!--
Case studies (founder, Sept 30): New West Progressives, Echo Storytelling, and HeartStamp. All three
had growth work, so all three can carry the `growth` tag once each has a verifiable result, written
permission, and an image. Never invent a number.
-->

## Testimonials {#testimonials}

(Testimonials block, tag `growth`. Renders nothing until real, permission-confirmed quotes exist.)

## Frequently Asked Questions {#faq}

(Render from the `faq` data below. The same data generates the FAQPage JSON-LD.)

```yaml
faq:
  - q: "How is your growth work priced?"
    a: "Every engagement starts with an audit, then gets scoped to your business: your market, your goals, and which channels make sense. You get a written scope and a fixed monthly fee before anything starts, never hourly billing. Ad spend for Google and Meta is paid directly by you, so it's always visible."
  - q: "What's included in the free Instant Audit?"
    a: "A fast review of your website, SEO and AEO readiness basics, page performance, site structure, on-page copy, local search visibility, and paid media opportunities. You get a clear report, and we walk you through the results so you know where you stand and what's worth fixing first. There's no obligation afterward."
  - q: "Is AEO actually worth it, or is it just hype?"
    a: "It's real, and it's early. AI search tools like ChatGPT and Perplexity already answer questions your customers are asking, and many businesses haven't touched their AEO yet. The risk isn't that it's hype. It's being invisible while your competitors get there first."
  - q: "How long until I see results?"
    a: "Conversion fixes and technical issues often show results within the first few weeks, because they improve the traffic you already have. SEO and AEO build over the 3 to 6 month window in your action plan, and paid campaigns can bring in customers sooner. Your dashboard tracks bookings and sales the whole way."
  - q: "What if my website needs work too?"
    a: "That's a Build project, not growth work. If your audit shows your site itself needs rebuilding, we loop in the Build team before any SEO work starts, and the audit fee you already paid gets credited toward the build, so you never pay twice for the same work."
  - q: "Do you work with businesses outside Canada?"
    a: "Yes. We're based in Vancouver, BC, and work with clients across Canada and the United States. Wherever your business is, we build your strategy around how your specific market searches, from local map results to the answers AI assistants give when your customers ask for a recommendation."
```

## From the Blog {#blog}

(BlogCards block, tag `growth`. Renders nothing until /resources exists and has real Growth posts.)

Real, practical answers to the SEO and AEO questions we hear most.
[CTA: View All Resources → /resources/]

<!-- Research-backed first articles: an honest "Is AEO worth it?" (the #1 result for "aeo agency" is a Reddit thread asking exactly that) and an SEO audit cost guide ("seo audit cost", 600/mo). -->

## Ready to See Where You Stand? {#cta}

Start with a free Instant Audit: no obligation, just a clear picture of where your revenue is leaking and what to fix first.
[CTA: Get Your Free Audit → /audit/]

<!--
CHANGE LOG, v2 (Oct 1) vs v1 (Sept 30). v1 and the Doc draft (rev 164) keep the old wording.
Founder direction (Oct 1): no prices on the Growth page; show the method and strength; open to any
growing business, since some growth clients pay well above the published plan prices and a visible
low price would undersell them.
1. All prices removed, including the Full Audit. Old FAQ "How much does an SEO audit cost?" (stated
   $945 / $499 / $999) became "How is your growth work priced?" (scoped, fixed monthly fee, no numbers).
2. Attract and Growth plan cards removed. Plan names now appear only on the Boutique Fitness,
   Wellness & Counselling, and Sports pages. Their deliverables are folded into "What We Run for You".
3. New centerpiece, "How We Move Revenue" (6 steps, emits HowTo). It replaces the 3-step "How It Works"
   (Audit and Strategy / Execution / Reporting and Iteration).
4. New "What We Run for You" capability section. States that ad spend is paid by the client directly
   (founder, Oct 1).
5. Growth Ladder rewritten as 3 rungs (Instant Audit, Full Audit, ongoing growth work), no plan names.
   The audit-or-build line moved here from the old "Every Plan Starts With a Full Audit" section, which
   is gone.
6. Instant Audit contents combined from the /audit page and the old ladder (founder, Oct 1: both are
   right), including "SEO and AEO readiness basics" (founder: a light AEO check is the hook). Final list
   to be confirmed when the audit Skill workflow is built.
7. Reporting cadence stated: live dashboard, monthly report, monthly strategy call (founder, Oct 1).
8. New "Other Growing Businesses" card under the industries, linking to /contact/.
9. New Results Strip slot for unnamed results (founder approved Oct 1). Renders only when filled.
10. Answer capsule, sub-headline, meta description, Service schema, and final CTA line rewritten to match.
    "Fixed audit pricing, clear scope on everything else" left the meta description.
11. New FAQ "How long until I see results?" replaces the plans-difference question (no plans on this page).
12. URLs use the sitewide trailing slash.

OPEN ITEMS
- Results Strip numbers (founder to supply).
- Final Instant Audit contents: confirm when the audit Skill workflow is built, then align /audit,
  the homepage FAQ, and this page.
- Wellness and Sports cards quote Ahrefs volumes from Sept 22-23. Re-check before launch.
- Check-in cadence on demo-industry Growth Plans (weekly strategy calls) stays on those pages only.
-->

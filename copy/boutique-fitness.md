---
# Boutique Fitness Solutions page copy: working copy. The founder approves and edits it section by
# section during dev. Build each section only after its copy is confirmed.
# Built from the Claude Doc's Boutique Fitness Draft tab (rev 45) and the Sept 22 research, rebuilt as a
# conversion funnel on the same structure as the approved Wellness & Counselling page (founder, Oct 1):
# insights, why us, what's included, pricing, next steps, capture. Change log at the bottom.
page: boutique-fitness
url: /solutions/boutique-fitness/
title: "Fadeaway Creatives | SEO for Yoga & Fitness Studios"
description: "Websites, local SEO, and AEO for yoga, pilates, spin, and barre studios. Connected to Mindbody or Momence, built to fill every class. Free demo."
canonical: "https://fadeawaycreatives.com/solutions/boutique-fitness/"
og:
  title: "Fadeaway Creatives | SEO for Yoga & Fitness Studios"
  description: "Websites, local SEO, and AEO for yoga, pilates, spin, and barre studios. Connected to Mindbody or Momence, built to fill every class. Free demo."
  url: "https://fadeawaycreatives.com/solutions/boutique-fitness/"
  type: website
  locale: en_US
  image: /og-default.jpg
twitter:
  card: summary_large_image
robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
h1: "Websites and SEO Growth That Fill Your Classes"
answer_capsule: >-
  Fadeaway Creatives builds websites and runs local SEO and AEO for yoga,
  pilates, spin, and barre studios across Canada and the US. We connect your
  site to the booking platform you already use, like Mindbody, Momence, or
  Marianatek, get you showing up on Google Maps and in AI recommendations for
  your neighbourhood, and start with a free custom demo of your new website.
keywords:
  primary: "seo for yoga studios"   # 150/mo US KD 1. In-scope anchor; Canada returns almost nothing.
  secondary: ["marketing for yoga studios", "pilates studio marketing", "local seo for gyms (supporting only)", "gym marketing agency (supporting only)"]
  note: "Studio-format only (yoga, pilates, spin/cycling, barre). Gyms are excluded by scope even though gym terms have more volume. Search demand skews to people OPENING a studio, so the page speaks to new studios too."
pricing: shown  # One of the three pages that show real numbers (with Wellness & Counselling and Sports).
schema:
  - Organization    # sitewide, from the base layout
  - BreadcrumbList  # Home > Boutique Fitness
  - Service         # Studio Website Setup, Full Audit, Attract Plan, Growth Plan, Custom Website Build. Offers in USD and CAD, same numbers (same pattern as Wellness).
  - HowTo           # from How It Works (4 steps)
  - FAQPage         # generated from the faq list below
content_tag: boutique-fitness
last_updated: TODO
---

<!--
Page job: CONVERT. Same funnel and block order as the Wellness & Counselling page:
  hook (Hero) → what we do → who it's for → insight → why Fadeaway → see it first (free demo)
  (order changed Oct 13, founder: Tailored Solutions Built for Boutique Studios first, then From Search to Booked Class)
  → what you pay for and get → what to expect → how it works → proof → FAQ → final ask.
Free demo is the primary CTA. Free audit is the second path for studios keeping their site.
Reuse the Wellness page blocks exactly; only the copy changes.
[Link: text → url] and [CTA: text → url] are link specs, not visible brackets.
-->

## Section 0: Meta Data & Keyword Targeting (/solutions/boutique-fitness/)

(Review table. Same values as the frontmatter above; the build reads the frontmatter. Change both together.)

| Field | Value | Status |
|---|---|---|
| Title tag | Fadeaway Creatives \| SEO for Yoga & Fitness Studios (51 chars) | Set |
| Meta description | Websites, local SEO, and AEO for yoga, pilates, spin, and barre studios. Connected to Mindbody or Momence, built to fill every class. Free demo. (144 chars) | Updated, needs approval |
| Canonical | https://fadeawaycreatives.com/solutions/boutique-fitness/ | Set |
| H1 | Websites and SEO Growth That Fill Your Classes (line break after "Growth", founder Oct 7) | Set |
| og:title / og:description | Mirror title tag / meta description | Set |
| og:image / twitter:image | /og-default.jpg | Set (default) |
| Robots meta | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | Set |
| Schema: Organization | Inherited sitewide, no LocalBusiness for Fadeaway itself | Set |
| Schema: Service | Studio Website Setup ($945), Full Audit ($945), Attract Plan ($495/mo), Growth Plan ($995/mo), Custom Website Build (scoped). USD and CAD offers, same numbers | Updated, needs approval |
| Schema: HowTo | From How It Works (4 steps) | Updated, needs approval |
| Schema: FAQPage | From the FAQ list, matches visible copy verbatim | Set |
| Schema: BreadcrumbList | Home > Boutique Fitness (no /solutions hub) | Updated, needs approval |
| Answer capsule | See frontmatter | Updated, needs approval |
| Visible FAQ block | 6 questions, 40 to 60 word answers | Updated, needs approval |
| Deliverables | Studio website setup: full page set, copy by Fadeaway, live within 2 weeks of demo approval, 1 round of revisions, hosting while on a plan (same as Wellness, founder Oct 1) | Set |
| Last updated date | Set at launch | Pending launch |
| Internal links | /demo-request/, /audit/, /services/build/, /services/growth/, /labs/. Zero `#` placeholders. | To QA |
| Primary keyword | seo for yoga studios (150/mo US KD 1) | Set |
| Secondary keywords | marketing for yoga studios, pilates studio marketing; gym terms supporting only | Set |
| Pricing display | Real numbers shown (one of the three demo-industry pages) | Set |

## Breadcrumb {#breadcrumb}

Home → Boutique Fitness

## Hero {#hero}

- Eyebrow: Websites, Local SEO & AEO for Yoga, Pilates, Spin & Barre Studios
- H1: Websites and SEO Growth That Fill Your Classes (line break after "Growth")
- Sub-headline: More people finding you, more people booking, fewer empty spots in your schedule. (Rewritten, founder Oct 7.)
- Primary CTA (removed, founder Oct 7): the hero no longer has the Get Your Free Demo button; the demo CTAs stay further down the page.
- Hero CTA (replaced Oct 7): free-audit website box only, same workflow as the homepage hero. Label "Get a Free Audit of Your Current Setup", placeholder `yourstudio.com`, button "Get Your Free Audit"; GETs /audit/?website=
- Answer capsule: hidden visually since Oct 7 (founder: it did not make sense on the page); it stays in the HTML as screen-reader-only text, from the frontmatter, so AEO still reads it.

## Tailored Solutions Built for Boutique Studios {#who-its-for}

(Heading changed from "Who It's For" to "Built for Boutique Studios" (Oct 7), then to "Tailored Solutions Built for Boutique Studios" (founder, Oct 13).)

Studio types we work with (tiles show only the line art and the name, no text):
- Yoga Studios
- Pilates Studios
- Spin and Cycling Studios
- Barre Studios
- Opening a New Studio?

(Founder, Oct 13: the points below apply to every studio type, so the per-type paragraphs were removed. The Yoga paragraph repeated "What We Do" and was dropped. Strip copy approved Oct 13.)

**For Every Studio** (small label above a strip of 4 points under the tiles)

### Full Classes, Moving Waitlists
Limited spots are your product. We help you keep every class booked and your waitlist moving.

### A Site That Feels Like Your Studio
Your look, your energy and your community, in a fast site that makes the first class an easy yes.

### Your Instructors, Front and Center
Show the people behind your classes, so visitors feel like they know you before they walk in.

### Opening Soon? Start Strong
We set up your site, booking, and Google Business Profile before your doors open.

### Call-out tile (sixth card, links to /contact/; on phones it shows as a card under "From Search to Booked Class" instead, founder Oct 13)
(DRAFT by Claude, needs approval.)
Ready for the Next Step?
Tell us about your studio and we will help you plan what comes next.
Link: Contact Us

## From Search to Booked Class {#services}

(Heading changed from "What We Do for Your Studio", founder Oct 13. Section now sits below "Tailored Solutions Built for Boutique Studios".)

### A Website Built Around Your Booking Flow
Class schedules, intro offers, and memberships connected to your booking platform, so booking a class takes seconds on any phone.

### Win the Google Map Pack
Google Business Profile optimization so your studio shows up when someone nearby searches for a class.

### Neighbourhood Pages
Clients search their own neighbourhood, not just your city. We build pages that capture searches across your whole service area.

### AEO for AI Recommendations
Structured data and clear studio details, so you're the answer when someone asks an AI assistant for the best studio nearby.

### Automated Review Requests
Fresh reviews help with both Google and AI tools. We set up reminders that make it easy for happy clients to leave one right after class.

### Track Real Bookings, Not Views
A dashboard showing which searches turn into booked classes and memberships, not just which pages get visited.

### Need Custom Software Instead (REMOVED from the page, founder Oct 7: it does not belong at the top; not placed elsewhere yet)
If what you actually need is custom software, automations, or dashboards rather than a website, that's Fadeaway Labs.
[Link: See Fadeaway Labs → /labs/]

## Clear Deliverables. Transparent Pricing. {#pricing}

(Heading changed from "What You Pay For, and What You Get", founder Oct 13. Centered, two rows: "Clear Deliverables." / "Transparent Pricing.".)

(Rebuilt Oct 7, founder direction: two compact plan cards, expandable to the full list, each with a button to /contact/. Button labels and the setup line are DRAFT by Claude, needs approval.)

(Prices changed Oct 13 (founder): Attract $495 / month, Growth $995 / month. Plan cards: price reads "$495 / month" and "$995 / month"; Attract card orange, Growth card green; expander label "See Deliverables" sits above the button; the standard button sits at the bottom of the card and moves down when it opens.)

(Intro line "Fixed prices, complete deliverable lists, and honest expectations." removed, founder Oct 13.)

(Dialog built Oct 13: "See Deliverables" opens a native dialog (centered panel, full-screen sheet on phones) with the plan name and price at the top, the full grouped list and the outcome line, and the start button pinned at the bottom. The list is in the page HTML while closed.)

(Deliverables rewritten Oct 13, founder direction: show the volume of real work each month, organized as
Foundation (months 1 to 3) and Every Month. Each card shows 3 short points; "See Deliverables" opens the full
list in a popup (founder builds the popup). The popup content must be in the page HTML, not loaded on click,
so search engines and AI tools can read it. Group labels in italics render as small subheadings.)

### Attract Plan: $495 / month
For studios that want steady, compounding local visibility.

**Card points (always visible):**
- A full SEO and AEO foundation in your first 3 months
- New content, reviews and local links every month
- A live bookings dashboard and a monthly strategy call

**See Deliverables (popup):**

**Months 1 to 3: Build the Foundation**

*Research and planning*
- Local market and keyword research for your classes and neighbourhoods
- A keyword map that gives every page one clear job
- Site structure and URL plan, with redirects so nothing breaks

*Your pages*
- Page copy written and tuned for search, page by page
- Page titles and descriptions written to earn the click
- Structured data (JSON-LD) so Google and AI tools can read your classes, location and reviews

*Technical health*
- Technical SEO fixes: speed, mobile, indexing and broken links
- A backlink audit, with spammy links cleaned up

*Local presence*
- Google Business Profile fully optimized
- Business listings made consistent across directories
- Your booking platform connected to your site and your tracking

*Tracking*
- Google Analytics, Search Console and booking tracking set up
- Your reporting dashboard built

**Every Month: Grow and Compound**
- A content calendar built around your classes, neighbourhoods and seasons
- New content that makes you the go-to local studio for your classes, on Google and in AI answers
- Link building from local sites and directories
- Conversion improvements to your booking and intro offer pages
- Google Business Profile posts and updates
- Automated review requests for happy clients
- Site health, rankings and AI search signals monitored
- A monthly dashboard report
- A monthly strategy planning call

**What you get out of it:** a studio that's easier to find on Google Maps, in local search, and in AI answers month over month, more reviews, and a clear monthly view of rankings, traffic, and bookings.

### Growth Plan: $995 / month
For studios ready to grow faster on more than one channel.

**Card points (always visible):**
- Everything in the Attract Plan
- Paid ads, intro offer campaigns and email
- Weekly strategy calls

**See Deliverables (popup):**

**Everything in the Attract Plan, plus:**

*Paid campaigns*
- Google and Meta ad campaigns set up and managed
- Intro offer and class pass campaigns, each with its own landing page
- Ongoing testing of ads, audiences and offers

*Email*
- Welcome emails for new clients
- Win-back emails for lapsed members
- Campaigns for new classes, workshops and seasonal offers

*Visibility and reporting*
- AI search visibility tracking across ChatGPT, Perplexity and Google AI Overviews
- An expanded dashboard with paid and organic results side by side
- Weekly strategy calls instead of monthly

**What you get out of it:** new faces through the door from paid campaigns while your local visibility builds underneath, plus weekly strategy calls timed to your class calendar and busy seasons.

Card buttons: Start with the Attract Plan → /contact/ · Start with the Growth Plan → /contact/

Line under the cards (updated Oct 13; brings back the 6-month minimum, ad spend and no-guarantee fine print from Offer & Pricing):
Every plan starts with a one-time $945 setup: a new website built from your demo, or a Full Audit if you're keeping your current site. Plans run 6 months (3 months of Foundation, then 3 months of Growth), then month to month. Ad spend is paid directly by you to Google and Meta. We never guarantee rankings.

<!-- Removed from the page Oct 7 (founder): the Website Setup and Full Audit cards, the fine print, the custom-build fork and the closing button. Kept for reuse in FAQ/contact:

### Studio Website Setup: $945 one time
For studios that want a professional site live fast. Your free demo shows you 2 to 4 pages first. Once you approve it, we build out the rest of your site from our boutique studio library and launch it.

**What's included:**
- A complete studio website: the pages from your demo, plus the rest your studio needs, like classes and schedule, pricing and intro offers, instructors, about, contact, and FAQ
- All website copy written for you, SEO and AEO ready from day one
- Your branding: logo, colours, photos, and your studio details
- Booking connected to your platform, like Mindbody, Momence, or Marianatek
- Built mobile-first, fast, and secure
- On-page SEO, structured data, and AEO basics set up at launch
- Google Business Profile set up or cleaned up
- Google Analytics and Search Console set up, with booking clicks tracked
- Hosting included while you're on a plan
- 1 round of revisions before launch

**What you get out of it:** a professional, fast website live within 2 weeks of approving your demo, written and structured to rank locally, ready to be recommended by AI tools, and built to turn visitors into booked classes. Paired with an Attract or Growth Plan.

### Full Audit: $945 one time
For studios keeping their current site.

**What's included:**
- A full website and account review
- A booking flow review: how many steps it takes to book a class, and where people drop off
- Keyword research for your classes and neighbourhoods
- An in-depth AEO readiness check: how ChatGPT, Perplexity, and Google's AI Overviews see your studio
- A content strategy foundation
- Quick wins identified and ready to act on
- A clear 3 to 6 month action plan

**What you get out of it:** a clear, prioritized picture of what's keeping your classes from filling and exactly what to fix first. If you move ahead with a new website instead, the fee is credited toward it.

Fine print (small type, under the plan cards): Plans run on a 6-month minimum. Ad spend is paid directly by you to Google and Meta. Results depend on your market, competition, and starting point; we never guarantee rankings.

### Need More Than the Website Setup?
Multi-location studios, heavier customization, or a custom-designed site are scoped as a custom build and quoted at a fixed price before we start.
[Link: See Build Services → /services/build/]

[CTA touchpoint: Get Your Free Demo → /demo-request/]
-->

## Not Sure Yet? Request Your Demo {#demo}

(HIDDEN on the page for now, founder Oct 13. The copy stays here for when it comes back.)

(Rewritten Oct 7, founder direction; copy DRAFT by Claude, needs approval. Moved below pricing; no "free" wording.)

We know boutique studios well, so your demo starts from what already works. We build 4 pages made for your studio, in your branding, ready in 2 business days.


[CTA: Request Your Demo → /demo-request/]
Already have a website you want to keep? [Link: Get a free audit instead → /audit/]

## What Most Studio Websites Get Wrong {#insights}

(Insight section. Gives the visitor something useful before asking for anything.)

(Intro line removed, founder Oct 7: "Most studio websites have the same quiet problems, and most owners have never had anyone point them out.")

### The Booking Flow Loses People
If booking a class takes more than a couple of taps, or bounces people to a confusing schedule page, some of them simply leave. Most studio sites make this harder than it needs to be. Your site should fill tomorrow's 6am class while you're teaching tonight's.
<!-- Added Oct 2 (founder): "your website is a 24/7 salesperson" framing. One line per page, worded for this audience. -->

### Invisible on the Map in Your Own Neighbourhood
Someone searches "yoga studio near me" three blocks from your door, and a studio across town shows up first. That's usually a fixable Google Business Profile and site problem, not bad luck.

### AI Assistants Now Recommend Studios
People are starting to ask ChatGPT and Google's AI for class recommendations. Those tools favour studios whose sites clearly state classes, schedule, pricing, location, and fresh reviews.

### A Brochure, Not a Growth Engine
A site that just sits there doesn't fill classes. Booking, search, reviews, and reporting need to work together, so you can see which searches turn into booked classes.

[CTA touchpoint: Want to see how your studio shows up today? Get a Free Audit → /audit/]

## Why Studios Work With Fadeaway {#why}

### Built for Studios, Not Generic Small Businesses
Class schedules, intro offers, memberships, and instructor pages are built in from the start, because that's how studio clients decide.

### Works With Your Booking Platform
We connect your site to Mindbody, Momence, or Marianatek, so classes, payments, and clients stay in one place and booking feels seamless.

### Found Locally and in AI Search
Google Business Profile, neighbourhood pages, schema, and review signals set up so you show up on the map and in AI recommendations.

### Care in Every Detail
We care about each pixel and each interaction, and treat every studio's site like it's the only one we're building.

### Founder-Led, With Fixed Pricing
15+ years of experience, hands-on from first call to launch. Every price is on this page, with no hourly billing and no surprises.

## What to Expect, Month by Month {#what-to-expect}

Typical timelines from industry best practice, not promises. Every market is different, and your dashboard shows the real numbers as they happen.

### First weeks
Your site goes live, or your audit fixes start. Tracking is set up, your Google Business Profile is cleaned up, and booking is connected.

### Months 1 to 2
Technical fixes, neighbourhood pages, and the first content go live. Review requests start running. On the Growth Plan, intro offer campaigns can start bringing in first-timers.

### Months 3 to 6
This is where local SEO and AEO usually start compounding: better map rankings, more people finding you directly, and more classes booked from your own site.

### Month 6
A full picture with real numbers on visibility, bookings, and memberships, and a clear decision on what's next.

## How It Works {#how-it-works}

(Emits HowTo schema.)

1. **Start free**: Request a free demo of your new website, or a free audit of the one you have.
2. **Choose your path**: A new site with the $945 setup, or a Full Audit if you're keeping your current site. Never both.
3. **Launch**: We build or fix your site, connect it to your booking platform, set up your tracking, and host it for you if it's built from your demo.
4. **Grow**: Your Attract or Growth Plan kicks in, with local SEO, AEO, content, reviews, and reporting tied to booked classes.

## Results We've Delivered {#real-work}

(Badge above the heading: **Our Work**, founder Oct 7.)

(ProofGrid, tag `boutique-fitness`. Renders nothing until an approved case study exists.)

<!-- No boutique fitness case study yet. The free demo is this page's proof for now. Use
copy/templates/case-study-template.md when a studio result is ready. -->

## Testimonials {#testimonials}

(Testimonials block, tag `boutique-fitness`. Renders nothing until real, permission-confirmed quotes exist.)

## Frequently Asked Questions {#faq}

(Render from the `faq` data below. The same data generates the FAQPage JSON-LD.)

```yaml
faq:
  - q: "How much does SEO for a yoga studio cost?"
    a: "A new studio website is a one-time $945 setup, or a Full Audit is $945 if you're keeping your current site. After that, the Attract Plan is $495 / month and the Growth Plan is $995 / month, with everything included listed on this page. Plans run on a 6-month minimum."
  - q: "Can I do local SEO for my studio myself?"
    a: "You can, and some owners do. Most find they don't have the time once they add up schema, indexing, content, reviews, and Google Business Profile management on top of running classes and a team. That's the gap we fill, so you can focus on your studio."
  - q: "Do you integrate with Mindbody, Momence, or Marianatek?"
    a: "Yes, all three. We connect your booking platform directly to your website and reporting, so class schedules, payments, and clients stay in sync. Your team keeps the system it already knows, and new clients can book a class in a few taps from your new website."
  - q: "What if I already have a website?"
    a: "Start with a free audit. We'll show you what's working and what's costing you bookings. If your site is worth keeping, the Full Audit maps the fixes and growth plan. If it needs replacing, the $945 website setup covers it instead, so you never pay for both."
  - q: "I'm opening a new studio. Can you help?"
    a: "Yes, and it's the best time to start. We set up your website, booking connection, and Google Business Profile before you open, so people searching for classes nearby can find you and book from day one. Request a free demo and we'll show you what your site could look like."
  - q: "Do you work with studios outside Canada?"
    a: "Yes. We're based in Vancouver, BC, and work with yoga, pilates, spin, and barre studios across Canada and the United States. Everything happens remotely, and we build your local strategy around the neighbourhoods and searches that matter in your city."
```

## From the Blog {#blog}

(BlogCards block, tag `boutique-fitness`. Renders nothing until /articles/ exists and has real posts.)

Real, practical answers for studio owners, whether you're already running one or about to open one.
[CTA: View All Resources → /articles/]

<!-- Research-backed queue: "What It Actually Costs to Open a Pilates Studio", "How to Open a Yoga Studio:
The Digital Setup Checklist", "Local SEO for Yoga and Pilates Studios". -->

## Ready to Fill Every Class? {#cta}

See your new website before you spend a dollar. Tell us about your studio and we'll build you a free demo.
[CTA: Get Your Free Demo → /demo-request/]
[Link: Or get a free audit of your current site → /audit/]

<!--
CHANGE LOG vs the Claude Doc draft (rev 45). Originals stay in the Doc.
Founder direction (Oct 1): same conversion funnel and deliverables approach as Wellness & Counselling.
1. Structure rebuilt on the Wellness page's funnel and blocks: insight section, Why Studios Work With
   Fadeaway, Who It's For, What We Do, free demo, What You Pay For and What You Get, What to Expect,
   How It Works, FAQ, final ask.
2. Primary CTA is the free demo (/demo-request/). Draft Hero used the free audit as primary.
3. "Studio Launch Package" ($1,000 build with a required 6-month Growth Plan) REMOVED everywhere.
   Retired sitewide (founder, Sept 23). Replaced by the Studio Website Setup ($945), same terms as
   Wellness: full page set, copy by Fadeaway, live within 2 weeks of demo approval, 1 round of
   revisions, hosting while on a plan. Old FAQ cost answer mentioned the package and "$1,000".
4. "The 6-Month Commitment, Explained" section removed (founder: the 6-month minimum is fine print,
   not a headline). Its month-by-month content became the hedged "What to Expect" section.
5. Pricing rebuilt with full "What's included" and "What you get out of it" per offer. Full Audit adds
   a booking flow review (studio-specific). Growth Plan names intro offers and class passes.
6. FAQ: dropped "What should I look for when hiring a marketing agency?" and "What's a good cost per
   lead?" (both read as digs at other agencies, which the voice rules don't allow). Added "What if I
   already have a website?" and "I'm opening a new studio. Can you help?" (the research found studio
   search demand comes mostly from people opening one). Cost answer leads.
7. New "Opening a New Studio?" card under Who It's For, same research reason.
8. "Our AEO & SEO Method" folded into What We Do (Map Pack, neighbourhood pages, AEO, reviews,
   tracking bookings).
9. "Zero Website Maintenance" item replaced by the hosting line in the deliverables (hosting only while
   on a plan; a maintenance plan is planned but not priced).
10. Answer capsule rewritten: names Fadeaway, Canada and the US, the booking platforms, and the free
    demo. Old: "We build fluid booking flows, run local SEO and AEO campaigns, and give you a growth
    partner who actually understands boutique studios, not another software vendor blogging about
    marketing." (also a dig at others, removed).
11. Labs call-out added at the end of What We Do (same as Wellness, founder Oct 1).
12. Breadcrumb Home > Boutique Fitness; URLs use the trailing slash; comma splices fixed.

OPEN ITEMS
- Results and testimonials: no studio case study yet. The demo carries the proof.
- Studio-specific share image (optional).
- Maintenance plan for clients after their plan ends: planned, not priced (same as Wellness).
-->

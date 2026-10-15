---
# Wellness & Counselling Solutions page copy: working copy. The founder approves and edits it
# section by section during dev. Build each section only after its copy is confirmed.
# Built from the Claude Doc's Wellness & Counselling Draft tab (rev 18) and the Sept 22-23 wellness
# research, rebuilt as a conversion funnel (founder, Oct 1): bring industry users in, give them
# insights, show why us, show pricing, give next steps, capture them. Change log at the bottom.
page: wellness-counselling
url: /solutions/wellness-counselling/
title: "Fadeaway Creatives | SEO for Therapists & Wellness Practices"
description: "SEO, AEO, and websites for therapists, counsellors, chiropractors, and wellness practices. Get found beyond directory listings, on Google and in AI search."
canonical: "https://fadeawaycreatives.com/solutions/wellness-counselling/"
og:
  title: "Fadeaway Creatives | SEO for Therapists & Wellness Practices"
  description: "SEO, AEO, and websites for therapists, counsellors, chiropractors, and wellness practices. Get found beyond directory listings, on Google and in AI search."
  url: "https://fadeawaycreatives.com/solutions/wellness-counselling/"
  type: website
  locale: en_US
  image: /og-default.jpg
twitter:
  card: summary_large_image
robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
h1: "SEO for Therapists, Built to Fill Your Practice"
answer_capsule: >-
  Fadeaway Creatives builds websites and runs SEO and AEO for therapists,
  counsellors, chiropractors, and wellness practices across Canada and the US,
  so new clients find you on Google and in AI assistant recommendations instead
  of scrolling past you on a directory page. Every site works with the practice
  software you already use, like Jane App or SimplePractice, with monthly plans
  starting from $495.
keywords:
  primary: "seo for therapists"   # 1,600/mo US KD 3; 300/mo Canada KD 1; $10 CPC. Best Canadian buyer-intent term in the project.
  secondary: ["therapist seo", "therapist website design", "chiropractic marketing", "how to get more therapy clients", "private practice marketing", "med spa seo"]
pricing: shown  # One of the three pages that show real numbers (with Boutique Fitness and Sports).
schema:
  - Organization    # sitewide, from the base layout
  - BreadcrumbList  # Home > Wellness & Counselling
  - Service         # Practice Website Setup, Full Audit, Attract Plan, Growth Plan, Custom Website Build. Offers with prices allowed on this page.
  - HowTo           # OFF while How It Works is hidden (Oct 14, same as Boutique Fitness)
  - FAQPage         # generated from the faq list below
content_tag: wellness-counselling
last_updated: TODO
---

<!--
Page job: CONVERT. This is where industry-specific traffic lands (outreach, referrals, directories,
search for "seo for therapists"). Order follows the funnel:
  hook (Hero) → insight (what's changing in how clients find practices) → why Fadeaway → who it's for
  → what we do → see it first (free demo) → pricing → how it works → proof → FAQ → final ask.
Two entry points everywhere: Free Demo (no site, or a site that isn't working) and Free Audit
(site you want to keep). Demo is primary: it's the capture step of the demo funnel.
Notes for the build:
- Reuse existing blocks: Breadcrumb, Hero, CardGrid, IconGrid/FeatureList, Steps (HowTo),
  PricingCard (first use with prices), ProofGrid, Testimonials, Faq, BlogCards, CtaBlock.
- Answer capsule renders as real text directly under the Hero.
- [Link: text → url] and [CTA: text → url] are link specs, not visible brackets.
-->

## Section 0: Meta Data & Keyword Targeting (/solutions/wellness-counselling/)

(Review table. Same values as the frontmatter above; the build reads the frontmatter. Change both together.)

| Field | Value | Status |
|---|---|---|
| Title tag | Fadeaway Creatives \| SEO for Therapists & Wellness Practices (60 chars, at the limit) | Set |
| Meta description | SEO, AEO, and websites for therapists, counsellors, chiropractors, and wellness practices. Get found beyond directory listings, on Google and in AI search. (155 chars, at the limit; "Free custom demo" removed Oct 14) | Updated, needs approval |
| Canonical | https://fadeawaycreatives.com/solutions/wellness-counselling/ | Set |
| H1 | SEO for Therapists, Built to Fill Your Practice | Set |
| og:title / og:description | Mirror title tag / meta description | Set |
| og:image / twitter:image | /og-default.jpg (a wellness-specific image is optional) | Set (default) |
| Robots meta | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | Set |
| Schema: Organization | Inherited sitewide, no LocalBusiness for Fadeaway itself | Set |
| Schema: Service | Practice Website Setup ($945), Full Audit ($945), Attract Plan ($495/mo), Growth Plan ($995/mo), Custom Website Build (scoped) | Updated, needs approval |
| Schema: HowTo | Off while How It Works is hidden (Oct 14) | Hidden |
| Deliverables | Website setup: full page set, copy by Fadeaway, live within 2 weeks of demo approval, 1 round of revisions before launch (founder, Oct 1) | Set |
| Schema: FAQPage | From the FAQ list, matches visible copy verbatim | Set |
| Schema: BreadcrumbList | Home > Wellness & Counselling (no /solutions hub) | Updated, needs approval |
| Answer capsule | See frontmatter (63 words; demo line replaced by "monthly plans starting from $495", Oct 14) | Updated, needs approval |
| Visible FAQ block | 6 questions, 40 to 60 word answers | Updated, needs approval |
| Last updated date | Set at launch | Pending launch |
| Internal links | /audit/, /contact/, /labs/, /portfolio/. No /demo-request/ links until the demo returns (Oct 14). Zero `#` placeholders. | To QA |
| Primary keyword | seo for therapists (1,600/mo US KD 3; 300/mo Canada KD 1; $10 CPC) | Set |
| Secondary keywords | therapist seo, therapist website design, chiropractic marketing, how to get more therapy clients, private practice marketing, med spa seo | Set |
| Pricing display | Real numbers shown (one of the three demo-industry pages) | Set |

## Breadcrumb {#breadcrumb}

Home → Wellness & Counselling

## Hero {#hero}

(Rebuilt Oct 14 to match Boutique Fitness, founder: no demo anywhere on the page until it returns; audit box in the hero.)

- Eyebrow: SEO, AEO & Websites for Therapists, Counsellors, Chiropractors & Wellness Practices
- H1: SEO for Therapists, Built to Fill Your Practice
- Sub-headline: Get found by new clients on Google and in AI recommendations, not lost on a directory page with dozens of other providers.
- Hero CTA: free-audit website box only, same workflow as Boutique Fitness. Label "Get a Free Audit of Your Current Site", placeholder `yourpractice.com`, button "Get Your Free Audit"; GETs /audit/?website=
- Answer capsule: renders the same way as on Boutique Fitness (from the frontmatter).

## How Clients Find Practices Now {#insights}

(Page position: moved just above the FAQ, founder Oct 14. The answer capsule now sits in the first section after the Hero, "Who It's For".)

(Cut to 3 cards and the intro line removed, Oct 14, founder. The booking card moved into "Get Booked" below.)

### Directories Put You Next to Your Competition
A directory profile puts you on the same page as dozens of other providers, sorted by things you don't control. Your own website is the one place a potential client sees only you.

### Clients Search by Problem and Place
People rarely search for "a therapist." They search for help with anxiety, couples counselling, back pain, or a sports injury, near where they live or work. A clear page for each specialty and location gets you found.

### AI Assistants Now Recommend Providers
More people ask ChatGPT, Perplexity, or Google's AI Overviews to suggest a provider. Those tools recommend practices whose websites clearly state who they help, where, and how to book.

[CTA touchpoint: Want to see how your practice shows up today? Get a Free Audit → /audit/]

## Tailored Solutions Built for Wellness Practices {#who-its-for}

(Replaces "Which Practice Fits", Oct 14, same pattern as Boutique Fitness. DRAFT by Claude, needs approval.)

Practice types we work with (tiles show only the line art and the name, no text):
- Therapists & Counsellors
- Chiropractors
- Physical Therapy

Line under the tiles: We also work with med spas and aesthetic practices.

**For Every Practice** (small label above a strip of 4 points under the tiles)

### A Site That Feels Like Your Practice
Calm, clear and welcoming, so a first-time client feels comfortable reaching out.

### Your Clinicians, Front and Center
Bios, specialties and approach for each clinician, so clients find the right fit before they book.

### Works With Your Practice Software
Jane App, SimplePractice, TherapyNotes and similar platforms stay at the centre, so booking and intake don't change for your team.

### Starting Your Own Practice?
We set up your site, booking, and Google Business Profile the right way from day one.

### Call-out tile (same placement as Boutique Fitness: in the tile grid on desktop, under "From Search to Booked Client" on phones)
Let's Grow Your Practice
Tell us about your practice and we will help you plan what comes next.
Link: Contact Us → /contact/
(Build note: render once in the HTML, or let the max-md:hidden / md:hidden classes hide the inactive copy. Do not add aria-hidden or tabindex="-1" to the copy that is visible.)

## From Search to Booked Client {#services}

(Replaces "What We Do for Your Practice", Oct 14. Three stages of two cards each, same as Boutique Fitness. DRAFT by Claude, needs approval.)

### Stage 1: Get Found

#### Specialty and Location Pages
A clear page for each service you offer and each area you serve, written around the questions clients actually search.

#### Win the Local Map Results
Google Business Profile and local listings optimized so you show up when someone nearby searches for care.

### Stage 2: Get Chosen

#### AEO for AI Recommendations
Structured data and clear practice details, so you're the answer when someone asks an AI assistant for a provider near them.

#### Trust Before the First Session
Clinician bios, credentials, and a review strategy that follows your college's or association's rules, so new clients feel confident booking.

### Stage 3: Get Booked

#### A Website Built Around Your Booking Flow
Connected to Jane App, SimplePractice, or the software you already use, so booking a first session takes a few taps, even at 11pm.

#### Track Real Bookings, Not Views
A dashboard showing which searches turn into booked appointments, not just which pages get visited.

## Clear Deliverables. Transparent Pricing. {#pricing}

(Rebuilt Oct 14 to match Boutique Fitness: "Pricing" eyebrow badge, centered two-row heading, "Starts from" line above each price, "$945 one-time website build setup" under each price, 3 card points, "See Deliverables" opens the same dialog, start button to /contact/. No intro line, no "What you get out of it" blocks, no fine print under the cards. Deliverables reworded for health practices, DRAFT by Claude, needs approval.)

### Attract Plan: $495 / month
For practices that want steady, compounding visibility.

**Card points (always visible):**
- Full SEO and AEO foundation, set up compliance-ready
- New content, local links and site improvements every month
- Clear dashboard and monthly strategy calls

**See Deliverables (popup):**

**Build the Foundation**

*Research and planning*
- Local market and keyword research for your specialties and service areas
- A keyword map that gives every page one clear job
- Site structure and URL plan, with redirects so nothing breaks

*Your pages*
- Page copy written and tuned for search, page by page
- Page titles and descriptions written to earn the click
- Structured data (JSON-LD) so Google and AI tools can read your services, clinicians, locations and hours

*Technical health*
- Technical SEO fixes: speed, mobile, indexing and broken links
- A backlink audit, with spammy links cleaned up

*Compliance*
- A compliance check of your forms, privacy policy and claims
- Forms and tracking set up so client health details stay out of email, analytics and ad pixels

*Local presence*
- Google Business Profile fully optimized
- Business listings made consistent across directories
- Your practice software connected to your site and your tracking

*Tracking*
- Google Analytics, Search Console and booking tracking set up
- Your reporting dashboard built

**Every Month: Grow and Compound**
- A content calendar built around your specialties, the concerns you treat and the areas you serve
- New content that makes you the trusted local practice for what you treat, on Google and in AI answers
- Link building from local sites and health directories
- Conversion improvements to your booking and service pages
- Google Business Profile posts and updates
- A review strategy that follows your college's or association's rules
- Site health, rankings and AI search signals monitored
- 24/7 reporting dashboard
- Monthly strategy calls

### Growth Plan: $995 / month
For practices ready to grow faster on more than one channel.

**Card points (always visible):**
- Everything in the Attract Plan
- Paid ads, consultation campaigns and email
- Weekly strategy calls

**See Deliverables (popup):**

**Everything in the Attract Plan, plus:**

*Paid campaigns*
- Google and Meta campaigns set up within health advertising rules
- New-client and consultation campaigns, each with its own landing page
- Ongoing testing of ads, audiences and offers

*Email*
- Welcome emails for new clients who opt in
- Newsletters and updates for clients who have opted in
- Announcements for new services, clinicians and locations

*Visibility and reporting*
- AI search visibility tracking across ChatGPT, Perplexity and Google AI Overviews
- An expanded dashboard with paid and organic results side by side
- Weekly strategy calls

Card buttons: Start with the Attract Plan → /contact/ · Start with the Growth Plan → /contact/

Row card under the pricing cards (same as Boutique Fitness):
Need Something Custom?
Multi-location clinics and custom-designed sites are scoped as a custom build, and Fadeaway Labs builds custom apps, automations and dashboards. See what we've built in our portfolio.
[Link: Explore Fadeaway Labs → /labs/] · [Link: See Our Portfolio → /portfolio/]

<!-- Wellness-specific wording choices (Oct 14), keep when editing:
- No "automated review requests": many regulated professions (especially therapists and counsellors) restrict
  asking clients for reviews or testimonials. Chiropractors and physios usually can. "Review strategy that follows
  your college's or association's rules" covers both.
- No "win-back emails to lapsed clients": contacting former therapy clients raises confidentiality and ethics issues.
  Email is opt-in only.
- Paid ads: Google and Meta restrict health-condition targeting; "within health advertising rules".
- The Compliance group in Foundation matches the wellness Full Audit addition in Offer & Pricing.
Old plan lists, setup line and the Oct 7 removed cards are in git history. -->

## Why Practices Work With Fadeaway {#why}

(Cut to 4, Oct 14. Practice software moved to the "For Every Practice" strip; Built to Be Found and Ready for AI Search are covered by "From Search to Booked Client".)

### Built for Health Practices, Not Generic Small Businesses
Specialty pages, clinician bios, intake and booking flows are built in from the start, because that's how clients choose a provider.

### Built Compliance-Ready
We know what health practices have to get right: HIPAA in the US, PIPEDA and PHIPA in Canada, and your college or association's advertising rules. Client health information stays out of website forms and email, intake runs through your secure practice software, and your privacy policy and consent language are in place before launch.

### Found Locally and in AI Search
Google Business Profile, specialty and location pages, and structured data set up so you show up on the map and in AI recommendations.

### Founder-Led, With Clear Pricing
15+ years of experience, hands-on from first call to launch. Every plan price is on this page, with no hourly billing and no surprises.

## What to Expect, Month by Month {#what-to-expect}

Typical timelines from industry best practice, not promises. Every market is different, and your dashboard shows the real numbers as they happen.

### First weeks
Your site goes live, or your audit fixes start. Tracking is set up, your Google Business Profile is cleaned up, and compliance basics are in place.

### Months 1 to 2
Technical fixes, specialty and location pages, and the first content go live. Your review strategy starts where your profession allows it. On the Growth Plan, paid campaigns can start bringing in inquiries.

### Months 3 to 6
This is where SEO and AEO usually start compounding: better local rankings, more people finding you directly instead of through directories, and more bookings from your own site.

### Month 6+
A full picture with real numbers on visibility, inquiries, and bookings, and a clear decision on what's next.

## How It Works {#how-it-works}

(HIDDEN from the page Oct 14, same as Boutique Fitness: section and HowTo schema off. Copy kept for reuse.)

1. **Start free**: Contact us about a new website, or ask for a free audit of the one you have.
2. **Choose your path**: A new site with the $945 setup, or a Full Audit if you're keeping your current site. Never both.
3. **Launch**: We build or fix your site, connect it to your practice software, set up your tracking, and host it for you if we built it.
4. **Grow**: Your Attract or Growth Plan kicks in, with SEO, AEO, content, and reporting tied to new client bookings.

<!-- Demo section removed Oct 14 (founder: no demos on the page until the demo returns after launch). Old copy:
"Not Sure Yet? Request Your Demo. We know wellness practices well, so your demo starts from what already works.
We build 4 pages made for your practice, in your branding, ready in 2 business days." Also in git history. -->

## Results We've Delivered {#real-work}

(Badge above the heading: **Our Work**, founder Oct 7.)

(ProofGrid, tag `wellness-counselling`. Renders nothing until an approved wellness case study or featured entry exists.)

(Oct 14, founder: Crane Mountain Dental no longer shows on this page. Remove the `wellness-counselling` tag from its portfolio.yaml entry. Visitors go to Labs and the portfolio through the "Need Something Custom?" card instead.)

## Testimonials {#testimonials}

(Testimonials block, tag `wellness-counselling`. Renders nothing until real, permission-confirmed quotes exist. Check the practice's college rules before using any client testimonial.)

## Frequently Asked Questions {#faq}

(Render from the `faq` data below. The same data generates the FAQPage JSON-LD.)

```yaml
faq:
  - q: "How much does SEO for therapists cost?"
    a: "A new practice website is a one-time $945 setup, or a Full Audit is $945 if you're keeping your current site. After that, the Attract Plan is $495 a month and the Growth Plan is $995 a month, with everything included listed on this page. Plans run on a 6-month minimum."
  - q: "Can I just do my own SEO instead of hiring someone?"
    a: "You can, and some practices do. But SEO and AEO take real time every month: keyword research, technical fixes, content, schema, and reviews. Most clinicians don't have that time alongside a full caseload. We handle all of it so you can focus on your clients, not your website."
  - q: "Is my website compliant with HIPAA, PIPEDA, and PHIPA?"
    a: "We build every practice site compliance-ready. Client health information stays out of website forms and email, booking and intake run through your secure practice software, and your privacy policy and consent language are in place before launch. Your practice stays responsible for its own compliance, and your website is set up to support it."
  - q: "Do you work with Jane App, SimplePractice, or TherapyNotes?"
    a: "Yes. We build your site around the practice management and booking platform you already use, so clients can book and complete intake without you switching systems or moving client records. Your team keeps its tools, and your clients get a smoother way to book from your new website."
  - q: "What if I already have a website?"
    a: "Start with a free audit. We'll show you what's working and what's costing you clients. If your site is worth keeping, the Full Audit maps the fixes and growth plan. If it needs replacing, the $945 website setup covers it instead, so you never pay for both."
  - q: "Do you work with practices outside Canada?"
    a: "Yes. We're based in Vancouver, BC, and work with therapists, counsellors, chiropractors, physical therapy clinics, and med spas across Canada and the United States. Everything happens remotely, and we build your strategy around how clients in your specific city and province or state search for care."
```

## From the Blog {#blog}

(BlogCards block, tag `wellness-counselling`. Renders nothing until /articles/ exists and has real posts.)

Real, practical answers to the questions we hear most from therapists, counsellors, chiropractors, and wellness practices.
[CTA: View All Resources → /articles/]

<!-- Research-backed queue (Sept 23): "SEO for Therapists: A Plain-English Guide", "How to Get More Therapy
Clients Without Relying on Psychology Today", "Chiropractic Marketing That Actually Brings in Patients",
"Private Practice Marketing: What Works When You're a Team of One", "SEO for Therapists in Canada". -->

## Ready to Fill Your Practice? {#cta}

Tell us about your practice and we will help you plan what comes next. (Oct 14, same as Boutique Fitness; replaces the free demo line)
[CTA: Contact Us → /contact/]
[Link: Or get a free audit of your current site → /audit/]

<!--
CHANGE LOG vs the Claude Doc draft (rev 18). Originals stay in the Doc.
Founder direction (Oct 1): a conversion funnel page: insights, why us, pricing, next steps, capture.
1. Structure rebuilt as a funnel: new "How Clients Find Practices Now" insight section, "Why Practices
   Work With Fadeaway", a "See Your New Website First" demo section, then Pricing.
2. Primary CTA is now the free demo (/demo-request/). Wellness is a demo industry (founder, Sept 23
   evening). The free audit is the second path for practices keeping their site. Old CTAs pointed to
   "#free-audit", an anchor with no section behind it.
3. Pricing rebuilt to match the decisions made after this draft: the $945 website setup (demo solution)
   (demo solution), Full Audit $945, audit-or-build (never both), the demo-industry plan lists
   (booking/practice software management + monthly check-in on Attract, weekly strategy calls on
   Growth), 6-month minimum and client-paid ad spend as fine print. Old: "Attract Plan starts at
   $499", "Growth Plan at $999" ("starts at" removed; prices are fixed).
4. Compliance (founder, Oct 1: "we will be compliance-ready, it shows we know their industry"):
   "Built Compliance-Ready" names HIPAA, PIPEDA, PHIPA, and advertising rules, then states the concrete
   practices behind it (no health info in open forms or email, secure intake through practice software,
   privacy policy and consent language before launch). The FAQ answer adds that the practice stays
   responsible for its own compliance. That keeps the claim honest: we set the site up to support
   compliance, we don't certify it. Draft wording was "built into the site from day one".
5. Website setup (founder, Oct 1): renamed from "Ready-Made Practice Website" (it isn't a fixed
   ready-made site). The demo shows 2 to 4 pages; after approval Fadeaway builds out the full page set
   from its internal wellness library (all pages, copy, SEO and AEO ready). Fadeaway writes the copy.
   Live within 2 weeks of demo approval (custom builds vary). Hosting included while on a plan; hosting
   is a deliberate retention hook. Heavier customization moves to a custom build, scoped separately.
   Internal ops note, not for the page: demo-based sites run on Astro + Netlify; custom builds usually
   on WordPress on the client's server.
5b. Pricing rebuilt as "What You Pay For, and What You Get" (founder, Oct 1: finalize deliverables,
   what they pay for, what they get, no over-promises). Each offer now has a full "What's included" list
   and a "What you get out of it" line. New "What to Expect, Month by Month" section with typical,
   hedged timelines. Fine print adds "we never guarantee rankings".
6. Answer capsule rewritten (64 words): adds Canada and the US, the practice software point, and the
   free demo. Sub-headline no longer repeats it.
7. New "Specialty and Location Pages" service item and "Clients Search by Problem and Place" insight,
   from the research's content findings.
8. FAQ: cost answer now leads (it's the first question buyers ask on a pricing page) and states fixed
   numbers; new "What if I already have a website?" explains audit vs demo. Old "What if my practice
   needs a new website first?" folded into it.
9. Breadcrumb: Home > Wellness & Counselling (no /solutions hub).
10. URLs use the sitewide trailing slash. Comma splices fixed throughout.

11. Oct 14 (founder): page rebuilt to match Boutique Fitness. No demo anywhere; audit box in the hero;
    insights cut to 3; "Which Practice Fits" became tiles plus a "For Every Practice" strip; "What We Do"
    became "From Search to Booked Client" (3 stages); pricing uses the Foundation / Every Month deliverables
    reworded for health practices; Why cut to 4 with "Clear Pricing"; How It Works hidden; Crane Mountain
    Dental removed from this page; final CTA goes to /contact/.

OPEN ITEMS
- Demo returns after launch (founder, Oct 14); placement to be decided on all three solution pages.
- Revision rounds: confirmed 1 (founder, Oct 1).
- Planned: a low-cost maintenance plan (hosting, uptime, security, reporting only) for clients who
  finish their plan. Not on the page until it's priced and scoped. Until then, hosting is described as
  "included while you're on a plan".
- Med spas: mentioned in one line under Which Practice Fits and in the FAQ, no dedicated card (founder, Oct 1).
- Currency: prices are the same number in USD or CAD, whichever the client pays in; the US is the growth market.
  Schema offers list both (founder, Oct 1). The page shows plain $ amounts.
- /wellness redirect: 301 to /solutions/wellness-counselling/ at launch, not before (the old page is live).
- Demo turnaround time: not promised anywhere yet.
- Results and testimonials: none for this vertical yet.
- One combined page for launch (founder, Oct 1). Separate pages per practice type stay a post-launch idea.
-->

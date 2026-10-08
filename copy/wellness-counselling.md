---
# Wellness & Counselling Solutions page copy: working copy. The founder approves and edits it
# section by section during dev. Build each section only after its copy is confirmed.
# Built from the Claude Doc's Wellness & Counselling Draft tab (rev 18) and the Sept 22-23 wellness
# research, rebuilt as a conversion funnel (founder, Oct 1): bring industry users in, give them
# insights, show why us, show pricing, give next steps, capture them. Change log at the bottom.
page: wellness-counselling
url: /solutions/wellness-counselling/
title: "Fadeaway Creatives | SEO for Therapists & Wellness Practices"
description: "SEO, AEO, and websites for therapists, counsellors, chiropractors, and wellness practices. Get found beyond directory listings. Free custom demo."
canonical: "https://fadeawaycreatives.com/solutions/wellness-counselling/"
og:
  title: "Fadeaway Creatives | SEO for Therapists & Wellness Practices"
  description: "SEO, AEO, and websites for therapists, counsellors, chiropractors, and wellness practices. Get found beyond directory listings. Free custom demo."
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
  software you already use, like Jane App or SimplePractice, and starts with a
  free custom demo.
keywords:
  primary: "seo for therapists"   # 1,600/mo US KD 3; 300/mo Canada KD 1; $10 CPC. Best Canadian buyer-intent term in the project.
  secondary: ["therapist seo", "therapist website design", "chiropractic marketing", "how to get more therapy clients", "private practice marketing", "med spa seo"]
pricing: shown  # One of the three pages that show real numbers (with Boutique Fitness and Sports).
schema:
  - Organization    # sitewide, from the base layout
  - BreadcrumbList  # Home > Wellness & Counselling
  - Service         # Practice Website Setup, Full Audit, Attract Plan, Growth Plan, Custom Website Build. Offers with prices allowed on this page.
  - HowTo           # from How It Works (4 steps)
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
| Meta description | SEO, AEO, and websites for therapists, counsellors, chiropractors, and wellness practices. Get found beyond directory listings. Free custom demo. (145 chars) | Updated, needs approval |
| Canonical | https://fadeawaycreatives.com/solutions/wellness-counselling/ | Set |
| H1 | SEO for Therapists, Built to Fill Your Practice | Set |
| og:title / og:description | Mirror title tag / meta description | Set |
| og:image / twitter:image | /og-default.jpg (a wellness-specific image is optional) | Set (default) |
| Robots meta | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | Set |
| Schema: Organization | Inherited sitewide, no LocalBusiness for Fadeaway itself | Set |
| Schema: Service | Practice Website Setup ($945), Full Audit ($945), Attract Plan ($499/mo), Growth Plan ($999/mo), Custom Website Build (scoped) | Updated, needs approval |
| Schema: HowTo | From How It Works (4 steps) | Updated, needs approval |
| Deliverables | Website setup: full page set, copy by Fadeaway, live within 2 weeks of demo approval, 1 round of revisions before launch (founder, Oct 1) | Set |
| Schema: FAQPage | From the FAQ list, matches visible copy verbatim | Set |
| Schema: BreadcrumbList | Home > Wellness & Counselling (no /solutions hub) | Updated, needs approval |
| Answer capsule | See frontmatter (64 words) | Updated, needs approval |
| Visible FAQ block | 6 questions, 40 to 60 word answers | Updated, needs approval |
| Last updated date | Set at launch | Pending launch |
| Internal links | /demo-request/, /audit/, /services/build/, /services/growth/, /labs/, /contact/. Zero `#` placeholders. | To QA |
| Primary keyword | seo for therapists (1,600/mo US KD 3; 300/mo Canada KD 1; $10 CPC) | Set |
| Secondary keywords | therapist seo, therapist website design, chiropractic marketing, how to get more therapy clients, private practice marketing, med spa seo | Set |
| Pricing display | Real numbers shown (one of the three demo-industry pages) | Set |

## Breadcrumb {#breadcrumb}

Home → Wellness & Counselling

## Hero {#hero}

- Eyebrow: SEO, AEO & Websites for Therapists, Counsellors, Chiropractors & Wellness Practices
- H1: SEO for Therapists, Built to Fill Your Practice
- Sub-headline: Get found by new clients on Google and in AI recommendations, not lost on a directory page with dozens of other providers. See your new website before you spend a dollar.
- Primary CTA: Get Your Free Demo → /demo-request/
- Secondary CTA: Get a Free Audit of Your Current Site → /audit/
- Answer capsule: renders directly under the Hero, from the frontmatter.

## How Clients Find Practices Now {#insights}

(Insight section. Gives the visitor something useful before asking for anything.)

The way new clients find a therapist, counsellor, or chiropractor has changed. Here's what we see across the practices we look at.

### Directories Put You Next to Your Competition
A directory profile puts you on the same page as dozens of other providers, sorted by things you don't control. Your own website and search presence are the one place a potential client sees only you.

### Clients Search by Problem and Place
People rarely search for "a therapist." They search for help with anxiety, couples counselling, back pain, or a sports injury, near where they live or work. Practices with a clear page for each specialty and location get found for those searches.

### AI Assistants Now Recommend Providers
More people ask ChatGPT, Perplexity, or Google's AI Overviews to suggest a provider. Those tools recommend practices whose websites clearly state who they help, where, how to book, and what they accept.

### Booking Has to Be Effortless
Most first visits happen on a phone, often late at night. If booking takes more than a few taps, or sends people to a confusing third-party page, they leave and book somewhere else. Your website should be the one booking new clients at 11pm, long after your front desk has gone home.
<!-- Added Oct 2 (founder): "your website is a 24/7 salesperson" framing. One line per page, worded for this audience. -->

[CTA touchpoint: Want to see how your practice shows up today? Get a Free Audit → /audit/]

## Why Practices Work With Fadeaway {#why}

### Built to Be Found, Not Just Listed
Every site is structured with the content and technical signals search engines need to recommend you directly, not just list you in a directory.

### Ready for AI Search
Schema, clear practice details, and content written the way AI assistants read it, so you're the answer when someone asks for a provider near them.

### Works With Your Practice Software
We build around Jane App, SimplePractice, TherapyNotes, and similar platforms, so booking and intake stay where they already are and your clients get a smoother way in.

### Built Compliance-Ready
We know what health practices have to get right: HIPAA in the US, PIPEDA and PHIPA in Canada, and your college or association's advertising rules. Client health information stays out of website forms and email, intake runs through your secure practice software, and your privacy policy and consent language are in place before launch.

### Founder-Led, With Fixed Pricing
15+ years of experience, hands-on from first call to launch. Every price is on this page, with no hourly billing and no surprises.

## Which Practice Fits {#which-practice-fits}

### Therapists & Counsellors
Private practice or group practice, we help you stop relying on directories alone and build a search presence that brings clients directly to you.

### Chiropractors
Patients search when they're in pain and ready to book. We help you show up first for the searches that matter in your area.

### Physical Therapy
Referrals matter, but so does being found directly by someone searching for relief right now. We build for both.

We also work with med spas and aesthetic practices.

<!-- Founder, Oct 1: mention med spas, don't go hard on them. The full card ("Med Spas & Aesthetic Practices: A different
buying decision. Clients want to trust you and see results before they book a consultation, so we design the site to
earn that trust.") became this one line. Med spas also stay in the last FAQ answer. -->

## What We Do for Your Practice {#services}

### A Website Built Around Your Booking Flow
Connected to the practice software you already use, so booking and intake work the way your clients expect, on any phone.

### Compliance-Ready Setup
Secure booking and intake links instead of open contact forms for health details, a privacy policy and consent language you approve, and no testimonials or claims that break your profession's advertising rules.

### Local SEO and AEO
Structured data, Google Business Profile, local listings, and content built to get you found on Google and recommended by AI assistants.

### Specialty and Location Pages
A clear page for each service you offer and each area you serve, written around the questions clients actually search.

### Content and Reviews
A monthly content calendar and a review generation system that keep new clients finding you and trusting you.

### Reporting and Regular Check-ins
A dashboard tracking your rankings, traffic, and bookings, with a monthly check-in call, or weekly strategy calls on the Growth Plan.

### Need Custom Software Instead
If what you actually need is custom software, automations, or dashboards rather than a website, that's Fadeaway Labs.
[Link: See Fadeaway Labs → /labs/]

<!-- Founder, Oct 1: add a Labs mention. Wording reused from the approved Growth page ("Need Something Else First?"),
shown as a call-out at the end of this section. -->

## What You Pay For, and What You Get {#pricing}

(Rebuilt Oct 7, founder direction: two compact plan cards, expandable to the full list, each with a button to /contact/. Button labels and the setup line are DRAFT by Claude, needs approval.)

Fixed prices, complete deliverable lists, and honest expectations.

### Attract Plan: $499 a month
For practices that want steady, compounding visibility.

**What's included:**
- Ongoing technical SEO and site health monitoring
- Structured data and AEO signals kept current
- Local SEO and Google Business Profile management
- Booking and practice software integration and management
- A monthly content calendar
- A review generation system, set up within your profession's rules
- A monthly reporting dashboard
- A monthly check-in call

**What you get out of it:** a practice that's easier to find on Google Maps, in local search, and in AI answers month over month, more reviews, and a clear monthly view of rankings, traffic, and bookings.

### Growth Plan: $999 a month
For practices ready to grow faster on more than one channel.

**What's included:**
- Everything in the Attract Plan
- Paid ads management across Google and Meta
- Lead generation campaigns
- Email marketing campaigns
- AI search visibility tracking
- An expanded dashboard combining paid and organic results
- Weekly strategy calls

**What you get out of it:** new client inquiries from paid campaigns while your search visibility builds underneath, plus weekly strategy calls so spend goes to what's actually filling your calendar.

Card buttons: Start with the Attract Plan → /contact/ · Start with the Growth Plan → /contact/

Setup line (under the cards): Every plan starts with a one-time $945 setup: a new website built from your demo, or a Full Audit if you're keeping your current site.

<!-- Removed from the page Oct 7 (founder): the Website Setup and Full Audit cards, the fine print, the custom-build fork and the closing button. Kept for reuse in FAQ/contact:

### Practice Website Setup: $945 one time
For practices that want a professional site live fast. Your free demo shows you 2 to 4 pages first. Once you approve it, we build out the rest of your site from our wellness practice library and launch it.

**What's included:**
- A complete practice website: the pages from your demo, plus the rest your practice needs, like services and specialties, about, booking and contact, locations, and FAQ
- All website copy written for you, SEO and AEO ready from day one
- Your branding: logo, colours, photos, and your practice details
- Booking and intake connected to your practice software, like Jane App or SimplePractice
- Built mobile-first, fast, and secure
- Compliance-ready setup: no health information in open forms, privacy policy and consent language in place
- On-page SEO, structured data, and AEO basics set up at launch
- Google Analytics and Search Console set up, with booking clicks tracked
- Hosting included while you're on a plan
- 1 round of revisions before launch

**What you get out of it:** a professional, fast website live within 2 weeks of approving your demo, written and structured to rank, ready to be recommended by AI tools, and set up to turn visitors into booked appointments. Paired with an Attract or Growth Plan.

### Full Audit: $945 one time
For practices keeping their current site.

**What's included:**
- A full website and account review
- Keyword research for your specialties and area
- An in-depth AEO readiness check: how ChatGPT, Perplexity, and Google's AI Overviews see your practice
- A compliance check of your site's forms, privacy policy, and claims
- A content strategy foundation
- Quick wins identified and ready to act on
- A clear 3 to 6 month action plan

**What you get out of it:** a clear, prioritized picture of what's holding your practice back and exactly what to fix first. If you move ahead with a new website instead, the fee is credited toward it.

Fine print (small type, under the plan cards): Plans run on a 6-month minimum. Ad spend is paid directly by you to Google and Meta. Results depend on your market, competition, and starting point; we never guarantee rankings.

### Need More Than the Website Setup?
Multi-location clinics, heavier customization, or a custom-designed site are scoped as a custom build and quoted at a fixed price before we start.
[Link: See Build Services → /services/build/]

[CTA touchpoint: Get Your Free Demo → /demo-request/]
-->

## Not Sure Yet? Request Your Demo {#demo}

(Rewritten Oct 7, founder direction; copy DRAFT by Claude, needs approval. Moved below pricing; no "free" wording.)

We know wellness practices well, so your demo starts from what already works. We build 4 pages made for your practice, in your branding, ready in 2 business days.


[CTA: Request Your Demo → /demo-request/]
Already have a website you want to keep? [Link: Get a free audit instead → /audit/]

## What to Expect, Month by Month {#what-to-expect}

Typical timelines from industry best practice, not promises. Every market is different, and your dashboard shows the real numbers as they happen.

### First weeks
Your site goes live, or your audit fixes start. Tracking is set up, your Google Business Profile is cleaned up, and compliance basics are in place.

### Months 1 to 2
Technical fixes, specialty and location pages, and the first content go live. Reviews start coming in. On the Growth Plan, paid campaigns can start bringing in inquiries.

### Months 3 to 6
This is where SEO and AEO usually start compounding: better local rankings, more people finding you directly instead of through directories, and more bookings from your own site.

### Month 6
A full picture with real numbers on visibility, inquiries, and bookings, and a clear decision on what's next.

## How It Works {#how-it-works}

(Emits HowTo schema.)

1. **Start free**: Request a free demo of your new website, or a free audit of the one you have.
2. **Choose your path**: A new site with the $945 setup, or a Full Audit if you're keeping your current site. Never both.
3. **Launch**: We build or fix your site, connect it to your practice software, set up your tracking, and host it for you if it's built from your demo.
4. **Grow**: Your Attract or Growth Plan kicks in, with SEO, AEO, content, and reporting tied to new client bookings.

## Results We've Delivered {#real-work}

(Badge above the heading: **Our Work**, founder Oct 7.)

(ProofGrid, tag `wellness-counselling`. Renders nothing until an approved case study exists.)

<!-- No wellness case study yet. Strength Counselling (strengthcounselling.ca) is a portfolio entry,
not a case study (founder, Sept 30). Use copy/templates/case-study-template.md when one is ready. -->

## Testimonials {#testimonials}

(Testimonials block, tag `wellness-counselling`. Renders nothing until real, permission-confirmed quotes exist.)

## Frequently Asked Questions {#faq}

(Render from the `faq` data below. The same data generates the FAQPage JSON-LD.)

```yaml
faq:
  - q: "How much does SEO for therapists cost?"
    a: "A new practice website is a one-time $945 setup, or a Full Audit is $945 if you're keeping your current site. After that, the Attract Plan is $499 a month and the Growth Plan is $999 a month, with everything included listed on this page. Plans run on a 6-month minimum."
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

See your new website before you spend a dollar. Tell us about your practice and we'll build you a free demo.
[CTA: Get Your Free Demo → /demo-request/]
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

OPEN ITEMS
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

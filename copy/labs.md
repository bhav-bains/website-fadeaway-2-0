---
# Fadeaway Labs page copy: working copy. The founder approves and edits it section by section during
# dev. Build each section only after its copy is confirmed.
# Built from the Claude Doc's Fadeaway Labs Draft tab (rev 6, Sept 23, after the Labs Ahrefs pass),
# updated with later decisions (demo now covers three industries, no plan names outside the demo-industry
# pages, homepage Labs cards). Change log at the bottom.
# This is the founder's most personal page ("where my energy flows"). Voice: energetic, builder-first,
# basketball roots. Idea to MVP is the networking hook: fadeawaycreatives.com/labs/#idea-to-mvp
page: labs
url: /labs/
title: "Fadeaway Labs | MVP Development & AI Automation Services"
description: "MVP development services, business process automation, custom web apps, and AI implementation for growing businesses. Scoped and priced up front."
canonical: "https://fadeawaycreatives.com/labs/"
og:
  title: "Fadeaway Labs | MVP Development & AI Automation Services"
  description: "MVP development services, business process automation, custom web apps, and AI implementation for growing businesses. Scoped and priced up front."
  url: "https://fadeawaycreatives.com/labs/"
  type: website
  locale: en_US
  image: /og-default.jpg  # a Labs image (real dashboard or product screenshot) would be better
twitter:
  card: summary_large_image
robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
display_line: "We always cookin'."
h1: "MVP Development Services & AI Automation for Growing Businesses"
answer_capsule: >-
  Fadeaway Labs offers MVP development services, business process automation,
  custom web apps, and AI implementation for small businesses and startups
  across Canada and the US. We take product ideas from architecture to launch,
  automate the manual work between the tools you already use, and set up AI
  tools like Claude and ChatGPT inside your team, with every project scoped and
  priced before we start.
keywords:
  primary: "mvp development services"   # 2,400/mo US KD 0; 200/mo Canada KD 0; $25 CPC; a DR 14 site ranks #2
  secondary: ["business process automation services", "ai implementation services", "custom web app development", "saas mvp development"]
  faq_terms: ["what is mvp in software development", "what is business process automation", "how much does an mvp cost"]
  not_targeted: "Claude/ChatGPT for business (owned by Anthropic/OpenAI), ai workflow automation (KD jumped to 59), AI-for-[vertical] crossovers. n8n automation agency held until confirmed."
pricing: none  # Labs pricing is still an open item. Scoped per project, no numbers.
schema:
  - Organization        # sitewide. Fadeaway Labs is part of Fadeaway Creatives, same entity.
  - BreadcrumbList      # Home > Labs
  - Service             # MVP Development, Business Process Automation, AI Implementation (Claude & ChatGPT setup), Custom Web App Development, AI Chatbots & Lead Qualification, Integrations, Performance Dashboards
  - SoftwareApplication # one entry per public product, only once the founder supplies names and status
  - HowTo               # From Idea to MVP (4 steps)
  - FAQPage             # generated from the faq list below
content_tag: labs        # showcase; products use `labs-product`
last_updated: TODO       # set at launch; update whenever a product or demo changes status
---

<!--
Notes for the build:
- Display line "We always cookin'." is styled brand text, the largest type on the page, NOT the H1 tag.
  It appears again in the final CTA as a bookend.
- Hero background: the basketball "cookin'" idea. Use an ORIGINAL illustrated character or abstract
  motif. No real player's likeness (no Tim Duncan, no James Harden) unless properly licensed.
- Section anchors are used in links and networking follow-ups: #what-we-build, #idea-to-mvp, #ai-native,
  #products, #see-it-working. Keep them exactly.
- Products and the internal tools row come from src/content/portfolio.yaml and render nothing when empty.
- [Link: text → url] and [CTA: text → url] are link specs, not visible brackets.
-->

## Section 0: Meta Data & Keyword Targeting (/labs/)

(Review table. Same values as the frontmatter above; the build reads the frontmatter. Change both together.)

| Field | Value | Status |
|---|---|---|
| Title tag | Fadeaway Labs \| MVP Development & AI Automation Services (56 chars) | Set |
| Meta description | MVP development services, business process automation, custom web apps, and AI implementation for growing businesses. Scoped and priced up front. (145 chars) | Set |
| Canonical | https://fadeawaycreatives.com/labs/ | Set |
| Display line | We always cookin'. | Set |
| H1 | MVP Development Services & AI Automation for Growing Businesses | Set |
| og:image / twitter:image | /og-default.jpg; a Labs screenshot image would be stronger | Set (default) |
| Robots meta | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | Set |
| Schema: Organization | Inherited sitewide; Labs is part of Fadeaway Creatives | Set |
| Schema: Service | MVP Development, Business Process Automation, AI Implementation, Custom Web App Development, AI Chatbots & Lead Qualification, Integrations, Performance Dashboards | Set |
| Schema: SoftwareApplication | One per public product | Pending product details |
| Schema: HowTo | From Idea to MVP (4 steps) | Set |
| Schema: FAQPage | From the FAQ list, matches visible copy verbatim | Set |
| Schema: BreadcrumbList | Home > Labs | Set |
| Answer capsule | See frontmatter | Updated, needs approval (adds Canada and the US) |
| Visible FAQ block | 6 questions, 40 to 60 word answers | Set |
| Last updated date | Set at launch; update when a product or demo changes status | Pending launch |
| Internal links | /labs/start/ (every CTA, founder Oct 4), /portfolio/, /services/build/, /services/growth/, all 4 Solutions pages. Anchors #what-we-build, #idea-to-mvp, #ai-native, #products, #see-it-working are real sections | To QA |
| Primary keyword | mvp development services (2,400/mo US KD 0; 200/mo Canada KD 0; $25 CPC) | Set |
| Secondary keywords | business process automation services, ai implementation services, custom web app development, saas mvp development | Set |
| Pricing display | None. Every project scoped and quoted | Set |

## Breadcrumb {#breadcrumb}

Home → Labs

## Hero {#hero}

- Display line (bold, largest type on the page, above the H1): **We always cookin'.**
- Eyebrow: Fadeaway Labs: MVP Development, Automation, Custom Apps & AI Setup
- H1: MVP Development Services & AI Automation for Growing Businesses
- Sub-headline: Labs is where we build for the love of building. MVPs taken from idea to launch, automations that take the manual work off your plate, custom apps and dashboards shaped around how you actually work, and AI tools like Claude and ChatGPT set up properly inside your business.
- Primary CTA: What We Build → #what-we-build
- Secondary CTA: See Idea to Live Product Journey → #idea-to-mvp
- Answer capsule: renders directly under the Hero, from the frontmatter (the wide intro of What We Build).

## What We Build {#what-we-build}

### From Idea to MVP
Got a product idea? We take it from architecture to launch: a working first version real users can try, with a roadmap for what comes next.

### Business Process Automation
A lead comes in, gets qualified, lands in your CRM, and receives a follow-up, without anyone copying and pasting. We map your manual steps and automate every one that doesn't need a human, with AI handling the sorting, summaries, and follow-ups.

### AI Chatbots & Lead Qualification
Custom AI assistants trained on your business that answer questions, qualify leads around the clock, and hand warm prospects to your team, so nobody goes cold overnight.

### Custom Web Apps & Client Portals
Client portals, booking tools, and internal apps built around your actual workflow, for the jobs off-the-shelf software gets almost right but not quite.

### Integrations That Keep Your Tools
CRM, email, booking, payments, and point of sale, connected so data flows between them automatically. You keep the software you know; it just finally talks to itself.

### Performance Dashboards
Rankings, bookings, leads, and revenue in one live view, so you can see what's working at a glance instead of stitching reports together every month.

[CTA touchpoint: Got an idea, or a process that eats your week? Let's Discuss Your Idea → /labs/start/ · Tell Us What You'd Automate → /labs/start/]

## Go AI-Native {#ai-native}

Most businesses already pay for ChatGPT or Claude. Few have set them up to actually know the business. You don't need to pick the right tool first: we pick it, set it up, and wire it into what you already use. That's what AI implementation should mean: AI built into how your team works, not another tab someone opens now and then.

### Claude & ChatGPT, Set Up for Your Business
Team workspaces configured with your brand voice, your processes, and your documents, so every answer starts from how your business actually runs.

### Connected to Your Tools
Linked to your shared drive, CRM, and project tools, so AI can read the context it needs and hand work back where your team already looks.

### Repeatable Workflows, Not One-Off Prompts
Your recurring tasks, like proposals, reports, follow-ups, and audits, turned into saved workflows anyone on the team can run the same way every time.

### Guardrails & Team Training
Clear rules on what data goes in and who can access what, plus hands-on training so your team uses AI with confidence, not guesswork.

Proof line: We run Fadeaway this way. Our own planning, research, and content workflows run on the same kind of setup we build for you.

[CTA: Get Your Team AI-Ready → /labs/start/]

## From Labs to Live Users {#products}

(Cards from src/content/portfolio.yaml: every `kind: labs` entry without the `internal` tag, 3 across on desktop,
each with a status badge: Alpha, Beta, or Live. No intro line. Renders nothing when none are visible. Products we
own or co-founded also get a SoftwareApplication schema entry. Oct 4: JabJab MMA, Anvido, Nadu Gifhorn.)

[Link: See the Full Portfolio → /portfolio/]  <!-- Proposed by Claude Oct 4, needs approval -->

## Internal Tools {#see-it-working}

(No visible heading (founder, Oct 4). Cards from src/content/portfolio.yaml tagged `internal`: our demo sites and
internal tools, with an "Internal" badge and no link yet. Oct 4: Sports Academy Demo Website, Yoga Studio Demo
Website, Wellness Practice Demo Website, Fadeaway Leads CRM. Screenshots beat line art when available.)

## From Idea to MVP: How a Labs Project Works {#idea-to-mvp}

(Emits HowTo schema. This anchor is the networking follow-up link.)

1. **Discovery and Architecture**: We start by mapping how your business actually runs today, the tools, the handoffs, and where time disappears, then design the architecture before anything gets built.
2. **Scope and Roadmap**: You get a written scope, the features your first version really needs, a fixed price for that scope, and a roadmap for what comes after.
3. **Build and Test**: We build in focused stages and test with real data along the way, so you see working pieces early instead of waiting for one big reveal.
4. **Launch and Keep Improving**: We launch, watch how it performs with real users, and refine from there. Your automations and apps keep getting better as your business grows.

[CTA: Let's Build Your MVP → /labs/start/]

## Works With Everything Else We Do {#works-with}

Labs isn't a separate world. It plugs straight into the rest of Fadeaway.

### Your Website
Lead routing, booking automations, and client portals built right into the site we design for you.
[Link: Build Services → /services/build/]

### Your Growth
The dashboards and tracking behind our growth work, showing which searches turn into real customers.
[Link: Growth Services → /services/growth/]

### Your Industry
Industry-specific automations for e-commerce stores, wellness practices, boutique studios, and sports programs.
[Links: E-commerce → /solutions/ecommerce/ · Wellness & Counselling → /solutions/wellness-counselling/ · Boutique Fitness → /solutions/boutique-fitness/ · Sports Academies → /solutions/sports/]

## Frequently Asked Questions {#faq}

(Render from the `faq` data below. The same data generates the FAQPage JSON-LD.)

```yaml
faq:
  - q: "What is an MVP in software development?"
    a: "An MVP, or minimum viable product, is the simplest working version of a product that real users can try. It includes only the core features needed to test whether the idea solves a real problem, so you learn from actual users before paying for everything else. We build MVPs from architecture to launch."
  - q: "Do I need to replace my current software?"
    a: "No. We build around the CRM, booking system, email platform, and payment tools you already run. Automations and custom apps plug into what you have, so your team keeps the systems it knows and you skip the cost and disruption of switching everything at once."
  - q: "How much does an MVP cost?"
    a: "It depends on what your first version needs to do. After a discovery call, you get a written scope, the exact features included, and a fixed price for that scope, with no hourly billing. A simple internal tool and a full SaaS product are very different projects, so we quote each one on what it actually takes."
  - q: "What is business process automation?"
    a: "Business process automation uses software to handle the repetitive steps in how your business runs, like moving leads into your CRM, sending follow-ups, creating invoices, or updating reports. With AI added, it can also sort, summarize, and qualify information. Your team keeps the decisions that need a person, and the busywork runs on its own."
  - q: "Can you set up Claude or ChatGPT for my team?"
    a: "Yes. We configure Claude or ChatGPT workspaces around your business, connect them to the tools your team already uses, and turn recurring tasks into reusable workflows anyone can run. Then we train your team and set clear rules on what data goes in, so AI becomes part of daily work, even on a small team."
  - q: "Do you work with businesses outside Canada?"
    a: "Yes. Fadeaway Labs works with small businesses and startups across Canada and the United States. Everything we build runs in the cloud, so discovery calls, builds, and launches all happen remotely, wherever your team is based, with the same scope, pricing, and process for every client."
```

## From the Lab {#blog}

(BlogCards block, tag `labs`. Renders nothing until /articles/ exists and has real posts.)

Notes from the workshop: what we're building, what we're learning, and what's worth automating.
[CTA: View All Resources → /articles/]

<!-- Candidates (not yet keyword-checked): "What Is an MVP? A Plain-English Guide for Founders", a business
process automation starter guide, build logs and product updates (freshness signals). -->

## Got a Process You'd Love to Never Do Again? {#cta}

Tell us about it. We'll map what can be automated, what's worth building, and what it would take.

**We always cookin'.**

[CTA: Let's Build It → /labs/start/]

<!--
CHANGE LOG vs the Claude Doc draft (rev 6, Sept 23). Originals stay in the Doc.
1. Hero CTAs now lead with MVPs (the primary keyword and the founder's networking hook). Old primary:
   "Tell Us What You'd Automate → /contact" (kept as the What We Build touchpoint). Old secondary:
   "See What We're Building → #products" (products render nothing until supplied, so the link could
   land on an empty spot). New: "Tell Us What You're Building → /contact/" and "See How an MVP Comes
   Together → #idea-to-mvp".
2. "Business Process Automation, Powered by AI" heading shortened to "Business Process Automation" to
   match the homepage Labs card; "with AI handling the sorting, summaries, and follow-ups" moved into
   the copy (homepage wording).
3. See It Working: the only card was "Boutique Fitness Demo". Demos now cover fitness, wellness, and
   sports (founder, Sept 23 evening), so it's "Industry Demo Websites" for all three.
4. Works With Everything Else: "behind every Attract and Growth Plan" became "behind our growth work".
   Plan names now appear only on the three demo-industry pages (founder, Oct 1).
5. New CTA at the end of From Idea to MVP ("Let's Build Your MVP"), matching the homepage Labs CTA.
6. Answer capsule adds "across Canada and the US" (entity consistency with every other page).
7. Dev note on the Hero background: original illustration only, no real player likeness unless licensed.
8. Comma splices fixed ("to launch: a working first version", "AI implementation should mean: AI
   built into", "You keep the software you know; it just"). URLs use the trailing slash.
   Internal AEO/SEO check lines from the Doc are not page copy and are left out.

9. Founder, Oct 4: removed Why Labs Exists (the answer capsule moves to the What We Build intro; no "24/7
   salesperson" line on Labs, founder Oct 4), How Labs Pricing Works (covered by the FAQ "How much does an MVP
   cost?") and the Industry Demo Websites call-out. Hero CTAs: "What We Build → #what-we-build" and "See Idea to
   Live Product Journey → #idea-to-mvp" (plain words instead of "MVP"). The From Idea to MVP card loses its link.
   What We Build CTA adds "Let's Discuss Your Idea". "Our Products" became "From Labs to Live Users" (no intro,
   adds Nadu Gifhorn, 3 across). "See It Working" heading removed; demo sites and internal tools show unlinked
   with an "Internal" badge. "Our product" / "Co-founded" removed from the card industry lines.

OPEN ITEMS (founder)
- Founder quote: one or two lines in your own words (was planned for Why Labs Exists).
- Products: screenshots for the cards.
- Internal tools: screenshots or screen recordings; links once the demos are live.
- Proof line in Go AI-Native ("We run Fadeaway this way"): confirm the wording before launch.
- n8n: confirm whether Fadeaway builds on n8n before targeting "n8n automation agency" (350/mo KD 0).
- Labs pricing: still open in Offer & Pricing. The page stays number-free.
- Labs intake page /labs/start/ (copy/labs-start.md, Oct 4): every Labs CTA points there.
-->

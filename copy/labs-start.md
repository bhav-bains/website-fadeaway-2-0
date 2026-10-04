---
# Labs intake page (/labs/start/) + success page (/labs/start/success/).
# Drafted by Claude, Oct 4 2026, at the founder's request ("build the new page for labs intake"). Founder to approve.
# Replaces /contact/ as the destination for every Labs page CTA. Build from this file exactly; flag anything that
# reads wrong instead of rewriting it.
# Plain words over jargon: "idea to a live product" leads, "MVP" stays in the title/H1 for search.
page: labs-start
url: /labs/start/
title: "Start a Project | Fadeaway Labs MVP & AI Automation"
description: "Start a Fadeaway Labs project: share your product idea, the process you want automated, or the AI setup your team needs. Scoped and priced before we start."
canonical: "https://fadeawaycreatives.com/labs/start/"
og:
  type: website
  image: /og-default.jpg
robots: "index, follow"   # the success page is noindex and out of the sitemap
h1: "Start Your MVP, Automation or AI Project"
answer_capsule: >-
  Fadeaway Labs takes product ideas from idea to a live product, automates the
  manual work between your tools, and sets up AI tools like Claude and ChatGPT
  for businesses across Canada and the US. Share a few details about your
  project here. We reply within one business day to book a discovery call, then
  send a written scope with a fixed price before any work starts.
keywords:
  primary: "mvp development services"   # shared with /labs/; this page is the conversion step, /labs/ is the ranking page
  secondary: ["start an mvp project", "business process automation consultation", "ai implementation consultation"]
schema:
  - Organization     # sitewide
  - BreadcrumbList   # Home > Labs > Start a Project
  - HowTo            # from What Happens Next (3 steps)
  - FAQPage          # from the faq list
faq:
  - q: "What happens after I send my project details?"
    a: "We read every request ourselves and reply within one business day to book a discovery call. On the call, we map how things run today and what your first version really needs. Then you get a written scope, a fixed price for that scope, and a roadmap, before any work starts."
  - q: "Do I need a technical plan before reaching out?"
    a: "No. Many Labs projects start as a rough idea or a process that eats someone's week. Tell us the problem in plain words, and we work out the architecture, the right tools, and what your first version needs. If you already have specs, designs, or examples, share them too."
  - q: "What kinds of projects does Fadeaway Labs take on?"
    a: "Product ideas taken to a working first version, business process automation, AI chatbots and lead qualification, custom web apps and client portals, integrations between your tools, performance dashboards, and Claude or ChatGPT setup for teams. If it's software that makes running a business easier, tell us about it."
---

<!--
Page job: turn Labs visitors into qualified project conversations. Keep the form short; the select fields do the
qualifying so the discovery call starts with context. No prices (Labs pricing stays number-free, copy/labs.md).
Response promise matches /contact/: "within one business day".
Word counts: answer capsule 66 (40 to 80). FAQ answers 51 / 49 / 48 (40 to 60).
-->

## Section 0: Meta Data & Keyword Targeting (/labs/start/)

| Field | Value | Status |
|---|---|---|
| Title tag | Start a Project \| Fadeaway Labs MVP & AI Automation (51 chars) | Needs approval |
| Meta description | Start a Fadeaway Labs project: share your product idea, the process you want automated, or the AI setup your team needs. Scoped and priced before we start. (155 chars) | Needs approval |
| Canonical | https://fadeawaycreatives.com/labs/start/ | Set |
| Robots | index, follow (the success page is noindex) | Set |
| Open Graph | type website, image /og-default.jpg, title + description as above | Set |
| H1 | Start Your MVP, Automation or AI Project | Needs approval |
| Answer capsule | See frontmatter (66 words) | Needs approval |
| Schema | Organization (sitewide), BreadcrumbList, HowTo, FAQPage | Set |
| Dates | `dateModified` in the WebPage JSON-LD and sitemap `lastmod`, from git (route file, `src/data/pages/labs-start.ts`, this file) | Set |
| Internal links | /labs/, /portfolio/, /case-studies/ (+ the booking link, external) | To QA |

## Breadcrumb {#breadcrumb}

Home → Labs → Start a Project

## Hero {#hero}

- Eyebrow: Fadeaway Labs: Start a Project
- H1: Start Your MVP, Automation or AI Project
- Sub-headline: Tell us what you're building, or what you'd love to stop doing by hand. A few details now mean our first call starts with real ideas, not a blank page.
- No CTA buttons in the Hero. The form sits beside it on desktop and directly below it on mobile (same layout as /demo-request/ and /audit/).
- Answer capsule: renders as real text directly under the Hero (the intro of What Happens Next).

## Project Form {#form}

Form: Netlify Forms, name `labs-intake`, honeypot `bot-field`, hidden `form-name`, posts to /labs/start/success/.

| Label | Field name | Type | Required |
|---|---|---|---|
| Your name | name | text | Yes |
| Email | email | email | Yes |
| Company or project name (if you have one) | company | text | No |
| Current website (if you have one) | website | url | No |
| What do you want to build? | project[] | checkboxes (pick any, shown as pills) | Yes, at least one |
| Where are you today? | stage | radios (pick one, shown as pills) | Yes |
| Tell us about it | message | textarea | No |

- "What do you want to build?" hint under the label: Pick all that apply. Message when none is picked: Please pick at least one option.
- "What do you want to build?" options: A new product or app, from idea to launch · Automating a business process · An AI chatbot or lead qualification · A custom web app or client portal · Connecting the tools I already use · A performance dashboard · Setting up Claude or ChatGPT for my team · Not sure yet
- "Where are you today?" options: Just an idea · Planned out and ready to build · Something exists and needs work · Doing it by hand today
- "Tell us about it" placeholder: What it should do, who will use it, and the tools you already run on...
- Submit button: Send My Project Details
- Note under the button: We reply within one business day. We'll only use your details to talk about your project.
- Line under the form: Prefer to talk it through? [Link: Book a Call ↗ → Google Calendar booking page, new tab]
  (founder, Oct 4: no link away to /contact/ on this conversion page; the booking link gives the option to book a call
  instead of filling in the form. URL lives in `siteConfig.bookingUrl` in src/data/site.ts so every page reuses it.
  Wording: Claude draft, needs approval.)

## What Happens Next {#how-it-works}

(Emits HowTo schema. Answer capsule is the wide intro.)

1. **Tell us about your project**: A few details about what you want to build or automate. It takes about two minutes.
2. **Discovery call**: We talk through how your business runs today, the tools, the handoffs, and where time disappears.
3. **Written scope and fixed price**: You get the features your first version really needs, a fixed price for that scope, and a roadmap, before any work starts.

## Frequently Asked Questions {#faq}

From frontmatter `faq` (3 questions). Visible text and FAQPage JSON-LD from the same data.

## CTA {#cta}

- Heading: Want to see what we've built first?
- Line: Our own products, live with real users, and the tools we build for our own work.
- Button: Explore Fadeaway Labs → /labs/

---

# Success page (/labs/start/success/, noindex)

- Title tag: Project Details Received | Fadeaway Labs
- Meta description: Your project details are in.
- H1: Your Project Details Are In
- Text: Thanks for telling us what you're building. We'll read through it and reply within one business day to set up a discovery call.
- Links heading: While you wait, see what we've built.
- Links: Fadeaway Labs → /labs/ · Portfolio → /portfolio/ · Case Studies → /case-studies/
- Button: Back to Home → /

## Where this page is linked

Every Labs page CTA points here instead of /contact/: What We Build (Let's Discuss Your Idea, Tell Us What You'd
Automate), Go AI-Native (Get Your Team AI-Ready), From Idea to MVP (Let's Build Your MVP) and the closing CTA
(Let's Build It).

<!--
OPEN ITEMS
- Copy approval: everything above is a Claude draft.
- Budget question: left out on purpose (Labs pricing is number-free). Add a budget select only if the founder wants
  ranges on the form.
- Where `labs-intake` submissions go (Netlify notification email, same open item as the other forms).
- Homepage Labs CTA and the /contact/ "Custom software, automation, or AI" option could also point here. Founder to decide.
-->

---
# Demo Request page + success page: working copy. The founder approves and edits it section by
# section during dev. Build each section only after its copy is confirmed.
# Replaces the parked src/pages/_inactive/demo-request.astro and demo-success.astro (Dec 2025).
# Those files import the old Layout and React components, so rebuild on BaseLayout and the current
# blocks rather than moving them back as-is.
page: demo-request
url: /demo-request
title: "Fadeaway Creatives | Free Website Demo for Your Business"
description: "Fitness studios, wellness practices, and sports academies: tell us about your business and we'll build you a free custom website demo. No obligation."
canonical: "https://fadeawaycreatives.com/demo-request"
og:
  image: /og-default.png
robots: "index, follow"
h1: "Get a Free Custom Website Demo"
answer_capsule: >-
  Fadeaway Creatives builds free custom website demos for boutique fitness
  studios, wellness and counselling practices, and sports academies across
  Canada and the US. Tell us about your business, and we build a 2 to 4 page
  demo of your new site, based on what already works in your industry, then
  send you a private link to review it. There's no cost and no obligation.
schema:
  - Organization  # sitewide
  - BreadcrumbList  # Home > Free Demo
  - HowTo         # from How It Works (3 steps)
  - FAQPage       # from the faq list
last_updated: TODO
---

<!--
Funnel (founder, Sept 23): visitor requests a demo with a few business details → Fadeaway builds
a 2 to 4 page demo from that industry's demo template → sends the link plus supporting docs →
follow-up. Goal of this page: capture the contact info. Keep the form short.
E-commerce has no demo (by decision). E-commerce visitors go to /contact.
-->

## Section 0: Meta Data (/demo-request)

| Field | Value | Status |
|---|---|---|
| Title tag | Fadeaway Creatives \| Free Website Demo for Your Business (56 chars) | Set (approved Oct 1) |
| Meta description | Fitness studios, wellness practices, and sports academies: tell us about your business and we'll build you a free custom website demo. No obligation. (149 chars) | Set (approved Oct 1) |
| Canonical | https://fadeawaycreatives.com/demo-request | Set |
| H1 | Get a Free Custom Website Demo | Set (approved Oct 1) |
| og:image | /og-default.png (sitewide default) | Set |
| Robots | index, follow (the success page is noindex) | Set |
| Schema | Organization (sitewide), BreadcrumbList, HowTo, FAQPage | Set |
| Answer capsule | See frontmatter (64 words) | Set (approved Oct 1) |
| Internal links | /solutions/boutique-fitness, /solutions/wellness-counselling, /solutions/sports, /contact | To QA |

## Breadcrumb {#breadcrumb}

Home → Free Demo

## Hero {#hero}

- Eyebrow: Free Demo Build
- H1: Get a Free Custom Website Demo
- Sub-headline: For boutique fitness studios, wellness practices, and sports academies. See your new website before you commit to anything.
- No CTA buttons in the Hero. The form sits directly beside it on desktop and directly below it on mobile.
- Answer capsule: renders as real text directly under the Hero.

## Demo Request Form {#form}

Form: Netlify Forms, name `demo-request`, honeypot `bot-field`, hidden `form-name`, posts to /demo-success.

| Label | Field name | Type | Required |
|---|---|---|---|
| Your name | name | text | Yes |
| Email | email | email | Yes |
| Business name | business | text | Yes |
| Your industry | industry | select: Boutique fitness studio · Wellness or counselling practice · Sports academy, club, or camp | Yes |
| Current website (if you have one) | website | url | No |
| What do you need most? | needs | textarea, placeholder: "More bookings, a site that works on phones, better Google visibility..." | No |

- Submit button: **Build My Free Demo**
- Line under the button: Free, with no obligation. We'll only use your details to send your demo.
- Line under that: Running an online store? [Link: Talk to us about e-commerce → /contact]

## How It Works {#how-it-works}

(Emits HowTo schema.)

1. **Tell us about your business**: A few details about your business and what you need. It takes about a minute.
2. **We build your demo**: A 2 to 4 page demo of your new website, built from what already works in your industry and shaped around your business.
3. **Review it, no pressure**: We send you a private link to your demo and a short overview of what's included. If you love it, we make it your live site.

## Built for Your Industry {#industries}

### Boutique Fitness
For yoga, pilates, spin, and barre studios, built to keep classes full and work with the booking software you already use, like Mindbody or Momence.
[Link: See how we help boutique fitness studios → /solutions/boutique-fitness]

### Wellness & Counselling
For therapists, counsellors, chiropractors, and wellness practices, built to fill your caseload and work with practice software like Jane App or SimplePractice.
[Link: See how we help wellness & counselling practices → /solutions/wellness-counselling]

### Sports Academies
For clubs, academies, combat sports gyms, and camps, built so parents can find you and sign up, connected to registration software like LeagueApps or TeamSnap.
[Link: See how we help sports programs → /solutions/sports]

## Frequently Asked Questions {#faq}

```yaml
faq:
  - q: "Is the website demo really free?"
    a: "Yes. The demo costs nothing and comes with no obligation. We build it so you can see exactly what your new website would look like before you spend anything. If you love it and want it live, we walk you through the setup and plan options for your industry, and you decide from there."
  - q: "What's included in the free demo?"
    a: "A 2 to 4 page demo of your new website, built from what already works in your industry and shaped around your business, including your homepage and the pages that matter most for bookings or sign-ups. You get a private link to review it, plus a short overview of what's included."
  - q: "Will the demo work with my booking or registration software?"
    a: "Yes. Every demo is built around the software you already run on, like Mindbody, Momence, Jane App, SimplePractice, LeagueApps, or TeamSnap. Your team keeps its tools, and your customers get a smoother way to book, register, or sign up from your new website."
```

## Final CTA {#cta}

Not a fitness, wellness, or sports business? Tell us what you're working on.
[CTA: Contact Us → /contact]

---

# Success page (/demo-success)

- robots: noindex, nofollow (not in the sitemap)
- title: "Demo Requested | Fadeaway Creatives"
- H1: Your Demo Request Is In
- Copy: Thanks for telling us about your business. We're starting on your custom demo now, and you'll get a personal email from us with a private link to review it and a short overview of what's included.
- Copy: While you wait, see how we work with businesses like yours.
- Links: Boutique Fitness → /solutions/boutique-fitness · Wellness & Counselling → /solutions/wellness-counselling · Sports Academies → /solutions/sports
- Button: Back to Home → /

<!--
DECISION (founder delegated, Sept 30): bring the demo page back as a working page.
It's the capture step of the demo funnel, and the Build page, homepage, and the three industry
pages all point to it. Rebuilt rather than restored: the old files use the removed Layout and React
components, mixed "2-3 days" and "48 hours" promises, had an em dash, and only asked for a combined
"Business Name / Website" field.

CHANGES vs the old page:
- Fields now match the founder's funnel (name, email, business name, website, needs) plus an
  industry select so each request goes to the right industry demo template.
- Old turnaround promises removed ("video walkthrough in 2-3 days", "within 48 hours"). No delivery
  time has been set. Add one once operations confirm it.
- Old success page ("We're Starting Your Engines!", rocket emoji) replaced.

OPEN ITEMS
- Demo turnaround time: add a promise to the success page and FAQ once operations sets it.
- Where submissions go: Netlify Forms notifications to hello@fadeawaycreatives.com, or into the
  ClickUp pipeline (ties to automation backlog A2, the demo request pipeline).
- Pricing after the demo ($945 setup plus a 6-month Attract or Growth Plan) is shown on the
  industry pages, not here. The FAQ points there in words only.
- /contact meta description is still old copy ("sports or wellness brand... the digital engine your
  academy deserves"). Separate fix.
-->

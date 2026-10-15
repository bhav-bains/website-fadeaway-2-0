---
# Free Audit page + success page: working copy. Drafted by Claude from the founder's brief, approved Oct 1. Also holds the audit CTA block used on the Build page.
#
# Founder brief (Oct 1): the free (Instant) Audit checks performance, site structure, SEO and AEO readiness,
# and on-page copy. High level, useful for growth and brand uplift. A workflow will make it near instant and
# output a templated report.
page: audit
url: /audit
title: "Free Website Audit | Fadeaway Creatives"
description: "A free audit of your website's SEO and AEO readiness, performance, site structure, and on-page copy, in a report."
canonical: "https://fadeawaycreatives.com/audit"
og:
  image: /og-default.jpg
robots: "index, follow"
h1: "Get a Free Business Audit"
answer_capsule: >-
  The Fadeaway Creatives Instant Audit is a free review of your website for
  businesses across Canada and the US. It checks your SEO and AEO readiness,
  performance, site structure, and on-page copy, and whether your tracking is
  set up, then sends the findings in a report, with clear priorities for what to fix first.
  There's no cost and no obligation.
schema:
  - Organization  # sitewide
  - BreadcrumbList  # Home > Free Audit
  - HowTo         # from How It Works (3 steps)
  - FAQPage       # from the faq list
last_updated: TODO
---

<!--
Funnel: visitor enters their site URL (on this page, or in the audit CTA on another page, which carries the
URL here) → adds name, email, business → we run the audit workflow → report by email
→ follow-up. Goal: capture the lead with a useful, low-commitment offer. Keep the form short.
Visitors without a site (new custom builds) are pointed to Let's Connect → /contact.
SEO + AEO is listed first wherever the five checks appear (sitewide positioning rule).
-->

## Section 0: Meta Data (/audit)

| Field | Value | Status |
|---|---|---|
| Title tag | Free Website Audit \| Fadeaway Creatives (39 chars) | Set (approved Oct 1) |
| Meta description | A free audit of your website's SEO and AEO readiness, performance, site structure, and on-page copy, in a report. (113 chars) | Set (approved Oct 1) |
| H1 | Get a Free Business Audit | Changed by founder, Oct 14 |
| Answer capsule | See frontmatter (64 words; tracking added Oct 14) | Updated, needs approval |
| Robots | index, follow (the success page is noindex) | Set |
| Schema | Organization (sitewide), BreadcrumbList, HowTo, FAQPage | Set |

## Breadcrumb {#breadcrumb}

Home → Free Audit

## Hero {#hero}

- Eyebrow: none (badge removed by founder, Oct 14)
- H1: Get a Free Business Audit
- Sub-headline: See how ready your site is for Google and AI search, how fast it loads, and how well it turns visitors into customers.
- No CTA buttons in the Hero. The form sits beside it on desktop and below it on mobile.
- Answer capsule: renders as the intro of the first section after the Hero.
- Ways to connect (founder, Oct 14): under the sub-headline, the same four cards as the Contact page (Schedule a Call, WhatsApp, Email, Instagram); wording and links live in `copy/contact.md` ("Ways to connect") and `src/data/pages/contact.ts`. No heading or location line here.

## Audit Request Form {#form}

Form: Netlify Forms, name `audit-request`, honeypot `bot-field`, hidden `form-name`, posts to /audit-success.
The website field is pre-filled when the visitor arrives from an audit CTA on another page.

| Label | Field name | Type | Required |
|---|---|---|---|
| Your website | website | url (text input, no https:// needed) | Yes |
| Your name | name | text | Yes |
| Email | email | email | Yes |
| Business name | business | text | Yes |
| What are your current concerns? | issues | checkboxes (pick all that apply): Not enough enquiries or leads · Not showing up on Google · Not showing up in AI search (ChatGPT, Perplexity) · Pages load slowly · Doesn't work well on phones · Visitors leave without getting in touch · Hard to find things on the site · Not sure, just want a check | No |
| Anything else we should know? | concerns | textarea | No |

- Submit button: **Get My Free Audit**
- Line under the button: Free, with no obligation. We'll use your details to send your report and follow up about it. No spam, and you can opt out any time. (Changed Oct 14, founder: the old "only to send your report" line ruled out follow-ups. A newsletter still needs a separate, unticked consent checkbox under CASL; decide after launch.)
- Line under that: Starting from scratch? [Link: Let's Connect → /contact]

## What We Check {#checks}

### SEO & AEO Readiness
Whether Google and AI search tools like ChatGPT and Perplexity can read your site, understand what you offer, and recommend you, plus a snapshot of how AI assistants describe your business today.
(AI snapshot added Oct 14, founder: the audit includes a manual ChatGPT and Perplexity check.)

### Performance
How fast your pages load and how they hold up on phones, where most of your customers are browsing.

### Site Structure
How your pages, navigation, and internal links are organized, and whether visitors and search engines can find what matters.

### On-Page Copy
Whether your headlines, service pages, and calls to action speak to your customers and give them a clear reason to get in touch.

### Tracking
Whether Google Analytics and your other tracking are set up and working, so you can see where your visitors and enquiries come from.
(Added Oct 15, founder: tracking is a fifth check. Wording drafted by Claude, awaiting approval.)

## How It Works {#how-it-works}

(Emits HowTo schema.)

1. **Share your site**: Enter your website and a few details. It takes about a minute.
2. **We run your audit**: We review your SEO and AEO readiness, performance, site structure, on-page copy, and tracking.
3. **Get your report**: You get a report showing what's working, what isn't, and what to fix first, and you can book a call to walk through it.
(Walkthrough line added Oct 14, founder: the report's one next step is a walkthrough call.)

## Frequently Asked Questions {#faq}

```yaml
faq:
  - q: "Is the website audit really free?"
    a: "Yes. The Instant Audit costs nothing and comes with no obligation. You get the full report either way, and it's yours to keep and act on, whether you work with us or not. It covers your SEO and AEO readiness, performance, site structure, and on-page copy."
  - q: "What's the difference between the Instant Audit and the Full Audit?"
    a: "The Instant Audit is a high-level check of the five areas that matter most. The Full Audit is a paid, in-depth review with keyword research and a detailed action plan."
  - q: "What do you need from me?"
    a: "Just your website address and where to send the report. If you tell us what isn't working right now, we'll look at that first. The form also asks for your name and business name. Your report then arrives by email."
```

---

# Audit CTA block (used on other pages)

First placement: Build page, directly after "Start Fresh, Rebuild, or Migrate Without Losing Rankings".
The URL field carries the visitor's site to /audit, where they finish the form.

- Heading: Not Sure What Your Current Site Needs?
- Text: Get a free audit of your SEO and AEO readiness, performance, site structure, and on-page copy.
- Field label: Your website
- Button: Get My Free Audit
- Line under the field: Starting from scratch? [Link: Let's Connect → /contact]

---

# Success page (/audit-success)

- robots: noindex, nofollow (not in the sitemap)
- title: "Audit Requested | Fadeaway Creatives"
- H1: Your Audit Request Is In
- Copy: Thanks for sharing your site. We're running your audit now, and your report will arrive by email.
- Links heading: While you wait, see how we can help.
- Links: Build → /services/build · E-commerce → /solutions/ecommerce
- Button: Back to Home → /

<!--
OPEN ITEMS
- Audit workflow and report template (operations).
- Where submissions go: Netlify Forms notifications or the ClickUp pipeline.
- Add Growth (/services/growth) to the success links once that page is live.
- Every "Get Your Free Audit" CTA sitewide now points here (routes.audit).
-->

---
# Free Audit page + success page: working copy. Drafted by Claude from the founder's brief, approved Oct 1. Also holds the audit CTA block used on the Build page.
#
# Founder brief (Oct 1): the free (Instant) Audit checks performance, site structure, SEO and AEO readiness,
# and on-page copy. High level, useful for growth and brand uplift. A workflow will make it near instant and
# output a branded, templated report. Promise on the site: results within 24 hours.
page: audit
url: /audit
title: "Free Website Audit | Fadeaway Creatives"
description: "A free audit of your website's SEO and AEO readiness, performance, site structure, and on-page copy, in a branded report within 24 hours."
canonical: "https://fadeawaycreatives.com/audit"
og:
  image: /og-default.png
robots: "index, follow"
h1: "Get a Free Website Audit"
answer_capsule: >-
  The Fadeaway Creatives Instant Audit is a free review of your website for
  businesses across Canada and the US. It checks your SEO and AEO readiness,
  performance, site structure, and on-page copy, then sends the findings in a
  branded report within 24 hours, with clear priorities for what to fix first.
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
URL here) → adds name, email, business → we run the audit workflow → branded report by email within 24 hours
→ follow-up. Goal: capture the lead with a useful, low-commitment offer. Keep the form short.
Visitors without a site (new custom builds) are pointed to Get a Quote → /contact.
SEO + AEO is listed first wherever the four checks appear (sitewide positioning rule).
-->

## Section 0: Meta Data (/audit)

| Field | Value | Status |
|---|---|---|
| Title tag | Free Website Audit \| Fadeaway Creatives (39 chars) | Set (approved Oct 1) |
| Meta description | A free audit of your website's SEO and AEO readiness, performance, site structure, and on-page copy, in a branded report within 24 hours. (139 chars) | Set (approved Oct 1) |
| H1 | Get a Free Website Audit | Set (approved Oct 1) |
| Answer capsule | See frontmatter (58 words) | Set (approved Oct 1) |
| Robots | index, follow (the success page is noindex) | Set |
| Schema | Organization (sitewide), BreadcrumbList, HowTo, FAQPage | Set |

## Breadcrumb {#breadcrumb}

Home → Free Audit

## Hero {#hero}

- Eyebrow: Free Instant Audit
- H1: Get a Free Website Audit
- Sub-headline: See how ready your site is for Google and AI search, how fast it loads, and how well it turns visitors into customers. Your branded report arrives within 24 hours.
- No CTA buttons in the Hero. The form sits beside it on desktop and below it on mobile.
- Answer capsule: renders as the intro of the first section after the Hero.

## Audit Request Form {#form}

Form: Netlify Forms, name `audit-request`, honeypot `bot-field`, hidden `form-name`, posts to /audit-success.
The website field is pre-filled when the visitor arrives from an audit CTA on another page.

| Label | Field name | Type | Required |
|---|---|---|---|
| Your website | website | url (text input, no https:// needed) | Yes |
| Your name | name | text | Yes |
| Email | email | email | Yes |
| Business name | business | text | Yes |
| What's not working right now? (optional) | concerns | textarea, placeholder: "Not enough enquiries, slow pages, not showing up on Google..." | No |

- Submit button: **Get My Free Audit**
- Line under the button: Free, with no obligation. We'll only use your details to send your report.
- Line under that: Starting from scratch? [Link: Get a Quote → /contact]

## What We Check {#checks}

### SEO & AEO Readiness
Whether Google and AI search tools like ChatGPT and Perplexity can read your site, understand what you offer, and recommend you.

### Performance
How fast your pages load and how they hold up on phones, where most of your customers are browsing.

### Site Structure
How your pages, navigation, and internal links are organized, and whether visitors and search engines can find what matters.

### On-Page Copy
Whether your headlines, service pages, and calls to action speak to your customers and give them a clear reason to get in touch.

## How It Works {#how-it-works}

(Emits HowTo schema.)

1. **Share your site**: Enter your website and a few details. It takes about a minute.
2. **We run your audit**: We review your SEO and AEO readiness, performance, site structure, and on-page copy.
3. **Get your report**: Within 24 hours, you get a branded report showing what's working, what isn't, and what to fix first.

## Frequently Asked Questions {#faq}

```yaml
faq:
  - q: "Is the website audit really free?"
    a: "Yes. The Instant Audit costs nothing and comes with no obligation. You get the full report either way, and it's yours to keep and act on, whether you work with us or not."
  - q: "What's the difference between the Instant Audit and the Full Audit?"
    a: "The Instant Audit is a high-level check of the four areas that matter most, delivered within 24 hours. The Full Audit is a paid, in-depth review with keyword research and a detailed action plan, and if you move ahead with a build, its fee is credited toward it."
  - q: "What do you need from me?"
    a: "Just your website address and where to send the report. If you tell us what isn't working right now, we'll look at that first."
```

---

# Audit CTA block (used on other pages)

First placement: Build page, directly after "Start Fresh, Rebuild, or Move Without Losing a Thing".
The URL field carries the visitor's site to /audit, where they finish the form.

- Heading: Not Sure What Your Current Site Needs?
- Text: Get a free audit of your SEO and AEO readiness, performance, site structure, and on-page copy. Your report arrives within 24 hours.
- Field label: Your website
- Button: Get My Free Audit
- Line under the field: Starting from scratch? [Link: Get a Quote → /contact]

---

# Success page (/audit-success)

- robots: noindex, nofollow (not in the sitemap)
- title: "Audit Requested | Fadeaway Creatives"
- H1: Your Audit Request Is In
- Copy: Thanks for sharing your site. We're running your audit now, and your branded report will arrive by email within 24 hours.
- Links heading: While you wait, see how we can help.
- Links: Build → /services/build · E-commerce → /solutions/ecommerce
- Button: Back to Home → /

<!--
OPEN ITEMS
- Audit workflow and report template (operations). The 24-hour promise must hold before launch.
- Where submissions go: Netlify Forms notifications or the ClickUp pipeline.
- Add Growth (/services/growth) to the success links once that page is live.
- Every "Get Your Free Audit" CTA sitewide now points here (routes.audit).
-->

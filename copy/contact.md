---
# Contact page + success page: working copy. Drafted by Claude (Oct 1), approved by the founder Oct 2.
# No copy file existed; the old page (Dec 2025) spoke only to "sports or wellness brands".
# Every "Get a Quote", "Book a Call", "Tell Us What You're Building" and "Let's Build It" CTA lands here.
page: contact
url: /contact/
title: "Contact Fadeaway Creatives | Start Your Project"
description: "Tell us about your business and what you need: a new website, SEO and AEO, an e-commerce store, or custom software. We reply within one business day."
canonical: "https://fadeawaycreatives.com/contact/"
og:
  image: /og-default.jpg
robots: "index, follow"
h1: "Contact Fadeaway Creatives"
schema:
  - Organization    # sitewide
  - ContactPage
  - BreadcrumbList  # Home > Contact
last_updated: TODO
---

<!--
Page job: make it easy to reach out from any page, and send people who'd be better served by a free offer
to the audit or the demo. Keep the form short.
Netlify form name stays `website-contact-form` (existing notifications keep working); posts to /contact-success/.
Reply-time promise: "within one business day" (founder, Oct 2). The old page said "less than 24 hours"; the
audit report keeps its own 24-hour promise.
-->

## Section 0: Meta Data (/contact/)

| Field | Value | Status |
|---|---|---|
| Title tag | Contact Fadeaway Creatives \| Start Your Project (47 chars) | Set (approved Oct 2) |
| Meta description | Tell us about your business and what you need: a new website, SEO and AEO, an e-commerce store, or custom software. We reply within one business day. (149 chars) | Set (approved Oct 2) |
| H1 | Contact Fadeaway Creatives | Set (approved Oct 2) |
| Schema | Organization (sitewide), ContactPage, BreadcrumbList | Set |

## Breadcrumb {#breadcrumb}

Home → Contact

## Hero + Form {#hero}

- Eyebrow: Contact
- H1: Contact Fadeaway Creatives
- Sub-headline: Tell us about your business and what you need, whether it's a new website, SEO and AEO, an e-commerce store, or custom software. We'll reply within one business day.
- Under the sub-headline: Email us directly: hello@fadeawaycreatives.com · [Link: Message us on WhatsApp → https://wa.me/17056500328] · Vancouver, BC, working with clients across Canada and the US.
- Social links: Instagram, Facebook, LinkedIn (from the sitewide entity facts)

Form: Netlify Forms, name `website-contact-form`, honeypot `bot-field`, posts to /contact-success/.

| Label | Field name | Type | Required |
|---|---|---|---|
| Your name | name | text | Yes |
| Email | email | email | Yes |
| Business name | business | text | Yes |
| Current website (if you have one) | website | url | No |
| What do you need help with? | interest | select: A new website or redesign · SEO, AEO, or paid growth · An e-commerce store · Custom software, automation, or AI · Not sure yet | Yes |
| Tell us a bit more | message | textarea, placeholder: "What you're working on, what isn't working, and any timing we should know about..." | Yes |

- Submit button: **Send Message**
- Line under the button: We reply within one business day. We'll only use your details to respond.
- Line under that: Want to start free? [Link: Get a free audit → /audit/]

## What Happens Next {#next-steps}

1. **We read your message**: We look at what you've sent, and at your current site if you have one.
2. **We reply within one business day**: With a few questions, or a time for a short call if that makes more sense.
3. **You get a clear plan**: A written scope and a fixed price before any work starts. No hourly billing, no surprises.

## Prefer to Start Free? {#start-free}

### Already Have a Website?
Get a free audit of your SEO and AEO readiness, performance, site structure, and on-page copy, in a branded report within 24 hours.
[Link: Get Your Free Audit → /audit/]

### Fitness Studio, Wellness Practice, or Sports Program?
We'll build you a free custom demo of your new website first, so you see it before you commit.
[Link: Get Your Free Demo → /demo-request/]

---

# Success page (/contact-success/)

- robots: noindex, nofollow (not in the sitemap)
- title: "Message Sent | Fadeaway Creatives"
- H1: Your Message Is In
- Copy: Thanks for reaching out. We've got your details and we'll reply within one business day.
- Links heading: While you wait, take a look around.
- Links: Build → /services/build/ · Growth → /services/growth/ · Fadeaway Labs → /labs/
- Button: Back to Home → /

<!--
OPEN ITEMS
- Reply promise: one business day (confirmed Oct 2).
- WhatsApp: kept public, +1 705 650 0328 (founder, Oct 2).
- Book a Call: About's "Book a Call" lands here. A scheduling link (e.g. Cal.com or Calendly) could replace
  or sit beside the form later.
-->

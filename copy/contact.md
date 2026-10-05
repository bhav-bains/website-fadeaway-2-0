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
display_line: "Your next customer is searching right now."
h1: "Let's Talk About Your Website, SEO or Growth"
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
| Display line | Your next customer is searching right now. | Set (founder, Oct 4) |
| H1 | Let's Talk About Your Website, SEO or Growth | Set (founder, Oct 4; was "Contact Fadeaway Creatives") |
| Schema | Organization (sitewide), ContactPage, BreadcrumbList | Set |

## Breadcrumb {#breadcrumb}

Home → Contact

## Hero + Form {#hero}

- Eyebrow: Contact
- Display line (above the H1, largest type): **Your next customer is searching right now.**
- H1: Let's Talk About Your Website, SEO or Growth
- Sub-headline: Tell us about your business and what you need, whether it's a new website, SEO and AEO, an e-commerce store, or custom software.
  (Founder, Oct 4: "We'll reply within one business day." removed from the sub-headline; the meta description and the
  note under the button keep it.)

### Ways to connect (under the sub-headline, founder Oct 4)

- No heading or intro line (founder, Oct 4). 2 x 2 grid of cards (one column on phones).
- Cards, in this order (each is one link; URLs come from src/data/site.ts, the one place to update contact details):
  1. **Schedule a Call**: Book a time that works for you → booking page (`siteConfig.bookingUrl`, new tab)  <!-- line: Claude draft, needs approval -->
  2. **WhatsApp**: Message on WhatsApp → `siteConfig.whatsapp` (built from `whatsappNumber`, new tab)
  3. **Email**: Contact via Email → mailto:hello@fadeawaycreatives.com (`siteConfig.email`)
  4. **Instagram**: DM on Instagram → https://www.instagram.com/fadeawaycreatives/ (`siteConfig.social.instagram`, new tab)
- No Facebook. Then the location line: Vancouver, BC, working with clients across Canada and the US.

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

(Founder, Oct 4: the What Happens Next and Prefer to Start Free sections are removed. The page is the hero, the
form and the ways to connect.)

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

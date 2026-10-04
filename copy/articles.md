---
# Articles: listing page (/articles/) + article template (/articles/[slug]/).
# Drafted by Claude, Oct 4 2026, at the founder's request. Founder to approve.
# ON HOLD (founder, Oct 4): /articles/ is hidden for launch. The founder writes 3 articles first; the page, template
# and the Resources menu link go live together with them. Not built yet; this file is the spec for then. Build from this file exactly;
# flag anything that reads wrong instead of rewriting it.
# Resources dropdown item "Articles" (founder, Oct 3). Replaces the old /blog/ (see Redirects).
# Every article is real, written or approved by the founder. Never invent an article, a client, a result or a quote.
page: articles
url: /articles/
title: "SEO, AEO & Website Articles | Fadeaway Creatives"
description: "Practical articles on SEO, AEO, websites and growth from Fadeaway Creatives, written for growing businesses across Canada and the US."
canonical: "https://fadeawaycreatives.com/articles/"
og:
  type: website
  image: /og-default.jpg
robots: "index, follow"   # noindex automatically while no article is published (see Empty state)
display_line: "Straight answers. No jargon."
eyebrow: "Articles"
h1: "SEO, AEO and Website Articles"
sub_headline: "Practical guides on getting found in Google and AI answers, building websites that convert, and growing what you've built."
answer_capsule: >
  Fadeaway Creatives articles are practical guides on SEO, answer engine optimization (AEO), websites,
  e-commerce, and growth for businesses across Canada and the US. Each one answers a real question we hear
  from clients, in plain language, with steps you can act on right away. They draw on 15+ years of
  building and growing websites.
keywords:
  primary: "seo and aeo articles"
  secondary: ["answer engine optimization guide", "small business seo tips", "website tips for small business"]
schema:
  - Organization     # sitewide, from the base layout
  - CollectionPage   # dateModified from git; ItemList of every published article, newest first
  - BreadcrumbList   # Home > Articles
  - FAQPage
faq:
  - q: "What topics do your articles cover?"
    a: "We write about what our clients ask us most: SEO and AEO, how to show up in AI answers like ChatGPT and Google's AI Overviews, website builds and redesigns, e-commerce, and growth work like lead generation and campaigns. Every article is written for business owners, not marketers, so you can act on it."
  - q: "Can I use these guides without hiring an agency?"
    a: "Yes. Every article is written so you can do the work yourself, with clear steps and no paywall. Some fixes take an afternoon, others need a developer or more time than you have. If you'd rather hand it off, a free audit shows exactly what your site needs and what to fix first."
  - q: "How do I know what my own website needs first?"
    a: "Start with a free audit. We review your website, SEO and AEO readiness, performance, and local visibility, then send a branded report within 24 hours. It ranks the fixes by impact, so you know what to do first, whether you do it yourself or work with us."
---

<!--
Page job: the knowledge hub. Earns trust with prospects, gives AI tools quotable answers, and links readers to
the right service. Short listing, cards first. One listing page + one article template (same shape as Case Studies).
No topic filters until there are 6+ articles.
Rules: no em or en dashes; no comparisons to other agencies; no invented articles, clients, numbers or quotes;
no "coming soon" cards. Dates are metadata only, never shown on the page (CLAUDE.md section 4).
Word counts: answer capsule 54 (40 to 80). FAQ answers 53 / 53 / 47 (40 to 60).
-->

## Section 0: Meta Data & Keyword Targeting (/articles/)

| Field | Value | Status |
|---|---|---|
| Title tag | SEO, AEO & Website Articles \| Fadeaway Creatives (48 chars) | Needs approval |
| Meta description | Practical articles on SEO, AEO, websites and growth from Fadeaway Creatives, written for growing businesses across Canada and the US. (133 chars) | Needs approval |
| Canonical | https://fadeawaycreatives.com/articles/ | Set |
| Robots | index, follow (noindex while empty) | Set |
| Open Graph | type website, image /og-default.jpg, title + description as above | Set |
| Display line | Straight answers. No jargon. | Needs approval |
| H1 | SEO, AEO and Website Articles | Needs approval |
| Answer capsule | See frontmatter (54 words) | Needs approval |
| Primary keyword | seo and aeo articles | Set (hub page; each article targets its own question) |
| Schema | Organization (sitewide), CollectionPage + ItemList, BreadcrumbList, FAQPage | Set |
| Dates | `dateModified` in CollectionPage JSON-LD and sitemap `lastmod`, from git. Sources: `src/pages/articles/index.astro`, its data file, `copy/articles.md`, and every article entry | Set |

# Listing page (/articles/)

## Breadcrumb {#breadcrumb}

Home → Articles

## Hero {#hero}

- Display line (bold, largest type, above the H1): **Straight answers. No jargon.**
- Eyebrow: Articles
- H1: SEO, AEO and Website Articles
- Sub-headline: Practical guides on getting found in Google and AI answers, building websites that convert, and growing what you've built.
- Answer capsule: renders as real text directly under the Hero (frontmatter `answer_capsule`).

## Articles {#articles}

- Every published article, newest first (by its git publish date).
- The newest article renders as one wide feature card; the rest 3 across on desktop, 2 on tablet, 1 on mobile.
- Card: image (line art by topic when the article has none), topic chip, title, description, reading time, and
  **Read the article →**. The whole card is the link.
- No topic filters until there are 6+ articles.

## Frequently Asked Questions {#faq}

- Heading: Frequently Asked Questions
- From frontmatter `faq` (3 questions). Visible text and FAQPage JSON-LD from the same data.
- Renders only when at least one article is published.

## CTA {#cta}

Reuse AuditCta:
- Heading: Want These Fixes Done for You?
- Line: Start with a free audit of your website. We'll show you what's working, what isn't, and what to fix first.
- Button: Get Your Free Audit → /audit/

**Empty state (no published articles yet):** render the Hero, one line, and the CTA. No empty grid, no
"coming soon" cards. The page is noindex and out of the sitemap until the first article is published, then
switches to index automatically.
- Empty-state line: Our first guides are being written. In the meantime, a free audit shows exactly where your website stands.

---

# Article template (/articles/[slug]/)

One template for every article. Content comes from the entry file in `src/content/articles/[slug].md(x)`
(frontmatter + markdown body). Only the shared labels and CTAs below live here.

**Meta (per article):**
- Title tag: `seoTitle` when set, else `{title} | Fadeaway Creatives` when that fits in 60 chars, else `{title}`.
- Meta description: `description` (≤155).
- H1: `title` (one per page; the body starts at H2).
- Canonical: https://fadeawaycreatives.com/articles/[slug]/
- og:type article, og:image: the article's `image` when set, else /og-default.jpg.
  `article:published_time` and `article:modified_time` from git (no visible date).
- Schema: BlogPosting (headline = title, description, image, author = the founder as a Person, publisher =
  Organization, datePublished + dateModified from git, mainEntityOfPage = the article URL, about = the topic),
  BreadcrumbList (Home > Articles > {title}), FAQPage when the article has `faq`.

**Sections, in order:**

1. **Breadcrumb:** Home → Articles → {title}
2. **Header:** topic chip (the article's first visible tag, linking to that service or solution page) · H1 (`title`) ·
   byline: **By Bhav Bains, Founder** (links to /about/) · reading time (e.g. "6 min read")
3. **The short answer** (AEO answer capsule, `summary`, 40 to 80 words): a boxed paragraph directly under the header,
   labelled "The Short Answer". Real text in the raw HTML.
4. **Image** (only when the article has `image`), full width, with `imageAlt`.
5. **Key takeaways** (only when the article has `takeaways`, 3 to 5 short lines): heading "Key Takeaways".
6. **In this article** (only when the body has 3+ H2s): table of contents from the H2s, sticky beside the body
   on desktop, collapsed above it on mobile. Label: "In This Article".
7. **Body:** the markdown (H2 and H3 only, short paragraphs, lists and tables where they help).
8. **FAQ** (only when the article has `faq`, 3 to 6 questions): heading "Frequently Asked Questions",
   FAQPage JSON-LD from the same data.
9. **About the author:** "Written by Bhav Bains, founder of Fadeaway Creatives. 15+ years of building and growing
   websites for businesses across Canada and the US." [Link: More About Fadeaway → /about/]
10. **CTA** (AuditCta): Heading: Want Help Putting This Into Practice? · Line: A free audit shows what's working,
    what isn't, and what to fix first, in a branded report within 24 hours. · Button: Get Your Free Audit → /audit/
11. **Keep reading** (only when 2+ published): up to 3 other articles, same topic first, heading "Keep Reading".
    [Link: All Articles → /articles/]

**Labels:** Read the article · min read · The Short Answer · Key Takeaways · In This Article · Frequently Asked
Questions · Keep Reading · All Articles · By · Founder

## Article fields (content collection `articles`, replaces the placeholder-era `blog` collection)

| Field | Type | Used for |
|---|---|---|
| title | string | H1, card title, BlogPosting headline |
| seoTitle | string (≤60), optional | Title tag when `{title} \| Fadeaway Creatives` is too long |
| description | string (≤155) | Meta description, card text |
| summary | string (40 to 80 words) | The Short Answer box (answer capsule) |
| tags | content tags (src/data/tags.ts) | Topic chip, "From the Blog" sections on service and solution pages, Keep Reading |
| image / imageAlt | image(), optional | Card + article image (16:10, about 1600x1000) |
| ogImage | image() 1200x630, optional | Share image |
| takeaways | string[], optional | Key Takeaways |
| faq | { q, a }[], optional | FAQ + FAQPage |
| draft | boolean | true = never built (write and review on `dev` without publishing) |

No date fields: published and modified dates come from git (the article file's first and latest commit on the
built branch). Reading time is calculated from the body.

## Writing an article (checklist)

- One real question per article, in the title, phrased the way a business owner would ask it.
- `summary` answers it in 40 to 80 words, standalone (AI tools quote this).
- H2s are the follow-up questions. Short paragraphs, plain language, steps a reader can act on.
- SEO + AEO first whenever services are listed. No em or en dashes, no banned terms, no comparisons to other agencies.
- Every claim about our work points to a real case study or portfolio entry. No invented numbers or clients.
- Link to one related service or solution page and one case study where it fits.

## Where articles show elsewhere

"From the Blog" sections already exist on Build, Growth, E-commerce, Boutique Fitness and Labs (data `blog` in each
page file, by tag). They render the 3 newest articles with that tag and nothing when there are none.
Their "View All Resources" link goes to /articles/.

## Redirects (old /blog/)

The old blog URLs (/blog/ and its three 2024 posts) were live on the previous site. They 301 to /articles/ at
launch (`public/_redirects`, founder agreed Oct 3 to add them with /articles/).

<!--
OPEN ITEMS
- Old posts (seo-fundamentals-2024, link-building-guide, content-strategy-fitness): placeholder-era, with claims we
  can't back ("We've worked with hundreds of fitness brands"), em dashes and 2024 framing. Proposed: retire them
  (delete the blog collection) and 301 each old URL to /articles/. Founder to confirm.
- First articles: topics and who writes them (founder byline assumed). Suggested first three, one per pillar:
  an AEO explainer, a website rebuild/migration checklist, an e-commerce SEO guide.
- Founder photo for the byline / author box (About page photo is still open too).
- Visible dates: CLAUDE.md section 4 keeps dates metadata-only. Articles often show "Updated" dates; confirm
  we keep them hidden here too.
-->

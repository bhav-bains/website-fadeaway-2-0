# Case Study & Results Template

Use this every time a project becomes proof on the site. Four parts, in order:
1. Collect the facts (intake checklist)
2. Get permission (email template)
3. Create the case study entry (copy into `src/content/case-studies/`)
4. Optional: an unnamed result for a Results Strip, and a testimonial entry

Rules that never bend:
- Never invent, estimate, or round up a number. If you can't show where a number came from, don't use it.
- No permission, no name. Without written permission, a result can only appear unnamed (Part 4).
- No em dashes. No comparisons to other agencies. Plain language.

---

## Part 1: Intake checklist (fill this in before writing anything)

| Question | Answer |
|---|---|
| Client name, exactly as they want it shown | |
| Industry / client type (for unnamed use) | e.g. "B2B services firm", "Shopify fashion brand" |
| What they hired us for (Build, Growth, Labs, or a mix) | |
| The problem in their words (one or two sentences) | |
| What we did (3 to 5 concrete things) | |
| Start date of the work | |
| **Result 1**: metric, before, after, timeframe | e.g. organic sessions, 1,200/mo → 2,050/mo, Mar to Aug 2026 |
| **Result 2** | |
| **Result 3** (optional) | |
| Where each number comes from | GA4, Search Console, Shopify, booking system, ad platform, CRM |
| Screenshot of each number saved to Drive? | Yes / No (keep these, never publish client dashboards without asking) |
| Live URL (optional) | |
| Image for the card (screenshot or mockup, about 1600×1000, 16:10) | file name in `src/assets/` |
| Client quote (optional, their words, not ours) | |
| Written permission received? Date + where it lives (email thread) | |

**What counts as a result** (pick the strongest, in this order):
1. Revenue, sales, or bookings (best: it's what the site promises)
2. Leads, calls, form submissions, sign-ups
3. Conversion rate
4. Organic traffic, rankings for named terms, AI search mentions
5. Launch facts (live in X markets, migrated Y pages with zero rankings lost, shipped in Z weeks)

Build projects usually have launch facts (5) on day one and traffic or leads (2 to 4) after 60 to 90 days. Growth projects need a baseline from before we started.

---

## Part 2: Permission email (send from your own inbox)

> **Subject:** Can we feature your project on our site?
>
> Hi [First name],
>
> We're putting together a few examples of our work for the new Fadeaway site, and [project, e.g. "the new NWP website"] is one we're proud of.
>
> Here's what we'd like to show:
> - Your business name and logo
> - A short summary: [one-line summary]
> - These results: [result 1], [result 2]
> - A screenshot of the site [and your quote, if you're happy to share one]
>
> You'll see the exact wording before anything goes live, and we'll take it down any time you ask.
>
> Would that be okay? A quick "yes" by reply is all we need.
>
> Thanks,
> [Name]

Keep the reply. It's the proof behind `permissionConfirmed: true`.

---

## Part 3: Case study entry

Save as `src/content/case-studies/[client-slug].md` (lowercase, hyphens, e.g. `new-west-progressives.md`).
Fields match the site's schema in `src/content.config.ts`. The build fails if a required field is missing or permission isn't confirmed, which is on purpose.

```markdown
---
title: "[Outcome or what was built, one line. Lead with the result if you have one]"
client: "[Client name exactly as approved]"
summary: "[1 to 2 sentences: the problem, what we did, the result. 25 to 45 words.]"
results:
  - "[Number + metric + timeframe, e.g. +71% organic traffic in 6 months]"
  - "[Second result]"
  - "[Optional third result]"
image: ../../assets/[file-name].png
imageAlt: "[What the image shows, e.g. NWP homepage on a laptop and phone]"
url: "https://[live-site]"          # optional
tags: ["featured", "build", "growth"] # see tag guide below
rank: 10                              # lower shows first; 10, 20, 30 leaves room to reorder
permissionConfirmed: true             # only after the client said yes in writing
---

## The Challenge
[2 to 3 sentences. Their situation before us, in plain language.]

## What We Did
- [Concrete action 1]
- [Concrete action 2]
- [Concrete action 3]

## The Results
[1 to 2 sentences that put the numbers in context: what changed for their business.]
```

**Writing the title and results chips**
- Title: outcome first when there is one. "Doubled organic leads for a Vancouver civic campaign" beats "Website for NWP".
- Results chips: short, number first, timeframe always. "+71% organic traffic in 6 months", not "Big traffic growth".
- Summary: works on its own if an AI tool quotes it. Include the client type and one number.

**Tag guide** (use the exact names)

| Tag | Use when |
|---|---|
| `featured` | Shows on the homepage. Pick your best 3. |
| `build` | Website build, redesign, or migration. Shows on the Build page. |
| `growth` | Ongoing SEO, AEO, CRO, paid, or email results. Shows on the Growth page. |
| `ecommerce` | Online store. Shows on the E-commerce page. |
| `wellness-counselling` | Therapy, counselling, chiro, wellness practice. |
| `boutique-fitness` | Yoga, pilates, spin, barre studio. |
| `sports-academies` | Club, academy, combat sports gym, camp. |
| `labs` | Custom software, automation, AI setup, MVP. Shows on the Labs page. |
| `labs-product` | Fadeaway's own products. |

A project can carry several tags. Example: NWP → `featured`, `build`, `growth`.

---

## Part 4a: Unnamed result (Results Strip)

For proof without permission to name the client. Shows on the Growth page Results Strip (and anywhere else a stat block is used).

```yaml
- value: "+71%"                      # the number, as it should appear big
  label: "organic traffic"           # the metric
  context: "in 6 months for a B2B services firm"  # timeframe + client type, never the name
  source: "GA4, Mar to Aug 2026"     # internal only, never rendered; proves the number exists
```

Rules:
- Client type must be generic enough that nobody can identify the client. "A Vancouver civic party" is identifiable. "A political campaign" may still be; when in doubt, ask the client anyway.
- Same honesty rules as named results. Keep the screenshot.

## Part 4b: Testimonial entry

Save as `src/content/testimonials/[client-slug].md`.

```markdown
---
quote: "[Their exact words. Light trimming is fine, never add words.]"
name: "[First and last name]"
role: "[Title]"            # optional
company: "[Company]"       # optional
tags: ["build"]            # same tag guide as above
rank: 10
permissionConfirmed: true  # required; the build won't accept a testimonial without it
---
```

---

## Status tracker (current case studies)

| Client | Work | Tags | Results collected | Permission | Image | Live |
|---|---|---|---|---|---|---|
| New West Progressives | Website + campaign operations | featured, build, growth | ☐ | ☐ | ☐ | ☐ |
| Echo Storytelling | Website + marketing (Fadeaway-era work only) | featured, build, growth | ☐ | ☐ | ☐ | ☐ |
| HeartStamp | Technical, on-page, and AI visibility audit + growth roadmap | featured, growth (+ ecommerce?) | ☐ | ☐ | ☐ | ☐ |

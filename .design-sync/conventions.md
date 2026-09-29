# Fadeaway Creatives: design conventions

Fadeaway Creatives is a founder-led web design, SEO and growth studio (Vancouver, BC, working with clients across Canada and the US). The brand is dark, calm and premium: graphite and near-black surfaces, off-white text, one warm orange accent for actions, teal for highlights.

## What this design system is

Tokens-only. There are **no importable components** (the production site is built in Astro). Build your own markup and style it with the classes and CSS variables below. Everything is in `styles.css` (it imports `fonts/fonts.css` and `_ds_bundle.css`); read `_ds_bundle.css` for the full class list before styling.

## Setup

Put the page on the brand ground, or it renders on white with the wrong font:

```html
<body class="bg-canvas text-ink font-body">
```

Headings (`h1` to `h6`) already get Outfit, semibold. Body text is DM Sans.

## Styling idiom: Tailwind-style utility classes on brand tokens

Use semantic token classes first; fall back to the raw brand palette only when a semantic name doesn't fit. Never invent hex colors.

| Purpose | Classes |
|---|---|
| Backgrounds | `bg-canvas` (page), `bg-surface` (section), `bg-surface-deep` (black), `bg-surface-raised` (cards, panels) |
| Text | `text-ink` (headings), `text-ink-soft` (lead), `text-ink-muted` (body in cards), `text-ink-subtle` (captions) |
| Lines | `border-line`, `border-line-strong` |
| Accent | `bg-accent` / `text-accent` (orange, primary actions), `text-accent-ink` (text on orange), `text-highlight` / `bg-highlight` (teal: links, icons, hover) |
| Tints | `bg-accent/10`, `bg-white/5`, `border-white/10` (opacity 5 to 90 in steps of 10) |
| Fonts | `font-display` (Outfit), `font-body` (DM Sans) |
| Type | `text-display` (hero display line), `text-title` (hero H1 under a display line), `text-lead`, `text-heading` (section H2), then `text-xs` 12px, `text-sm` 16px, `text-base` 18px, `text-lg` 20px, `text-xl` 24px, `text-2xl` 32px up to `text-6xl` 80px |
| Spacing | 8px scale: `p-1` = 8px, `p-2` = 16px ... `p-10` = 80px (same for m, gap, space-y). Icons: `size-icon-xs` 12px, `size-icon-sm` 16px, `size-icon` 20px. Never `size-4` for icons (that is 32px). |
| Radius | `rounded-control` (buttons, inputs), `rounded-card` (cards), `rounded-pill` (badges) |
| Effects | `shadow-glow-accent`, `shadow-glow-highlight`, `bg-grid` (faint square grid for hero backgrounds) |
| Layout | `container-max` (page width), `section-padding` (standard section padding), `grid`, `grid-cols-1` to `grid-cols-12` with `sm:`/`md:`/`lg:`, `flex`, `items-*`, `justify-*` |

Ready-made pieces: `btn-primary` (orange), `btn-secondary` (orange outline), `btn-tertiary` (quiet), `badge-primary` (orange pill), `card-glass`, `glass-effect`, `input-primary`, `gradient-text` (orange to teal). If a utility you want isn't in `_ds_bundle.css`, use `style={{}}` with `var(--color-*)`, `var(--spacing-*)`, `var(--radius-*)` rather than raw values.

## Example

```html
<section class="bg-surface section-padding">
  <div class="container-max">
    <span class="badge-primary">Web design</span>
    <h2 class="text-heading text-ink mt-3">Websites that earn their keep</h2>
    <p class="text-lead text-ink-soft max-w-2xl mt-2">Fast, findable sites built for growing brands.</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
      <div class="bg-surface-raised border border-line rounded-card p-3">
        <h3 class="text-xl text-ink">Build</h3>
        <p class="text-sm text-ink-muted mt-1">Custom sites that load quickly and rank.</p>
      </div>
    </div>
    <a class="btn-primary inline-block mt-6" href="/contact">Book a free audit</a>
  </div>
</section>
```

## Copy rules (apply to any text you write)

- No em dashes or en dashes. Use "to" for ranges.
- Never say "retainer" (the plans are the Attract Plan and the Growth Plan). "Full Audit", never "Deep Audit".
- No comparisons to other agencies.
- Banned: "lightning-fast", "blazing fast", "sub-second", "dominate", "full-service agency", "growth hackers", "digital gurus", "360 marketing".
- A slogan goes in a display line above the H1; the H1 itself names a real service.

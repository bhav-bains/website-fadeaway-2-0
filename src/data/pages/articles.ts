// Articles listing page + the shared article-template labels, copied word for word from copy/articles.md
// (drafted Oct 4; title, description, display line, H1 and answer capsule still marked "Needs approval" there).
// Per-article content lives in src/content/articles/[slug].md.
import { routes } from '../routes';
import { siteConfig } from '../site';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { FaqItem } from '../../components/blocks/Faq.astro';

/** Card link on every article card (listing, From the Blog, Keep Reading) */
export const cardLinkLabel = 'Read the article';
/** After the number, e.g. "6 min read" */
export const minReadLabel = 'min read';

// ---------- Listing (/articles/) ----------

export const seo = {
  title: 'SEO, AEO & Website Articles | Fadeaway Creatives',
  description:
    'Practical articles on SEO, AEO, websites and growth from Fadeaway Creatives, written for growing businesses across Canada and the US.',
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Articles', href: routes.articles },
];

/** AEO answer capsule: real text directly under the Hero */
export const answerCapsule =
  'Fadeaway Creatives articles are practical guides on SEO, answer engine optimization (AEO), websites, e-commerce, and growth for businesses across Canada and the US. Each one answers a real question we hear from clients, in plain language, with steps you can act on right away. They draw on 15+ years of building and growing websites.';

export const heroVariant: HeroVariant = 'statement';

export const hero: HeroContent = {
  displayLine: 'Straight answers. No jargon.',
  eyebrow: 'Articles',
  h1: 'SEO, AEO and Website Articles',
  sub: "Practical guides on getting found in Google and AI answers, building websites that convert, and growing what you've built.",
  breadcrumb,
  visual: 'ask',
};

/** Renders only when at least one article is published. Also feeds the FAQPage schema. */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'What topics do your articles cover?',
      a: "We write about what our clients ask us most: SEO and AEO, how to show up in AI answers like ChatGPT and Google's AI Overviews, website builds and redesigns, e-commerce, and growth work like lead generation and campaigns. Every article is written for business owners, not marketers, so you can act on it.",
    },
    {
      q: 'Can I use these guides without hiring an agency?',
      a: "Yes. Every article is written so you can do the work yourself, with clear steps and no paywall. Some fixes take an afternoon, others need a developer or more time than you have. If you'd rather hand it off, a free audit shows exactly what your site needs and what to fix first.",
    },
    {
      // Turnaround wording matches the rest of the site, no time promise (founder, Nov 3)
      q: 'How do I know what my own website needs first?',
      a: 'Start with a free audit. We review your website, SEO and AEO readiness, performance, and local visibility, then send a report. It ranks the fixes by impact, so you know what to do first, whether you do it yourself or work with us.',
    },
  ],
};

/** Listing CTA (AuditCta) */
export const listingCta = {
  heading: 'Want These Fixes Done for You?',
  text: "Start with a free audit of your website. We'll show you what's working, what isn't, and what to fix first.",
  button: 'Get Your Free Audit',
};

/** Empty state (no published articles): Hero, this line, the CTA. The page is noindex and out of the sitemap. */
export const emptyLine = 'Our first guides are being written. In the meantime, a free audit shows exactly where your website stands.';

// ---------- Article template (/articles/[slug]/) ----------

export const detail = {
  shortAnswer: 'The Short Answer',
  keyTakeaways: 'Key Takeaways',
  inThisArticle: 'In This Article',
  faqHeading: 'Frequently Asked Questions',
  keepReading: 'Keep Reading',
  allArticles: { label: 'All Articles', href: routes.articles },
  byline: { by: 'By', name: siteConfig.founder.name, role: 'Founder', href: routes.about },
  author: {
    text: 'Written by Bhav Bains, founder of Fadeaway Creatives. 15+ years of building and growing websites for businesses across Canada and the US.',
    link: { label: 'More About Fadeaway', href: routes.about },
  },
  cta: {
    heading: 'Want Help Putting This Into Practice?',
    // Same sentence as the case-study CTA, no time promise (founder, Nov 3)
    text: "A free audit shows what's working, what isn't, and what to fix first, in a report.",
    button: 'Get Your Free Audit',
  },
};

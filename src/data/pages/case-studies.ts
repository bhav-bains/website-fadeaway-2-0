// Case Studies listing page + the shared detail-page labels, copied word for word from copy/case-studies.md
// (draft, awaiting approval). Per-study content lives in src/content/case-studies/[slug].md.
import { routes } from '../routes';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { FaqItem } from '../../components/blocks/Faq.astro';

/** Card link on every case-study card (listing, ProofGrid on other pages, "More Case Studies") */
export const cardLinkLabel = 'Read the case study';

// ---------- Listing (/case-studies/) ----------

export const seo = {
  title: 'Website & SEO Case Studies | Fadeaway Creatives',
  description:
    'Website, migration and growth case studies from Fadeaway Creatives: real projects for growing businesses across Canada and the US, with real results.',
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Case Studies', href: routes.caseStudies },
];

/** AEO answer capsule. Mentions the NWP result, so it only renders while NWP is published (see the page). */
export const answerCapsule =
  "Fadeaway Creatives case studies show real projects for growing businesses across Canada and the US: website redesigns, platform migrations, and ongoing SEO, AEO, and campaign work. Each one covers the problem, what we built, and what changed, like tripling a civic campaign's website traffic after a Wix to WordPress migration. Every result is real and shared with the client's permission.";

export const heroVariant: HeroVariant = 'statement';

export const hero: HeroContent = {
  displayLine: 'Proof, not promises.',
  eyebrow: 'Case Studies',
  h1: 'Website and Growth Case Studies',
  sub: "Real projects, real results. See how we've helped growing businesses get found, win customers, and run better online.",
  breadcrumb,
  visual: 'launch',
};

export const moreWork = {
  text: "Want to see more? We've built websites for e-commerce brands, practices, nonprofits, and software companies.",
  link: { label: 'See Our Portfolio Work', href: routes.portfolio },
};

/** Also feeds the FAQPage schema */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'What kind of results do your projects get?',
      a: "It depends on the project and where the business started, so every case study shows what changed for that specific client: more traffic, more sign-ups or sales, a faster site, or a smoother launch. We never invent or round up a number, and we never guarantee rankings. A free audit shows where your own site stands.",
    },
    {
      q: 'Do you only work in the industries shown here?',
      a: "No. We work with growing businesses across Canada and the US, with deep experience in e-commerce, wellness and counselling, boutique fitness, and sports programs. Our Build and Growth services are open to any business. Browse our portfolio to see the full range of websites and projects we've delivered.",
    },
    {
      q: 'How do I start a project like these?',
      a: "Start with a free audit. We review your website, SEO and AEO readiness, performance, and local visibility, then send a branded report within 24 hours. You'll know exactly what to fix first, and if you want help, we scope the project with a fixed price before any work starts.",
    },
  ],
};

export const listingCta = {
  heading: 'Want Results Like These?',
  text: "Start with a free audit of your website. We'll show you what's working, what isn't, and what to fix first.",
  button: 'Get Your Free Audit',
};

// ---------- Detail template (/case-studies/[slug]/) ----------

export const detail = {
  eyebrow: 'Case Study',
  liveSiteLabel: 'Visit the live site',
  facts: { client: 'Client', industry: 'Industry', services: 'Services', timeline: 'Timeline' },
  resultsEyebrow: 'Results',
  galleryHeading: 'A Closer Look',
  beforeAfter: { heading: 'Before and After', before: 'Before', after: 'After' },
  cta: {
    heading: 'Is Your Website Pulling Its Weight?',
    text: "A free audit shows what's working, what isn't, and what to fix first, in a branded report within 24 hours.",
    button: 'Get Your Free Audit',
  },
  moreHeading: 'More Case Studies',
  /** Title tag: "{client} Case Study | Fadeaway Creatives", or "{client} | Fadeaway Creatives" when over 60 */
  title: (client: string) => {
    const full = `${client} Case Study | Fadeaway Creatives`;
    return full.length <= 60 ? full : `${client} | Fadeaway Creatives`;
  },
};

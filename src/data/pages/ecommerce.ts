// E-commerce Solutions page content, copied word for word from copy/ecommerce.md.
// Blocks never contain copy; they render what this file gives them.
// Pricing: none anywhere on this page (scope-based), including the Full Audit.
import { routes } from '../routes';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { AnnotatedPoint } from '../../components/blocks/AnnotatedVisual.astro';

export const seo = {
  title: 'Fadeaway Creatives | E-commerce Web Design & Growth',
  description:
    'E-commerce web design and growth for Shopify, WooCommerce, and headless stores. SEO, AEO, and conversion work that turns browsers into buyers.',
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'E-commerce', href: routes.ecommerce },
];

/** AEO answer capsule: plain text directly under the Hero */
export const answerCapsule =
  'Fadeaway Creatives is an e-commerce web design and growth partner for stores across Canada and the US. We build custom Shopify, WooCommerce, and headless stores, move stores to new platforms without losing rankings, and run the SEO, AEO, and conversion work that turns browsers into buyers. Every project is scoped and quoted at a fixed price before we start.';

/** Which Hero design ships (statement is the solutions-page hero). In `npm run dev`, compare with ?hero=showcase | visual | all. */
export const heroVariant: HeroVariant = 'statement';

export const hero: HeroContent = {
  eyebrow: 'E-commerce Web Design, Development & Growth',
  h1: 'Your E-commerce Web Design & Growth Partner',
  sub: 'Custom Shopify, WooCommerce, and headless stores, plus the SEO, AEO, and conversion work that turns browsers into buyers.',
  primaryCta: { label: 'Get Started', href: routes.contact },
  // Switch to "See Our E-commerce Work" → #real-work once an approved case study exists (copy/ecommerce.md)
  secondaryCta: { label: 'See How It Works', href: '#how-it-works' },
  breadcrumb,
  visual: 'ecommerce',
  // Only platforms and tools we genuinely build on / use (confirmed by the founder, Sept 29). No partnership claims.
  logos: {
    label: 'Platforms and tools we work with',
    groups: [
      [
        { name: 'Shopify', icon: 'shopify' },
        { name: 'WooCommerce', icon: 'woocommerce' },
        { name: 'WordPress', icon: 'wordpress' },
        { name: 'BigCommerce', icon: 'bigcommerce' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'Astro', icon: 'astro' },
        { name: 'Shopify Hydrogen' },
        { name: 'Stripe', icon: 'stripe' },
      ],
      [
        { name: 'Google Search Console', icon: 'google-search-console' },
        { name: 'Google Analytics', icon: 'google-analytics' },
        { name: 'Google Merchant Center' },
        { name: 'Google Ads', icon: 'google-ads' },
        { name: 'Klaviyo' },
        { name: 'Meta Ads', icon: 'meta' },
        { name: 'ChatGPT' },
        { name: 'Perplexity', icon: 'perplexity' },
        { name: 'Gemini', icon: 'gemini' },
      ],
    ],
  },
};

/**
 * Parked (not on the page): the AnnotatedVisual layout was pulled on Sept 29; the copy will be placed elsewhere later.
 * Markers point at the matching part of the ai-shopping illustration (560x440 viewBox).
 */
export const aiShopping: { id: string; heading: string; intro: string; items: AnnotatedPoint[] } = {
  id: 'ai-shopping',
  heading: 'Is Your Store Ready for AI Shopping?',
  intro:
    "Shopping is starting to happen through AI assistants and chatbots, not just search bars and category pages. Most stores aren't built for that yet.",
  items: [
    {
      title: 'Structured for AI to Read',
      text: "Product data, schema, and content signals built the way AI shopping tools actually parse them, not just the way Google's crawler expects.",
      at: { x: 78, y: 7 }, // structured-data { } chip
    },
    {
      title: 'Recommended, Not Just Ranked',
      text: "Being found isn't only about search position anymore. It's about whether an AI assistant can confidently describe your product and point a shopper to it.",
      at: { x: 16.5, y: 50.5 }, // the product the AI cites
    },
    {
      title: 'Early, On Purpose',
      text: "This is still early. Getting your store's foundations right now is a real head start, not a trend to catch up on later.",
      at: { x: 36.5, y: 72.5 }, // rising sales card
    },
  ],
};

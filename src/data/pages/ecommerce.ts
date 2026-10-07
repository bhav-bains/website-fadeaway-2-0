// E-commerce Solutions page content, copied word for word from copy/ecommerce.md.
// Blocks never contain copy; they render what this file gives them.
// Pricing: none anywhere on this page (scope-based), including the Full Audit.
import { routes } from '../routes';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { AnnotatedPoint } from '../../components/blocks/AnnotatedVisual.astro';
import type { BentoItem } from '../../components/blocks/BentoGrid.astro';
import type { FaqItem } from '../../components/blocks/Faq.astro';
import type { StepItem } from '../../components/blocks/Steps.astro';
import type { ServiceIndexItem } from '../../components/blocks/ServiceIndex.astro';

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

/** Markers point at the matching part of the ai-shopping illustration (560x440 viewBox) */
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

export const standard: { id: string; heading: string; intro: string; items: BentoItem[]; cta: { text: string; label: string; href: string } } = {
  id: 'standard',
  heading: 'Built for the Way E-commerce Actually Works',
  // "Your store is open at 2am..." added Oct 2 (24/7 salesperson framing)
  intro: "Your store is open at 2am. It should sell like it. Every store we build or grow follows the same standard, whatever platform you're on.",
  items: [
    {
      title: 'Designed to Convert, Not Just Look Good',
      text: 'Every design decision is built around your actual buying flow: product pages, cart, and checkout, not just visual polish.',
    },
    {
      title: 'Built for AI Shopping and Search',
      text: 'Your store is structured with the schema and content signals that AI shopping assistants and search tools read when recommending where to buy.',
    },
    {
      title: 'Deep Platform Expertise',
      text: 'Hands-on experience across Shopify, WooCommerce, and headless commerce, not a generic template applied to every store.',
    },
    {
      title: 'Tailored to Your Store',
      text: 'Every recommendation comes from your actual catalog, your actual traffic, and your actual competitors, not a one-size playbook.',
    },
    {
      title: 'Solid Technical Foundations',
      text: 'Site structure, category and tag architecture, and technical SEO built to handle a large catalog cleanly as it grows.',
    },
  ],
  cta: { text: 'Ready to see this in action?', label: 'Get Started', href: routes.contact },
};

export const services: { id: string; heading: string; items: ServiceIndexItem[]; cta: { label: string; href: string } } = {
  id: 'services',
  heading: 'What We Do for E-commerce Stores',
  items: [
    {
      title: 'A Store Built to Convert',
      text: 'Custom Shopify, WooCommerce, or headless builds, designed around your actual buying flow: add-to-cart, checkout, and everything in between, not just how it looks.',
      link: { label: 'Store builds and redesigns', href: routes.build },
    },
    {
      title: 'Found by Google and AI Shopping Tools',
      text: "Technical SEO and AEO built into your store from day one, including Shopify SEO and WooCommerce SEO, so you show up whether someone's searching on Google or asking an AI assistant where to buy.",
      link: { label: 'SEO and AEO growth work', href: routes.growth },
    },
    {
      title: 'A Catalog That Stays Organized as You Grow',
      text: 'Site structure, category and tag architecture, and custom apps or plugins built to handle thousands of products cleanly, not just a handful.',
    },
    {
      title: 'More Sales From the Traffic You Already Have',
      text: 'Ongoing conversion rate optimization and cart abandonment recovery, focused on turning browsers already on your site into buyers.',
    },
    {
      title: 'Growing Into New Markets',
      text: 'Lead generation, email marketing, and go-to-market strategy for stores ready to expand into new markets or channels.',
    },
    {
      title: 'Migrations and Store Management Without the Risk',
      text: 'Platform migrations and ongoing domain and store management, handled without losing your search rankings.',
    },
    {
      title: "Knowing Exactly What's Working",
      text: "A dashboard tracking your traffic, conversions, and revenue in one place, so you're never guessing.",
    },
    {
      title: 'Custom Apps and Integrations',
      text: 'When your store needs software beyond the storefront, like custom integrations, automations, or internal dashboards, Fadeaway Labs builds it.',
      link: { label: 'Fadeaway Labs', href: routes.labs },
    },
  ],
  cta: { label: 'Get Started', href: routes.contact },
};

/** Also feeds the HowTo schema, so the visible steps and the JSON-LD match word for word */
export const howItWorks: { id: string; heading: string; items: StepItem[] } = {
  id: 'how-it-works',
  heading: 'How It Works',
  items: [
    {
      title: 'Audit',
      text: "We start with a free Instant Audit of your store, your platform, your catalog, and your current traffic. When you need the full picture, the Full Audit maps exactly what's working and what isn't.",
    },
    {
      title: 'Plan',
      text: 'Based on what we find, we map out whether you need a new build, a redesign or migration, ongoing growth work, or a mix. No fixed package forced onto your store, and if you move ahead with a build, your Full Audit fee is credited toward it.',
    },
    {
      title: 'Build and Grow',
      text: "Build work and growth work move on their own real timelines, tied to your store's actual scope, not a one-size schedule.",
    },
    {
      title: 'Report and Improve',
      text: 'You get a dashboard tracking traffic, conversions, and revenue, reviewed on a regular cadence, with strategy that adjusts based on what the data shows.',
    },
  ],
};

/** Real Work: WorkGrid from getRealWork(tag): case studies with this tag first, then featured and labs work (portfolio.yaml), max `limit`. Renders nothing when none match. */
export const realWork = {
  id: 'real-work',
  eyebrow: 'Our Work',
  heading: "Results We've Delivered",
  intro: "Stores we've built and grown.",
  tag: 'ecommerce',
  limit: 3,
  ctaText: 'Like what you see?',
  primaryCta: { label: 'Get Started', href: routes.contact },
  secondaryCta: { label: 'View Full Portfolio', href: routes.portfolio },
} as const;

/** Also feeds the FAQPage schema, so the visible Q&A and the JSON-LD match word for word */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'Do you build on Shopify, WooCommerce, or headless commerce?',
      a: 'Yes, all three. The right platform depends on your catalog size, your budget, and how much control you need over the backend. We help you choose before anything gets built, then design the store, product pages, and checkout around how your customers actually buy, not around a template.',
    },
    {
      q: 'How much do e-commerce web design and SEO cost?',
      a: "It depends on your catalog, your platform, and the scope of work. A small migration and a full custom headless build are very different projects. Every build and growth plan is scoped and quoted at a fixed price before we start, with no hourly billing. Reach out and we'll walk you through real numbers for your store.",
    },
    {
      q: 'Can you migrate my store without losing my search rankings?',
      a: 'Yes. Migrations are where most stores lose the search visibility they spent years building. We handle the move end to end, including product data, URLs, redirects, and messy backend content, so your rankings and content come with you to the new platform instead of starting over from zero.',
    },
    {
      q: 'How do you increase e-commerce sales from the traffic I already have?',
      a: 'We start where shoppers drop off: product pages, add-to-cart, and checkout. Then we run ongoing conversion rate optimization, cart abandonment recovery, and email campaigns that bring past customers back. The goal is more sales from the visitors you already have, tracked in a dashboard that shows revenue, not just traffic.',
    },
    {
      q: 'Can AI shopping assistants like ChatGPT recommend my store?',
      a: "They can, if they can read your store clearly. AI assistants rely on structured product data, schema, reviews, and clear product content when deciding what to recommend. We build and clean up those signals so tools like ChatGPT, Perplexity, and Google's AI Overviews can describe your products accurately and point shoppers to you.",
    },
    {
      q: 'What if I need custom software or integrations beyond my storefront?',
      a: "That's Fadeaway Labs. Custom apps, platform integrations, order and inventory automations, and internal dashboards that go beyond the storefront live there. It's the same team, scoped as its own project, so your store build and growth work stay focused while the bigger system gets built alongside it.",
    },
  ],
};

/** Service JSON-LD entries (copy/ecommerce.md frontmatter `schema`). No prices. */
export const serviceNames = [
  'E-commerce Store Builds',
  'Website Redesign & Migration',
  'E-commerce SEO & AEO',
  'Conversion Rate Optimization',
  'Email & Lead Generation Campaigns',
  'Custom Apps & Integrations',
];

/** From the Blog (tag ecommerce): renders nothing until /articles/ has real e-commerce posts. */
export const blog = {
  id: 'blog',
  heading: 'From the Blog',
  intro: 'Practical answers to the e-commerce questions we hear most.',
  tag: 'ecommerce',
  cta: { label: 'View All Resources', href: routes.articles },
} as const;

export const cta = {
  id: 'cta',
  heading: 'Ready to Build or Grow Your Store?',
  text: "Tell us where your store is today, and we'll help you figure out what's next.",
  cta: { label: 'Get Started', href: routes.contact },
};

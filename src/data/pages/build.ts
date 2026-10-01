// Build Services page content, copied word for word from copy/build.md.
// Blocks never contain copy; they render what this file gives them.
// Pricing: no numbers anywhere on this page (every build is scoped and quoted).
import { routes } from '../routes';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';

export const seo = {
  title: 'Fadeaway Creatives | Custom Web Development & Redesign',
  description:
    'Custom web development, website redesigns, and e-commerce builds. Enterprise-quality work, a fixed price for every scope, AEO built in.',
};

// Home > Build: there is no /services hub page (copy/build.md)
export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Build', href: routes.build },
];

/** AEO answer capsule: lead paragraph of the first section after the Hero */
export const answerCapsule =
  "Fadeaway Creatives builds custom websites, redesigns existing sites, and builds e-commerce stores for growing businesses across Canada and the US, engineered for real customers and for AI search, not just Google. Every project starts with a written scope of work and a fixed price, and migrations keep the search rankings you've already earned.";

/** Service pages ship the blueprint hero. In `npm run dev`, compare with ?hero=statement | showcase | all. */
export const heroVariant: HeroVariant = 'blueprint';

export const hero: HeroContent = {
  eyebrow: 'Website Design and Development for Growing Businesses',
  h1: 'Custom Web Development, Built to Convert and Rank',
  sub: 'Custom websites, redesigns, and e-commerce stores, built for real customers and for AI search. A clear scope and a fixed price before anything starts.',
  primaryCta: { label: 'Get a Quote', href: routes.contact },
  secondaryCta: { label: 'See How It Works', href: '#how-it-works' },
  breadcrumb,
  visual: 'wireframe',
};

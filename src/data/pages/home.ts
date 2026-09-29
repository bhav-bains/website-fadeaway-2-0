// Homepage content, copied word for word from copy/home.md.
// Blocks never contain copy; they render what this file gives them.
import { routes } from '../routes';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';

export const seo = {
  title: 'Fadeaway Creatives | Revenue-Focused Growth Partners',
  description:
    'SEO, AI search, and websites built to turn traffic into paying customers. Fixed pricing, real growth, no guesswork.',
};

/** Which Hero design ships. In `npm run dev`, preview others with /?hero=split (or centered, editorial, visual, all). */
export const heroVariant: HeroVariant = 'visual';

export const hero: HeroContent = {
  displayLine: 'Revenue-Focused. Growth Partners.',
  eyebrow: 'Growth Partner for Local Businesses Across the US & Canada',
  h1: 'Websites, SEO & AI Search for Growing Businesses',
  sub: 'We build websites ready for SEO and AI search, and run growth systems that turn traffic into paying customers. Fixed pricing, no guesswork, built to scale as you grow.',
  primaryCta: { label: 'See How It Works', href: '#how-it-works' },
  secondaryCta: { label: 'Get Your Free Audit', href: routes.audit },
  answerCapsule:
    'Fadeaway Creatives builds websites and runs SEO and AEO for growing businesses across Canada and the US, so customers find you on Google and in AI answers. Founder-led with 15+ years of experience, we work with e-commerce brands, wellness practices, boutique studios, and sports programs, with fixed pricing and results measured in bookings and sales.',
};

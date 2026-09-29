// Homepage content, copied word for word from copy/home.md.
// Blocks never contain copy; they render what this file gives them.
import { routes } from '../routes';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { IconGridItem } from '../../components/blocks/IconGrid.astro';
import type { CardGridItem } from '../../components/blocks/CardGrid.astro';

export const seo = {
  title: 'Fadeaway Creatives | Revenue-Focused Growth Partners',
  description:
    'SEO, AI search, and websites built to turn traffic into paying customers. Fixed pricing, real growth, no guesswork.',
};

/** Which Hero design ships. In `npm run dev`, preview others with /?hero=split (or centered, editorial, visual, all). */
export const heroVariant: HeroVariant = 'visual';

/** AEO answer capsule: plain text directly under the Hero (rendered at the top of the Trust Bar) */
export const answerCapsule =
  'Fadeaway Creatives builds websites and runs SEO and AEO for growing businesses across Canada and the US, so customers find you on Google and in AI answers. Founder-led with 15+ years of experience, we work with e-commerce brands, wellness practices, boutique studios, and sports programs, with fixed pricing and results measured in bookings and sales.';

export const hero: HeroContent = {
  displayLine: 'Revenue-Focused. Growth Partners.',
  eyebrow: 'Growth Partner for Local Businesses Across the US & Canada',
  h1: 'Websites, SEO & AI Search for Growing Businesses',
  sub: 'We build websites ready for SEO and AI search, and run growth systems that turn traffic into paying customers. Fixed pricing, no guesswork, built to scale as you grow.',
  primaryCta: { label: 'See How It Works', href: '#how-it-works' },
  secondaryCta: { label: 'Get Your Free Audit', href: routes.audit },
  answerCapsule,
};

export const trust: { id: string; items: IconGridItem[] } = {
  id: 'trust',
  items: [
    { icon: 'award', title: '15+ Years Experience', text: 'Founder-led, hands-on from first call to launch' },
    { icon: 'search-ai', title: 'SEO + AEO Specialists', text: 'Built for Google and modern AI search' },
    { icon: 'price-tag', title: 'Fixed Pricing', text: 'No hourly billing, scope defined before we start' },
    { icon: 'chart-up', title: 'Revenue-Tracked', text: 'Results measured in bookings & sales, not traffic' },
  ],
};

export const industries: { id: string; heading: string; intro: string; items: CardGridItem[] } = {
  id: 'industries',
  heading: 'Growth Built Around Your Industry',
  intro: 'Websites, SEO and AEO shaped around how your customers search and book.',
  items: [
    {
      title: 'E-commerce',
      body: "We bring deep, hands-on experience with larger e-commerce stores: the technical SEO and site work that turns search traffic into sales in a competitive, established market. It's not a quick-win space, which is exactly why the foundation matters more than shortcuts.",
      link: { label: 'See how we help e-commerce brands', href: routes.ecommerce },
      illustration: 'ecommerce',
    },
    {
      title: 'Wellness & Counselling',
      body: 'Fill your caseload. We build websites and run SEO and AEO for therapists, counsellors, chiropractors, and wellness practices, so clients find you beyond directory listings like Psychology Today. Built to work with the practice software you already use, like Jane App or SimplePractice.',
      link: { label: 'See how we help wellness & counselling practices', href: routes.wellnessCounselling },
      illustration: 'wellness',
    },
    {
      title: 'Boutique Fitness',
      body: 'Keep every class full. We build websites and local SEO systems for yoga, pilates, spin/cycling, and barre-format studios ready to scale memberships and fill every class slot. Built to work with the booking software you already use, like Mindbody or Momence.',
      link: { label: 'See how we help boutique fitness studios', href: routes.boutiqueFitness },
      illustration: 'fitness',
    },
    {
      title: 'Sports Academies',
      body: 'Fill your roster and keep it full. For clubs, academies, combat sports gyms, and camps, we build websites parents can actually find on Google and in AI answers, connected to the registration software you already use, like LeagueApps or TeamSnap.',
      link: { label: 'See how we help sports programs', href: routes.sports },
      illustration: 'sports',
    },
  ],
};

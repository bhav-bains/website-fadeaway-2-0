// Homepage content, copied word for word from copy/home.md.
// Blocks never contain copy; they render what this file gives them.
import { routes } from '../routes';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { IconGridItem } from '../../components/blocks/IconGrid.astro';
import type { CardGridItem } from '../../components/blocks/CardGrid.astro';
import type { NumberedListItem } from '../../components/blocks/NumberedList.astro';
import type { ServiceGridItem } from '../../components/blocks/ServiceGrid.astro';
import type { StepItem } from '../../components/blocks/Steps.astro';

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

export const services: { id: string; eyebrow: string; heading: string; items: ServiceGridItem[] } = {
  id: 'services',
  eyebrow: 'Our Services',
  heading: 'How We Work With You',
  items: [
    {
      title: 'Build',
      body: 'From a full website redesign to migrating an existing site without losing your search rankings, every build is designed around your brand and scoped with a fixed price before we start, so you get enterprise-quality work without an enterprise price tag or timeline.',
      icon: 'browser',
      tone: 'accent',
      art: 'build',
      includes: [
        { label: 'Custom Web Development', icon: 'code' },
        { label: 'Website Redesign', icon: 'refresh' },
        { label: 'E-commerce Builds', icon: 'bag' },
        { label: 'Site Migration', icon: 'migrate' },
      ],
      link: { label: 'See Build Services', href: routes.build },
    },
    {
      title: 'Growth',
      body: 'We start with a clear picture of where you stand: a free Instant Audit, then a Full Audit that maps exactly what needs to change. From there, ongoing SEO and AEO work keeps you visible on Google and in AI search results, with every deliverable tied to bookings and sales, not traffic.',
      icon: 'chart-up',
      tone: 'highlight',
      art: 'growth',
      includes: [
        { label: 'Local SEO', icon: 'map-pin' },
        { label: 'AI Search (AEO)', icon: 'search-ai' },
        { label: 'Conversion Optimization', icon: 'target' },
        { label: 'Paid Ads', icon: 'megaphone' },
      ],
      link: { label: 'See Growth Services', href: routes.growth },
    },
  ],
};

/** Also feeds the HowTo JSON-LD, so visible steps and schema always match */
export const howItWorks: { id: string; heading: string; items: StepItem[] } = {
  id: 'how-it-works',
  heading: 'How It Works',
  items: [
    {
      title: 'Instant Audit (Free)',
      text: 'We run a fast, automated audit of your website, local search visibility, and paid opportunities, and send you the results at no cost.',
    },
    {
      title: 'Full Audit',
      text: 'We do a full account review, keyword research, and build a clear action plan for your business.',
    },
    {
      title: 'Build, Then Grow',
      text: 'From there, we either build or rebuild your site around your brand, or move straight into an ongoing Growth Plan, whichever your business needs first.',
    },
  ],
};

export const ecommerce = {
  id: 'ecommerce',
  heading: 'Your Store, Built for AI Search',
  body: "E-commerce is one of the most competitive spaces in search: established players, deep case-study libraries, years of SEO investment already in place. That's exactly why we treat it as a long-term investment, not a quick fix. We handle the technical SEO and AEO work that gets your store found by Google and by AI shopping assistants, alongside site builds, migrations, and checkout optimization that turn that traffic into sales.",
  // TODO(portfolio): query-string filter needs a decision when /portfolio is built (copy/home.md open items)
  link: { label: 'See our e-commerce work', href: `${routes.portfolio}?filter=ecommerce` },
  cta: { label: 'See the E-commerce Approach', href: routes.ecommerce },
};

export const labs = {
  id: 'labs',
  heading: 'Fadeaway Labs: MVPs, AI Automation & Custom Software',
  intro:
    'Fadeaway Labs is where we build for the love of building: MVPs, business automation, custom software, and AI tools set up properly inside your business. If you can picture a system that would save you hours a week, this is where we make it real.',
  items: [
    {
      icon: 'bulb',
      title: 'From Idea to MVP',
      text: 'Got a product idea? We take it from architecture to launch, a working first version real users can try, with a roadmap for what comes next.',
    },
    {
      icon: 'workflow',
      title: 'Business Process Automation',
      text: 'We connect your CRM, email, booking software, and internal tools, then automate the manual work between them, with AI handling the sorting, summaries, and follow-ups.',
    },
    {
      icon: 'sparkles',
      title: 'Claude & ChatGPT, Set Up for Your Business',
      text: 'Most teams already pay for AI tools. We set them up to know your business, connect them to your tools, and train your team to use them with confidence.',
    },
    {
      icon: 'dashboard',
      title: 'Custom Apps & Dashboards',
      text: "Client portals, internal tools, and live dashboards tracking rankings, bookings, and revenue in one place, so you're never guessing what's working.",
    },
  ] satisfies IconGridItem[],
  cta: {
    heading: 'Have a Custom Project in Mind?',
    text: "Let's map the architecture, scope the MVP, and build a roadmap to bring it to life.",
    cta: { label: "Let's Build Your MVP", href: `${routes.labs}#idea-to-mvp` },
  },
};

export const why: { id: string; heading: string; items: NumberedListItem[] } = {
  id: 'why',
  heading: 'Why Growing Businesses Choose Fadeaway',
  items: [
    {
      title: 'Clear Pricing & Deliverable Transparency',
      text: "Fixed pricing, defined scope, no guesswork. You'll know exactly what you're getting and what it costs before we start.",
    },
    {
      title: 'Revenue-First',
      text: 'We track bookings, sales, and customers walking through the door, not traffic or impressions.',
    },
    {
      title: 'Future-Proof',
      text: 'SEO and AEO built to scale as your business grows, not just launch and fade.',
    },
    {
      title: 'Reliable Growth Partner',
      text: 'Enterprise-level work, real engineering and real strategy, at small-business-reasonable pricing.',
    },
  ],
};

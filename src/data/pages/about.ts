// About page content, copied word for word from copy/about.md. The entity page: Organization, the founder's
// Person schema and AboutPage live here, and every fact matches site.ts, the footer and the homepage.
import { routes } from '../routes';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { FactItem } from '../../components/blocks/FactList.astro';
import type { SpecItem } from '../../components/blocks/SpecGrid.astro';
import type { IconGridItem } from '../../components/blocks/IconGrid.astro';
import type { LinkCardItem } from '../../components/blocks/LinkCards.astro';
import type { FaqItem } from '../../components/blocks/Faq.astro';

export const seo = {
  title: 'About Fadeaway Creatives | Founder-Led Growth Partners',
  description:
    'Fadeaway Creatives is a founder-led growth partner in Vancouver, BC, building websites, SEO, AEO, and AI systems for businesses across Canada and the US.',
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'About', href: routes.about },
];

/** AEO answer capsule: the wide intro of the first section after the Hero */
export const answerCapsule =
  'Fadeaway Creatives is a founder-led growth partner based in Vancouver, BC, working with growing businesses across Canada and the United States. Founded in 2023 and backed by 15+ years of experience, we build websites, run SEO and AEO, and create custom software and AI automation through Fadeaway Labs, with fixed pricing and results measured in bookings and sales, not traffic.';

export const heroVariant: HeroVariant = 'statement';

export const hero: HeroContent = {
  displayLine: 'We take the work seriously and ourselves lightly.',
  h1: 'About Fadeaway Creatives',
  sub: "We're a founder-led growth partner for growing businesses across Canada and the US. We build the websites, search visibility, and AI systems that bring in customers, so owners can get back to running the business.",
  primaryCta: { label: 'Get Your Free Audit', href: routes.audit },
  secondaryCta: { label: 'See How We Work', href: '#how-we-work' },
  breadcrumb,
  // Placeholder art until a founder or team photo exists (the name comes from the basketball shot)
  visual: 'court',
};

/** The page's main AEO asset: one fact per line, plain text */
export const glance: { id: string; heading: string; items: FactItem[] } = {
  id: 'at-a-glance',
  heading: 'Fadeaway at a Glance',
  items: [
    { term: 'Founded', value: '2023' },
    { term: 'Based in', value: 'Vancouver, British Columbia, Canada' },
    { term: 'Works with', value: 'growing businesses across Canada and the United States' },
    { term: 'Led by', value: 'Bhav Bains, founder, 15+ years of experience' },
    { term: 'What we do', value: 'websites and builds, SEO and AEO, custom software and AI automation (Fadeaway Labs)' },
    {
      term: 'Industries we know best',
      value: 'e-commerce brands, wellness and counselling practices, boutique fitness studios, sports programs',
    },
    { term: 'How we price', value: 'fixed pricing, scope agreed before work starts, no hourly billing' },
    { term: 'How we measure success', value: 'bookings, sales, and customers, not traffic or impressions' },
  ],
};

export const whyFadeaway = {
  id: 'why-fadeaway',
  heading: 'Why "Fadeaway"',
  paragraphs: [
    "The name comes from basketball. A fadeaway is one of the hardest shots in the game to guard. It takes years of footwork, balance, and practice, and when it's done right, it looks effortless.",
    "That's how we think about our work. The engineering, research, and strategy underneath are deep. What you see on top is simple: a site that works, customers who find you, and pricing you understood before we started.",
  ],
};

export const beliefs: { id: string; heading: string; items: SpecItem[] } = {
  id: 'beliefs',
  heading: 'What We Believe',
  items: [
    {
      title: 'Growing businesses deserve enterprise-level work',
      text: 'Real engineering, real strategy, and real results, without enterprise overhead or enterprise complexity.',
    },
    {
      title: 'Pricing should never be a guessing game',
      text: "Fixed prices, defined scope, and clear deliverables before any work starts. You'll always know exactly what you're getting.",
    },
    {
      title: 'Results mean customers, not charts',
      text: 'We measure ourselves by bookings, sales, and revenue. Traffic and impressions only matter when they turn into customers walking through the door.',
    },
    {
      title: 'Built to last, not just to launch',
      text: "Every site, system, and search strategy is built to hold up as your business grows, including for AI search, not just today's Google.",
    },
    {
      title: 'Knowledge should be shared',
      text: 'We publish what we know: the strategies, the reasons behind what works, and the problems we see over and over. Clients still hire us, because doing the work well is where the real value is.',
    },
    {
      title: 'We fix the front door',
      text: "We don't replace the booking system, CRM, or registration software you already run. We build the website and presence in front of it and wire it in.",
    },
  ],
};

/** Founder card. Photo and LinkedIn are open items (copy/about.md); the card renders without them. */
export const founder = {
  id: 'founder',
  // Hidden for launch (founder, Oct 4): becomes a team section later. Flip to true to show the card again.
  show: false,
  heading: 'Meet the Founder',
  name: 'Bhav Bains',
  title: 'Founder',
  bio: 'Bhav has spent more than 15 years building websites, search strategies, and digital systems for businesses, and started Fadeaway Creatives in 2023 to give growing businesses the kind of work usually reserved for companies with enterprise budgets. He still leads strategy directly, personally leads our sports and combat sports work, and spends as much time as he can in the lab building what comes next.',
};

export const howWeWork: { id: string; heading: string; items: IconGridItem[] } = {
  id: 'how-we-work',
  heading: 'How We Work',
  items: [
    {
      icon: 'award',
      title: 'Founder-led, always',
      text: "Strategy and client relationships stay with the founder. You're never handed off to someone who doesn't know your business.",
    },
    {
      icon: 'workflow',
      title: 'The right specialists for each project',
      text: "A core team plus specialist contractors matched to what your project actually needs, so you get deep skill in each area without paying for people you don't use.",
    },
    {
      icon: 'map',
      title: 'A playbook for your industry',
      text: 'Every industry we serve has its own research, systems, and proven process. We never start your project from zero, and you never pay for us to learn how businesses like yours work.',
    },
  ],
};

export const whoWeWorkWith: { id: string; heading: string; items: LinkCardItem[] } = {
  id: 'who-we-work-with',
  heading: 'Who We Work With',
  items: [
    {
      title: 'E-commerce',
      text: 'Online stores that need to turn browsers into buyers.',
      links: [{ label: 'E-commerce', href: routes.ecommerce }],
    },
    {
      title: 'Wellness & Counselling',
      text: 'Therapists, counsellors, chiropractors, and wellness practices ready to be found beyond the directories.',
      links: [{ label: 'Wellness & Counselling', href: routes.wellnessCounselling }],
    },
    {
      title: 'Boutique Fitness',
      text: 'Yoga, pilates, spin, and barre studios that want every class full.',
      links: [{ label: 'Boutique Fitness', href: routes.boutiqueFitness }],
    },
    {
      title: 'Sports Programs',
      text: 'Clubs, academies, combat sports gyms, and camps that want parents to find them first.',
      links: [{ label: 'Sports Academies', href: routes.sports }],
    },
    {
      title: 'Fadeaway Labs',
      text: 'MVPs, automation, custom apps, and AI setup for anyone building something new.',
      links: [{ label: 'Fadeaway Labs', href: routes.labs }],
    },
    {
      title: 'Any Growing Business',
      text: 'Websites and growth work for businesses outside these industries, scoped to your market.',
      links: [
        { label: 'Build Services', href: routes.build },
        { label: 'Growth Services', href: routes.growth },
      ],
    },
  ],
};

/** Real Work: WorkGrid from getRealWork(tag): case studies with this tag first, then featured and labs work (portfolio.yaml), max `limit`. Renders nothing when none match. */
export const realWork = {
  id: 'real-work',
  heading: "Work We're Proud Of",
  intro: "We'd rather show you than tell you.",
  tag: 'featured',
  limit: 3,
  link: { label: 'View Full Portfolio', href: routes.portfolio },
} as const;

/** Also feeds the FAQPage schema */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'Who founded Fadeaway Creatives?',
      a: 'Fadeaway Creatives was founded in 2023 by Bhav Bains, who brings more than 15 years of experience in web development, search, and digital growth. The company is still founder-led today: he works directly on strategy and client relationships, supported by a core team and specialist contractors matched to each project.',
    },
    {
      q: 'Where is Fadeaway Creatives based?',
      a: 'Fadeaway Creatives is based in Vancouver, British Columbia, and works with businesses across Canada and the United States. Everything we do runs remotely, from audits and strategy calls to builds and launches, so we build for how your specific local market searches, wherever your business is.',
    },
    {
      q: 'Why is it called Fadeaway?',
      a: "The name comes from basketball. A fadeaway is one of the hardest shots in the game to guard: it takes years of footwork and practice, and done right, it looks effortless. That's the standard we hold our own work to, deep skill underneath and a clean, simple result on top.",
    },
    {
      q: 'What does Fadeaway Creatives do?',
      a: 'We build websites, run SEO and AEO so businesses get found on Google and in AI answers, and create custom software and AI automation through Fadeaway Labs. We know e-commerce, wellness and counselling, boutique fitness, and sports programs best, and every project runs on fixed pricing agreed before work starts.',
    },
    {
      q: 'How is the work done?',
      a: 'Every client gets founder-led strategy, a core team, and specialist contractors matched to the project. Each industry we serve has its own proven playbook, research, and systems, so we never start your project from zero, and you never pay for us to learn how businesses like yours work.',
    },
  ],
};

export const cta = {
  id: 'cta',
  heading: "Let's Talk About Your Business",
  text: 'Start with a free audit and see exactly where you stand, or book a call and tell us what you\'re working on.',
  cta: { label: 'Get Your Free Audit', href: routes.audit },
  link: { label: 'Book a Call', href: routes.contact },
};

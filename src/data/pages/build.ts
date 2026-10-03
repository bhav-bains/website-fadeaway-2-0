// Build Services page content, copied word for word from copy/build.md.
// Blocks never contain copy; they render what this file gives them.
// Pricing: no numbers anywhere on this page (every build is scoped and quoted).
import { routes } from '../routes';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { SpecItem } from '../../components/blocks/SpecGrid.astro';
import type { ServiceRowItem } from '../../components/blocks/ServiceRows.astro';
import type { CardGridItem } from '../../components/blocks/CardGrid.astro';
import type { StepItem } from '../../components/blocks/Steps.astro';
import type { FeatureListItem } from '../../components/blocks/FeatureList.astro';
import type { FaqItem } from '../../components/blocks/Faq.astro';
import { labs as homeLabs } from './home';

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

/** AEO answer capsule: the wide, offset intro of the first section after the Hero */
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

export const standard: { id: string; heading: string; intro: string; items: SpecItem[] } = {
  id: 'standard',
  heading: 'Built Right, From Day One',
  // Added Oct 2 (24/7 salesperson framing); renders after the answer capsule
  intro: "We build your 24/7 salesperson: a site that answers questions, handles doubts, and books the next step while you're busy.",
  items: [
    {
      title: 'AEO & SEO Built In',
      text: 'Schema markup, structured data, and answer-ready content from launch, not bolted on later.',
    },
    {
      title: 'Clean, Intuitive UX/UI',
      text: 'Designed so your customers find what they need and take action, not just something that looks good.',
    },
    {
      title: 'Custom-Designed for Your Brand',
      text: 'Every site is designed around your brand, never pulled from a generic, reused template.',
    },
    {
      title: 'Built to Load Fast for Your Customers',
      text: 'Performance that holds up under real traffic, not just a lab test score.',
    },
    {
      title: 'Secure & Scalable',
      text: 'Built to handle growth and stay protected as your business scales, not rebuilt when you outgrow it.',
    },
    {
      title: 'Mobile-First Responsive Design',
      text: 'Built for how your customers actually browse, not adapted afterward.',
    },
  ],
};

export const services: { id: string; eyebrow: string; heading: string; items: ServiceRowItem[] } = {
  id: 'services',
  eyebrow: 'What We Build',
  heading: 'Start Fresh, Rebuild, or Move Without Losing a Thing',
  items: [
    {
      title: 'Custom Web Development',
      text: "When your business runs on more than a standard template can handle, we build your website from scratch around exactly what you need. That means custom functionality, integrations with the tools you already use, and a site structured the way your business actually works, not squeezed into someone else's layout.",
      art: 'custom',
    },
    {
      title: 'Website Redesign',
      text: "If your current site is holding your business back, we rebuild it properly. We keep what already works, like your search rankings and content, and fix what doesn't, so the new site converts visitors instead of losing them.",
      art: 'redesign',
    },
    {
      title: 'E-commerce Store Builds',
      text: 'We build the full storefront and checkout experience, not just a homepage. That includes clean product and category structure that scales as your catalog grows, a headless setup with a custom storefront when you need full design control, fast page loads, and a checkout flow designed to reduce abandoned carts, not just look good in a demo.',
      art: 'store',
      link: { label: 'See how we build and grow online stores', href: routes.ecommerce },
    },
    {
      title: 'Website Migration',
      text: 'Migrations are the moment most businesses lose the search visibility they worked years to build, and the moment messy backend data becomes impossible to ignore. We handle the technical migration end to end, cleaning up disorganized databases and content along the way, so your rankings, redirects, and content move with you instead of disappearing or dragging old problems into the new site.',
      art: 'migration',
    },
  ],
};

export const industries: {
  id: string;
  heading: string;
  intro: string;
  items: CardGridItem[];
  demo: { lead: string; text: string; link: { label: string; href: string } };
  audit: { text: string; cta: { label: string; href: string } };
} = {
  id: 'industries',
  heading: 'Tailor-Made Solutions for Your Industry',
  intro: 'Every industry searches, sells, and converts differently. Pick yours below to see exactly how we build for it.',
  items: [
    {
      title: 'E-commerce',
      body: 'Online stores live and die by conversion. We build storefronts that turn browsers into buyers, not just another product page.',
      link: { label: 'See E-commerce Work', href: routes.ecommerce },
      illustration: 'ecommerce',
    },
    {
      title: 'Wellness & Counselling',
      body: 'Therapists, counsellors, chiropractors, and wellness practices run on booked appointments. We build sites that keep that calendar full.',
      link: { label: 'See Wellness & Counselling Work', href: routes.wellnessCounselling },
      illustration: 'wellness',
    },
    {
      title: 'Boutique Fitness',
      body: 'Every empty spot in a class is lost revenue. We build sites for yoga, pilates, spin, and barre studios that keep classes booked solid.',
      link: { label: 'See Boutique Fitness Work', href: routes.boutiqueFitness },
      illustration: 'fitness',
    },
    {
      title: 'Sports Academies',
      body: 'Clubs, academies, combat sports gyms, and camps grow when parents can find them. We build sites that make it easy to find you and sign up, connected to the registration software you already use.',
      link: { label: 'See Sports Work', href: routes.sports },
      illustration: 'sports',
    },
  ],
  demo: {
    lead: 'Fitness studio, wellness practice, or sports academy?',
    text: "We'll build you a free custom demo first.",
    link: { label: 'Request Your Free Demo', href: routes.demoRequest },
  },
  // /audit isn't built; audit CTAs go to Contact (routes.audit)
  audit: { text: 'Not sure which fits?', cta: { label: 'Get Your Free Audit', href: routes.audit } },
};

/** Also feeds the HowTo schema (title + text; the step link is not part of it) */
export const howItWorks: { id: string; heading: string; items: StepItem[] } = {
  id: 'how-it-works',
  heading: 'How It Works',
  items: [
    {
      title: 'Initial Audit and Scope of Work',
      text: "We start by understanding your business, your industry, and what your current site is or isn't doing for you. Based on that, we map out whether a proven approach for your niche fits or whether the project calls for something built from scratch, always with a clear scope of work and clear deliverables.",
    },
    {
      title: 'Build and Launch',
      text: 'We work in three phases. First, deep research, covering keywords, content strategy, site structure, and getting the site ready for both search engines and AI search from day one. Second, design, covering the look, feel, and user experience that matches your brand. Third, development, covering building, testing, and securing the site before it goes live.',
    },
    {
      title: 'Growth',
      text: "A website is the starting point, not the finish line. Once you're live, we move into ongoing SEO and AEO work under a Growth Plan, so the traffic and rankings keep building.",
      link: { label: 'How Growth works', href: routes.growth },
    },
  ],
};

export const pricing: {
  id: string;
  heading: string;
  intro: string;
  items: FeatureListItem[];
  cta: { label: string; href: string };
} = {
  id: 'pricing',
  heading: 'How Pricing Works',
  intro:
    'Every build is scoped and priced before we start. You get a written scope of work, a fixed price for that scope, and a launch timeline you can plan around. No hourly billing, no surprise invoices.',
  items: [
    {
      icon: 'search-ai',
      title: 'Start With a Full Audit',
      text: "Most builds start with a Full Audit that maps what your current site is and isn't doing for you. If you move ahead with the build, the audit fee is credited toward it, so you never pay twice for the same work.",
    },
    {
      icon: 'price-tag',
      title: 'Priced Around Your Project',
      text: "Custom builds, migrations, and e-commerce stores are each quoted on what your project actually needs, not squeezed into a package that doesn't fit. Audit and plan pricing for fitness, wellness, and sports is listed on those industry pages, and e-commerce is quoted per scope.",
    },
  ],
  cta: { label: 'Get a Quote', href: routes.contact },
};

/** ProofGrid of case studies tagged `build`. Hidden in production until /portfolio exists; always visible in dev. */
export const realWork = {
  id: 'real-work',
  showInProduction: false,
  heading: 'Real Work, Real Results',
  tag: 'build',
  limit: 3,
  ctaText: 'Like what you see?',
  primaryCta: { label: 'Get a Quote', href: routes.contact },
  secondaryCta: { label: 'View Full Portfolio', href: routes.portfolio },
} as const;

/** Cards reuse the homepage Labs items (copy/build.md: same four cards); heading, intro and CTA are this page's own */
export const labs = {
  id: 'labs',
  heading: 'Fadeaway Labs, for Everything Beyond a Website',
  intro:
    "Not every problem is a website problem. If your business runs on more than a site, like custom software, automations, or AI tools that actually do work for you, that's Fadeaway Labs, and we built it because we love this work.",
  items: homeLabs.items,
  cta: { label: 'Have a Custom Project in Mind?', href: routes.labs },
};

/** Also feeds the FAQPage schema */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: "What's the difference between custom web development and a website redesign?",
      a: "Custom web development is built from scratch around a workflow no template can handle, like unique functionality or specific integrations. A website redesign rebuilds your existing site properly, keeping what already works, like your search rankings and content, and fixing what doesn't.",
    },
    {
      q: 'Can you migrate my site without losing my Google rankings?',
      a: 'Yes. Migrations are the moment most businesses lose the search visibility they built over years, so we handle the technical migration end to end, including cleaning up messy backend data, so your rankings, redirects, and content move with you instead of disappearing.',
    },
    {
      q: 'Do you build on Shopify or WooCommerce?',
      a: 'We build on Shopify, WooCommerce, fully custom platforms, and headless setups with a decoupled storefront, depending on what fits your business. The right platform depends on your catalog size, your budget, and how much control you need over the backend.',
    },
    {
      q: 'What if I need custom software instead of a website?',
      a: "That's exactly what Fadeaway Labs handles. Custom software, business process automation, AI setup, dashboards, and MVPs taken from idea to launch all live there, separate from website builds. If you're not sure which one you need, the Full Audit or a quick call will tell you.",
    },
    {
      q: 'How long does a website project take?',
      a: 'Every project gets a written scope of work before anything starts, and that scope includes the timeline, so you know when your site launches before you commit. A focused redesign moves faster than a custom build or a large migration, and your timeline is set around your actual scope, not a template.',
    },
    {
      q: 'How much does a custom website cost?',
      a: 'Every build is scoped and priced before we start. You get a written scope of work and a fixed price for that scope, never hourly billing. Most projects start with a Full Audit, and if you move ahead with the build, the audit fee is credited toward it.',
    },
  ],
};

/** From the Blog (tag build): renders nothing until /resources has real Build posts */
export const blog = {
  id: 'blog',
  heading: 'From the Blog',
  intro: 'Real, practical answers to the website questions we hear most.',
  tag: 'build',
  cta: { label: 'View All Resources', href: routes.resources },
} as const;

/** Service JSON-LD entries (copy/build.md frontmatter `schema`). No prices. */
export const serviceNames = ['Custom Web Development', 'Website Redesign', 'E-commerce Store Builds', 'Website Migration'];

export const cta = {
  id: 'cta',
  heading: 'Ready to Build Something Real?',
  text: "Tell us what you're building, and we'll map out the scope and cost before anything starts.",
  cta: { label: 'Get a Quote', href: routes.contact },
};

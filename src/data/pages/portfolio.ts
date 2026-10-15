// Portfolio page (/portfolio/), copied word for word from copy/portfolio.md (draft, awaiting approval).
// Projects are never written here: every card comes from src/content/portfolio.yaml through getWork() (src/lib/work.ts).
import { routes } from '../routes';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { FaqItem } from '../../components/blocks/Faq.astro';
import type { WorkGroup } from '../../lib/work';

export const seo = {
  title: 'Web Design, SEO, AEO & Growth Portfolio | Fadeaway Creatives',
  description:
    'Web design, SEO, AEO and growth work by Fadeaway Creatives: custom websites, e-commerce stores and Labs products for businesses across Canada and the US.',
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Portfolio', href: routes.portfolio },
];

export const heroVariant: HeroVariant = 'statement';

export const hero: HeroContent = {
  displayLine: 'Built, launched, still growing.',
  eyebrow: 'Portfolio',
  h1: 'Web Design, SEO, AEO and Growth Portfolio',
  sub: "From custom websites and e-commerce stores to SEO, AEO and lead generation: work we've built and grown for businesses across Canada and the US.",
  breadcrumb,
  visual: 'layers',
};

export const answerCapsule =
  'The Fadeaway Creatives portfolio covers custom websites, redesigns and migrations, e-commerce stores (Shopify stores and more), SEO and AEO, and growth campaigns for growing businesses across Canada and the US. It also includes our own Fadeaway Labs products, like JabJab MMA and Anvido, built from idea to MVP.';

/** Jump links under the Hero, in page order. `id` is the section or group anchor; links to empty sections are dropped. */
export const jumpNav = {
  label: 'Portfolio sections',
  links: [
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'Featured', id: 'featured' },
    { label: 'From the Lab', id: 'labs' },
    { label: 'E-commerce', id: 'ecommerce' },
    { label: 'Practices & Local', id: 'practices' },
    { label: 'SaaS & Enterprise', id: 'saas' },
    { label: 'Organizations', id: 'organizations' },
  ],
};

export const caseStudies = {
  id: 'case-studies',
  eyebrow: 'Case Studies',
  heading: 'From Problem to Results',
  intro: 'What each client needed, what we built, and what changed.',
  link: { label: 'See All Case Studies', href: routes.caseStudies },
};

/** Card labels shared by the Featured and Lab cards */
export const cardLabels = {
  visitSite: 'Visit Site',
  readCaseStudy: 'Read the Case Study',
  newTab: 'opens in a new tab',
  status: { live: 'Live', beta: 'Beta', alpha: 'Alpha' },
  internal: 'Internal',
};

export const featured = {
  id: 'featured',
  eyebrow: 'Featured Work',
  heading: 'Websites, Stores and Growth Programs',
  intro: "A closer look at websites, stores and growth programs we've delivered.",
};

export const labs = {
  id: 'labs',
  eyebrow: 'Fadeaway Labs',
  heading: 'From the Lab',
  intro: 'Products we build from idea to MVP, for ourselves and for clients.',
  link: { label: 'Explore Fadeaway Labs', href: routes.labs },
};

export const moreWork = {
  id: 'more-work',
  heading: 'More of Our Work',
  groups: [
    { group: 'ecommerce', heading: 'E-commerce' },
    { group: 'practices', heading: 'Practices & Local Businesses' },
    { group: 'saas', heading: 'SaaS & Enterprise' },
    { group: 'organizations', heading: 'Organizations' },
  ] as { group: WorkGroup; heading: string }[],
  /**
   * First line under the E-commerce heading. Each part names a portfolio.yaml entry (`work`) and renders only while
   * that entry is visible: "Featured above: [CenturionPro → #featured]. Full story: [HeartStamp → case study]."
   */
  ecommerceNote: [
    { prefix: 'Featured above:', label: 'CenturionPro', work: 'cpro-solutions', href: '#featured' },
    { prefix: 'Full story:', label: 'HeartStamp', work: 'heartstamp', href: `${routes.caseStudies}heartstamp/` },
  ],
};

/** Also feeds the FAQPage schema */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'How does a project with Fadeaway start?',
      a: "Most projects start with a free audit or a short call. We look at what you have, what's holding it back, and what you need, then send a written scope with a fixed price before any work starts. Website builds, redesigns, migrations and ongoing growth work are all scoped this way.",
    },
    {
      q: 'Can you rebuild a website we already have?',
      a: 'Yes. Many projects listed here, like CenturionPro and Crane Mountain Dental, replaced an older site that had stopped performing. We rebuild on a modern, modular setup with SEO and AEO built in, and we carry your content, links and search visibility over carefully so nothing important is lost along the way.',
    },
    {
      q: 'What is Fadeaway Labs?',
      a: 'Fadeaway Labs is where we build software: MVPs, automations, AI tools and web apps. Some are for clients, and some are our own products, like JabJab MMA and Anvido. If you have a product idea or a process you want automated, we can take it from idea to a working first version.',
    },
  ],
};

export const cta = {
  heading: 'Want Work Like This for Your Business?',
  text: "Start with a free audit of your website. We'll show you what's working, what isn't, and what to fix first.",
  button: 'Get Your Free Audit',
};

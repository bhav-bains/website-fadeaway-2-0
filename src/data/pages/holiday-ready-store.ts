// Holiday-Ready Store Sprint landing page, copied word for word from copy/holiday-ready-store.md
// (approved by the founder Nov 4 2026; the copy is final). Campaign page: runs through Nov 30, 2026.
// NO PRICE anywhere on the page or in the schema (founder): the price is shared on the call.
import { routes } from '../routes';
import { siteConfig } from '../site';
import { campaignHref } from '../campaign';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { StepItem } from '../../components/blocks/Steps.astro';
import type { FaqItem } from '../../components/blocks/Faq.astro';
import type { ChecklistItem } from '../../components/blocks/ChecklistGrid.astro';

export const seo = {
  title: 'Holiday-Ready Store Sprint for Online Stores | Fadeaway',
  description:
    'A 3-month sprint for online stores: a free audit, up to 10 priority fixes, checks through the rush, and a growth plan for the new year.',
  // TODO (share image): page-specific 1200 x 630 image (Canva) for og:image / twitter:image. Until it exists the page
  // uses the sitewide default (public/og-default.jpg). Set `ogImage` here to the imported image when it arrives.
  ogImage: undefined as string | undefined,
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Holiday-Ready Store Sprint', href: routes.holidayReadyStore },
];

/** AEO answer capsule: real text directly under the Hero */
export const answerCapsule =
  'The Holiday-Ready Store Sprint is a 3-month program for online stores. We start with a free audit, then fix up to 10 priority problems, watch your store through Black Friday and Cyber Monday, and build a growth plan for the new year. Once you sign and we have store access, work starts right away.';

export const heroVariant: HeroVariant = 'statement';

/** Primary button: the free audit (tagged link). Secondary: the site's existing booking link (never a new one). */
export const hero: HeroContent = {
  eyebrow: 'Holiday-Ready Store Sprint',
  h1: 'Get your online store ready for the holiday rush',
  sub: 'An accelerated growth plan for ecommerce stores. We check your store, fix the biggest problems first, and set up the tracking that keeps it selling after the holidays.',
  primaryCta: { label: 'Get your free Instant Audit', href: campaignHref(routes.audit, { content: 'hero' }) },
  secondaryCta: { label: 'Book a call', href: siteConfig.bookingUrl },
  breadcrumb,
  visual: 'ecommerce',
};

/** Trust line under the hero buttons */
export const trustLine = 'For Shopify, WooCommerce, BigCommerce, Wix, Squarespace and custom stores in Canada and the US.';

// ---------- Who is it for ----------

export const who = {
  id: 'who',
  heading: 'Who is the Holiday-Ready Store Sprint for?',
  intro:
    "Owners and teams running an online store on Shopify, WooCommerce, BigCommerce, Wix, Squarespace or a custom build, in Canada or the US. You know your store could sell more, and you don't have the time or the people to fix it before the holidays.",
  fitLead: "It's a good fit if:",
  fit: [
    'Shoppers visit your store, but too few of them order.',
    "You're not sure what is slowing your store down or where shoppers give up.",
    "You don't fully trust your tracking, so you can't tell what is working.",
    "You'd rather approve a clear list of fixes than do all the work yourself.",
  ],
  notFit:
    "It's not the right fit if you want a full redesign or a move to a new platform before Black Friday. That kind of work needs more time, so we plan it for the first quarter of next year.",
};

// ---------- Why start now ----------

export const whyNow = {
  id: 'why-now',
  heading: 'Why start now?',
  paragraphs: [
    'Black Friday is November 27 and Cyber Monday is November 30. In Canada, Boxing Day on December 26 brings a second rush.',
    'Most stores stop changing their site about a week before the sale, because a small change made late can break checkout on the busiest days. The earlier we start, the more fixes get done and tested before it.',
  ],
};

// ---------- The deliverables ----------

export const deliverables: { id: string; heading: string; intro: string; items: ChecklistItem[] } = {
  id: 'deliverables',
  heading: 'The Deliverables',
  intro:
    'The Sprint runs in three parts: fix the biggest problems before the rush, track the right data on your store through the rush, and build a growth strategy for the new year. Technical SEO and on-page SEO updates are part of the work.',
  items: [
    {
      title: 'Foundation Fix',
      lead: 'Get your store ready for the rush.',
      points: [
        'A kickoff call, and access to your store, analytics, Search Console, Merchant Center and ad accounts.',
        'A deep check of your store: speed, product pages, cart and checkout, tracking, search setup, Merchant Center, shipping and policies.',
        'A ranked action plan. Every task has an owner: us, you or your developer.',
        'Up to 10 priority fixes, ranked from the check and approved by you before we change anything.',
        'Technical SEO fixes: search indexing, Merchant Center and product data.',
        'A backup and a change-freeze plan before the rush.',
      ],
    },
    {
      title: 'Analytics and campaigns',
      lead: 'Know what is working while the rush is on.',
      points: [
        'Analytics checked and fixed, so your sales and the key steps to a sale are counted properly.',
        'A review of the campaigns you already run, such as Google Shopping, Google Ads, Meta and email, so each one points to the right page, has the right tracking and shares the right content.',
        'A live dashboard with your sales, traffic and conversion.',
        'Checks through Black Friday, Cyber Monday and Boxing Day.',
        'Quick fixes if something breaks.',
        'A weekly check-in.',
        'December shipping cutoff and returns messaging on your site.',
      ],
    },
    {
      title: 'Growth strategy',
      lead: 'Turn what the holidays taught you into a plan.',
      points: [
        'A holiday results review: what sold, where shoppers dropped off and what broke.',
        'Conversion improvements on the pages that matter most.',
        'On-page SEO updates for your products and collections, so search engines and AI assistants can find and describe them.',
        'A 3 to 6 month growth plan.',
      ],
    },
  ],
};

// ---------- How do you get started (feeds HowTo schema) ----------

export const howItWorks: { id: string; heading: string; items: StepItem[] } = {
  id: 'how-it-works',
  heading: 'How do you get started?',
  items: [
    {
      title: 'Get your free Instant Audit.',
      text: 'Send us your store address. We look at your store and send you a short report on what is working, what may be costing you sales, and what to fix first.',
    },
    {
      title: 'Book a call.',
      text: 'On a 15-minute call, we walk through your report and show how the Sprint would work for your store.',
    },
    {
      title: 'Get started the next day.',
      text: 'Once you sign and give us access to your accounts, we start the next day. We set up a shared folder and task list so everyone can see what is happening. Then we run the deep check, build your ranked action plan and fix things in priority order. You approve each fix before we make it.',
    },
  ],
};

// ---------- FAQ (also feeds the FAQPage schema, word for word) ----------

export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'Is the Instant Audit free?',
      a: "Yes. Send us your store address and we send back a short report on what is working, what may be costing you sales, and what to fix first. There is no cost and no obligation. If you'd like help with the fixes, we can talk through the Sprint on a 15-minute call.",
    },
    {
      q: 'How much does the Sprint cost?',
      a: "It's one fixed monthly price for the 3 months, so there are no surprises. We share the price on our call after your audit results. Ad spend is separate, and you pay Google and Meta directly. That price covers the work in all three parts, from the first fix to the growth plan.",
    },
    {
      q: 'Do I need a developer?',
      a: 'Not for most of the work. We handle the fixes we can, and the action plan shows who does what: us, you or your developer. If a fix needs a developer, we tell you what it is and why, and you decide. Bigger projects, like a redesign, are quoted separately.',
    },
    {
      q: 'Is my store safe while you work on it?',
      a: 'Yes. We back up your store before we change anything, and you approve each fix first. We test every change on a phone and a laptop, and we plan a change freeze before the busiest days, so nothing breaks during your sale.',
    },
    {
      q: 'Can you guarantee more sales or higher rankings?',
      a: "Results depend on your store, your market and where you start, so we don't promise sales or rankings. What we do promise is clear deliverables, fixes you approve, honest reporting, and a growth strategy built from your own numbers. We also check in every week, so you always know where things stand.",
    },
    {
      q: 'What happens after the 3 months?',
      a: "You keep everything we set up, including your fixes, your tracking and your growth plan. The plan lays out what to do next. If you'd like help carrying it out, we can talk about ongoing work, but there is no obligation to continue.",
    },
  ],
};

// ---------- Closing CTA ----------

export const cta = {
  id: 'cta',
  heading: 'Ready to get your store holiday-ready?',
  text: "Start with a free Instant Audit. You'll see what is working, what may be costing you sales, and what to fix first. Then we can talk about the Sprint.",
  primary: { label: 'Get your free Instant Audit', href: campaignHref(routes.audit, { content: 'final-cta' }) },
  secondary: { label: 'Book a call', href: siteConfig.bookingUrl },
};

/** Service schema: one Service, no price, no offers */
export const serviceNames = ['Holiday-Ready Store Sprint'];

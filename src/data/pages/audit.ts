// Free (Instant) Audit page, success page and the audit CTA block, copied word for word from copy/audit.md
// (approved Oct 1). Checks are listed SEO + AEO first (sitewide positioning rule).
import { routes } from '../routes';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { FormContent } from '../../components/blocks/FormHero.astro';
import type { FeatureListItem } from '../../components/blocks/FeatureList.astro';
import type { StepItem } from '../../components/blocks/Steps.astro';
import type { FaqItem } from '../../components/blocks/Faq.astro';
import type { LinkIndexItem } from '../../components/blocks/LinkIndex.astro';

export const seo = {
  title: 'Free Website Audit | Fadeaway Creatives',
  description:
    "A free audit of your website's SEO and AEO readiness, performance, site structure, and on-page copy, in a branded report within 24 hours.",
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Free Audit', href: routes.audit },
];

/** AEO answer capsule: the wide intro of the first section after the Hero */
export const answerCapsule =
  "The Fadeaway Creatives Instant Audit is a free review of your website for businesses across Canada and the US. It checks your SEO and AEO readiness, performance, site structure, and on-page copy, then sends the findings in a branded report within 24 hours, with clear priorities for what to fix first. There's no cost and no obligation.";

export const hero = {
  eyebrow: 'Free Instant Audit',
  h1: 'Get a Free Website Audit',
  sub: 'See how ready your site is for Google and AI search, how fast it loads, and how well it turns visitors into customers. Your branded report arrives within 24 hours.',
};

/** Netlify Forms: name `audit-request`. `website` is pre-filled from ?website= (sent by the AuditCta block). */
export const form: FormContent = {
  name: 'audit-request',
  action: routes.auditSuccess,
  fields: [
    { name: 'website', label: 'Your website', type: 'url', required: true, autocomplete: 'url', placeholder: 'yourbusiness.com' },
    { name: 'name', label: 'Your name', type: 'text', required: true, autocomplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
    { name: 'business', label: 'Business name', type: 'text', required: true, autocomplete: 'organization' },
    {
      name: 'concerns',
      label: "What's not working right now? (optional)",
      type: 'textarea',
      placeholder: 'Not enough enquiries, slow pages, not showing up on Google...',
    },
  ],
  submit: 'Get My Free Audit',
  note: "Free, with no obligation. We'll only use your details to send your report.",
  footer: { text: 'Starting from scratch?', link: { label: 'Get a Quote', href: routes.contact } },
};

export const checks: { id: string; heading: string; items: FeatureListItem[] } = {
  id: 'checks',
  heading: 'What We Check',
  items: [
    {
      icon: 'search-ai',
      title: 'SEO & AEO Readiness',
      text: 'Whether Google and AI search tools like ChatGPT and Perplexity can read your site, understand what you offer, and recommend you.',
    },
    {
      icon: 'gauge',
      title: 'Performance',
      text: 'How fast your pages load and how they hold up on phones, where most of your customers are browsing.',
    },
    {
      icon: 'map',
      title: 'Site Structure',
      text: 'How your pages, navigation, and internal links are organized, and whether visitors and search engines can find what matters.',
    },
    {
      icon: 'megaphone',
      title: 'On-Page Copy',
      text: 'Whether your headlines, service pages, and calls to action speak to your customers and give them a clear reason to get in touch.',
    },
  ],
};

/** Also feeds the HowTo schema */
export const howItWorks: { id: string; heading: string; items: StepItem[] } = {
  id: 'how-it-works',
  heading: 'How It Works',
  items: [
    { title: 'Share your site', text: 'Enter your website and a few details. It takes about a minute.' },
    {
      title: 'We run your audit',
      text: 'We review your SEO and AEO readiness, performance, site structure, and on-page copy.',
    },
    {
      title: 'Get your report',
      text: "Within 24 hours, you get a branded report showing what's working, what isn't, and what to fix first.",
    },
  ],
};

/** Also feeds the FAQPage schema */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'Is the website audit really free?',
      a: "Yes. The Instant Audit costs nothing and comes with no obligation. You get the full report either way, and it's yours to keep and act on, whether you work with us or not.",
    },
    {
      q: "What's the difference between the Instant Audit and the Full Audit?",
      a: 'The Instant Audit is a high-level check of the four areas that matter most, delivered within 24 hours. The Full Audit is a paid, in-depth review with keyword research and a detailed action plan, and if you move ahead with a build, its fee is credited toward it.',
    },
    {
      q: 'What do you need from me?',
      a: "Just your website address and where to send the report. If you tell us what isn't working right now, we'll look at that first.",
    },
  ],
};

// ---------- Audit CTA block (other pages; first placement: Build, after #services) ----------

export const auditCta = {
  heading: 'Not Sure What Your Current Site Needs?',
  text: 'Get a free audit of your SEO and AEO readiness, performance, site structure, and on-page copy. Your report arrives within 24 hours.',
  fieldLabel: 'Your website',
  placeholder: 'yourbusiness.com',
  button: 'Get My Free Audit',
  action: routes.audit,
  fallback: { text: 'Starting from scratch?', link: { label: 'Get a Quote', href: routes.contact } },
};

// ---------- Success page (/audit-success/, noindex) ----------

export const success: {
  seo: { title: string; description: string };
  h1: string;
  text: string;
  linksHeading: string;
  links: LinkIndexItem[];
  button: { label: string; href: string };
} = {
  seo: { title: 'Audit Requested | Fadeaway Creatives', description: 'Your audit request is in.' },
  h1: 'Your Audit Request Is In',
  text: "Thanks for sharing your site. We're running your audit now, and your branded report will arrive by email within 24 hours.",
  linksHeading: 'While you wait, see how we can help.',
  links: [
    { label: 'Build', href: routes.build },
    { label: 'E-commerce', href: routes.ecommerce },
  ],
  button: { label: 'Back to Home', href: routes.home },
};

// Demo Request + Demo Success page content, copied word for word from copy/demo-request.md.
// Funnel: request (this form) → we build a 2 to 4 page demo → private link + overview → follow-up.
// E-commerce has no demo (decision); those visitors are pointed to /contact.
import { routes } from '../routes';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { FieldProps } from '../../components/blocks/form/Field.astro';
import type { StepItem } from '../../components/blocks/Steps.astro';
import type { CardGridItem } from '../../components/blocks/CardGrid.astro';
import type { FaqItem } from '../../components/blocks/Faq.astro';
import type { LinkIndexItem } from '../../components/blocks/LinkIndex.astro';

export const seo = {
  title: 'Fadeaway Creatives | Free Website Demo for Your Business',
  description:
    "Fitness studios, wellness practices, and sports academies: tell us about your business and we'll build you a free custom website demo. No obligation.",
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Free Demo', href: routes.demoRequest },
];

/** AEO answer capsule: lead paragraph of the first section after the Hero */
export const answerCapsule =
  "Fadeaway Creatives builds free custom website demos for boutique fitness studios, wellness and counselling practices, and sports academies across Canada and the US. Tell us about your business, and we build a 2 to 4 page demo of your new site, based on what already works in your industry, then send you a private link to review it. There's no cost and no obligation.";

/** No CTA buttons: the form sits beside the Hero text on desktop, below it on phones */
export const hero = {
  eyebrow: 'Free Demo Build',
  h1: 'Get a Free Custom Website Demo',
  sub: 'For boutique fitness studios, wellness practices, and sports academies. See your new website before you commit to anything.',
};

/** Netlify Forms: name `demo-request`, honeypot `bot-field`, posts to the success page */
export const form: {
  name: string;
  action: string;
  fields: FieldProps[];
  submit: string;
  note: string;
  ecommerce: { text: string; link: { label: string; href: string } };
} = {
  name: 'demo-request',
  action: routes.demoSuccess,
  fields: [
    { name: 'name', label: 'Your name', type: 'text', required: true, autocomplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
    { name: 'business', label: 'Business name', type: 'text', required: true, autocomplete: 'organization' },
    {
      name: 'industry',
      label: 'Your industry',
      type: 'select',
      required: true,
      options: ['Boutique fitness studio', 'Wellness or counselling practice', 'Sports academy, club, or camp'],
    },
    { name: 'website', label: 'Current website (if you have one)', type: 'url', autocomplete: 'url' },
    {
      name: 'needs',
      label: 'What do you need most?',
      type: 'textarea',
      placeholder: 'More bookings, a site that works on phones, better Google visibility...',
    },
  ],
  submit: 'Build My Free Demo',
  note: "Free, with no obligation. We'll only use your details to send your demo.",
  ecommerce: { text: 'Running an online store?', link: { label: 'Talk to us about e-commerce', href: routes.contact } },
};

/** Also feeds the HowTo schema */
export const howItWorks: { id: string; heading: string; items: StepItem[] } = {
  id: 'how-it-works',
  heading: 'How It Works',
  items: [
    {
      title: 'Tell us about your business',
      text: 'A few details about your business and what you need. It takes about a minute.',
    },
    {
      title: 'We build your demo',
      text: 'A 2 to 4 page demo of your new website, built from what already works in your industry and shaped around your business.',
    },
    {
      title: 'Review it, no pressure',
      text: "We send you a private link to your demo and a short overview of what's included. If you love it, we make it your live site.",
    },
  ],
};

export const industries: { id: string; heading: string; items: CardGridItem[] } = {
  id: 'industries',
  heading: 'Built for Your Industry',
  items: [
    {
      title: 'Boutique Fitness',
      body: 'For yoga, pilates, spin, and barre studios, built to keep classes full and work with the booking software you already use, like Mindbody or Momence.',
      link: { label: 'See how we help boutique fitness studios', href: routes.boutiqueFitness },
      illustration: 'fitness',
    },
    {
      title: 'Wellness & Counselling',
      body: 'For therapists, counsellors, chiropractors, and wellness practices, built to fill your caseload and work with practice software like Jane App or SimplePractice.',
      link: { label: 'See how we help wellness & counselling practices', href: routes.wellnessCounselling },
      illustration: 'wellness',
    },
    {
      title: 'Sports Academies',
      body: 'For clubs, academies, combat sports gyms, and camps, built so parents can find you and sign up, connected to registration software like LeagueApps or TeamSnap.',
      link: { label: 'See how we help sports programs', href: routes.sports },
      illustration: 'sports',
    },
  ],
};

/** Also feeds the FAQPage schema */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'Is the website demo really free?',
      a: 'Yes. The demo costs nothing and comes with no obligation. We build it so you can see exactly what your new website would look like before you spend anything. If you love it and want it live, we walk you through the setup and plan options for your industry, and you decide from there.',
    },
    {
      q: "What's included in the free demo?",
      a: "A 2 to 4 page demo of your new website, built from what already works in your industry and shaped around your business, including your homepage and the pages that matter most for bookings or sign-ups. You get a private link to review it, plus a short overview of what's included.",
    },
    {
      q: 'Will the demo work with my booking or registration software?',
      a: 'Yes. Every demo is built around the software you already run on, like Mindbody, Momence, Jane App, SimplePractice, LeagueApps, or TeamSnap. Your team keeps its tools, and your customers get a smoother way to book, register, or sign up from your new website.',
    },
  ],
};

/** Final CTA: the copy's one line, split at its sentence break into heading + line (words unchanged) */
export const cta = {
  id: 'cta',
  heading: 'Not a fitness, wellness, or sports business?',
  text: "Tell us what you're working on.",
  cta: { label: 'Contact Us', href: routes.contact },
};

// ---------- Success page (/demo-success/, noindex) ----------

export const success: {
  seo: { title: string; description: string };
  h1: string;
  text: string;
  linksHeading: string;
  links: LinkIndexItem[];
  button: { label: string; href: string };
} = {
  // Description isn't in the copy file; noindex page, so it only shows if someone shares the URL
  seo: { title: 'Demo Requested | Fadeaway Creatives', description: 'Your demo request is in.' },
  h1: 'Your Demo Request Is In',
  text: "Thanks for telling us about your business. We're starting on your custom demo now, and you'll get a personal email from us with a private link to review it and a short overview of what's included.",
  linksHeading: 'While you wait, see how we work with businesses like yours.',
  links: [
    { label: 'Boutique Fitness', href: routes.boutiqueFitness },
    { label: 'Wellness & Counselling', href: routes.wellnessCounselling },
    { label: 'Sports Academies', href: routes.sports },
  ],
  button: { label: 'Back to Home', href: routes.home },
};

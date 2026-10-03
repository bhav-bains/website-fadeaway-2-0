// Contact page + success page content, copied word for word from copy/contact.md (approved Oct 2).
// Every "Get a Quote" / "Book a Call" / "Tell Us What You're Building" CTA lands here.
import { routes } from '../routes';
import { siteConfig } from '../site';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { FormContent } from '../../components/blocks/FormHero.astro';
import type { StepItem } from '../../components/blocks/Steps.astro';
import type { LinkIndexItem } from '../../components/blocks/LinkIndex.astro';

export const seo = {
  title: 'Contact Fadeaway Creatives | Start Your Project',
  description:
    'Tell us about your business and what you need: a new website, SEO and AEO, an e-commerce store, or custom software. We reply within one business day.',
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Contact', href: routes.contact },
];

export const hero = {
  eyebrow: 'Contact',
  h1: 'Contact Fadeaway Creatives',
  sub: "Tell us about your business and what you need, whether it's a new website, SEO and AEO, an e-commerce store, or custom software. We'll reply within one business day.",
  emailLabel: 'Email us directly:',
  email: siteConfig.email,
  location: siteConfig.locationLine,
  // WhatsApp (founder, Oct 2: keep it public, as on the old page)
  whatsapp: { label: 'Message us on WhatsApp', href: siteConfig.whatsapp },
};

/** Netlify form name unchanged from the old page so existing notifications keep working */
export const form: FormContent = {
  name: 'website-contact-form',
  action: routes.contactSuccess,
  fields: [
    { name: 'name', label: 'Your name', type: 'text', required: true, autocomplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
    { name: 'business', label: 'Business name', type: 'text', required: true, autocomplete: 'organization' },
    { name: 'website', label: 'Current website (if you have one)', type: 'url', autocomplete: 'url' },
    {
      name: 'interest',
      label: 'What do you need help with?',
      type: 'select',
      required: true,
      options: [
        'A new website or redesign',
        'SEO, AEO, or paid growth',
        'An e-commerce store',
        'Custom software, automation, or AI',
        'Not sure yet',
      ],
    },
    {
      name: 'message',
      label: 'Tell us a bit more',
      type: 'textarea',
      required: true,
      placeholder: "What you're working on, what isn't working, and any timing we should know about...",
    },
  ],
  submit: 'Send Message',
  note: "We reply within one business day. We'll only use your details to respond.",
  footer: { text: 'Want to start free?', link: { label: 'Get a free audit', href: routes.audit } },
};

export const nextSteps: { id: string; heading: string; items: StepItem[] } = {
  id: 'next-steps',
  heading: 'What Happens Next',
  items: [
    { title: 'We read your message', text: "We look at what you've sent, and at your current site if you have one." },
    {
      title: 'We reply within one business day',
      text: 'With a few questions, or a time for a short call if that makes more sense.',
    },
    {
      title: 'You get a clear plan',
      text: 'A written scope and a fixed price before any work starts. No hourly billing, no surprises.',
    },
  ],
};

export const startFree: { id: string; heading: string; items: { heading: string; text: string; link: { label: string; href: string } }[] } = {
  id: 'start-free',
  heading: 'Prefer to Start Free?',
  items: [
    {
      heading: 'Already Have a Website?',
      text: 'Get a free audit of your SEO and AEO readiness, performance, site structure, and on-page copy, in a branded report within 24 hours.',
      link: { label: 'Get Your Free Audit', href: routes.audit },
    },
    {
      heading: 'Fitness Studio, Wellness Practice, or Sports Program?',
      text: "We'll build you a free custom demo of your new website first, so you see it before you commit.",
      link: { label: 'Get Your Free Demo', href: routes.demoRequest },
    },
  ],
};

// ---------- Success page (/contact-success/, noindex) ----------

export const success: {
  seo: { title: string; description: string };
  h1: string;
  text: string;
  linksHeading: string;
  links: LinkIndexItem[];
  button: { label: string; href: string };
} = {
  seo: { title: 'Message Sent | Fadeaway Creatives', description: 'Your message is in.' },
  h1: 'Your Message Is In',
  text: "Thanks for reaching out. We've got your details and we'll reply within one business day.",
  linksHeading: 'While you wait, take a look around.',
  links: [
    { label: 'Build', href: routes.build },
    { label: 'Growth', href: routes.growth },
    { label: 'Fadeaway Labs', href: routes.labs },
  ],
  button: { label: 'Back to Home', href: routes.home },
};

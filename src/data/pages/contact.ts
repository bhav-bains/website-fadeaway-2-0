// Contact page + success page content, copied word for word from copy/contact.md (approved Oct 2).
// Every "Get a Quote" / "Book a Call" / "Tell Us What You're Building" CTA lands here.
import { routes } from '../routes';
import { siteConfig } from '../site';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { FormContent } from '../../components/blocks/FormHero.astro';
import type { ContactOption } from '../../components/blocks/ContactOptions.astro';
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
  // Founder, Oct 4: slogan in a display line above the H1; the H1 carries the service terms
  displayLine: 'Your next customer is searching right now.',
  h1: "Let's Talk About Your Website, SEO or Growth",
  sub: "Tell us about your business and what you need, whether it's a new website, SEO and AEO, an e-commerce store, or custom software.",
  location: siteConfig.locationLine,
};

/**
 * Other ways to connect (founder, Oct 4): book a call first, then WhatsApp, email, Instagram. No Facebook.
 * No heading or intro (founder, Oct 4); 2 x 2 grid. Every URL comes from src/data/site.ts. WhatsApp / Email / Instagram
 * lines from the founder's reference; the Schedule a Call line is a Claude draft (needs approval).
 */
export const connect: { newTabLabel: string; items: ContactOption[] } = {
  newTabLabel: 'opens in a new tab',
  items: [
    { title: 'Schedule a Call', text: 'Book a time that works for you', href: siteConfig.bookingUrl, icon: 'calendar', external: true },
    { title: 'WhatsApp', text: 'Message on WhatsApp', href: siteConfig.whatsapp, platform: 'whatsapp', external: true },
    { title: 'Email', text: 'Contact via Email', href: `mailto:${siteConfig.email}`, icon: 'mail' },
    { title: 'Instagram', text: 'DM on Instagram', href: siteConfig.social.instagram, platform: 'instagram', external: true },
  ],
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

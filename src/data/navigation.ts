// Header and footer navigation. Labels are copied word for word from copy/home.md
// (Header / Nav and Footer sections). Change copy there first, then here.
import { routes } from './routes';
import { siteConfig } from './site';

export interface NavLink {
  label: string;
  href: string;
}

/** A bold, linked service with a subtle list of what it includes (Services dropdown) */
export interface NavFeature {
  label: string;
  href: string;
  includes: string[];
}

export type NavItem =
  | { type: 'link'; label: string; href: string }
  | { type: 'features'; label: string; features: NavFeature[] }
  | { type: 'links'; label: string; links: NavLink[] };

// ---------- Header ----------

export const mainNavigation: NavItem[] = [
  {
    type: 'features',
    label: 'Services',
    features: [
      {
        label: 'Build',
        href: routes.build,
        includes: ['Custom Web Development', 'Website Redesign', 'E-commerce Builds', 'Site Migration'],
      },
      {
        label: 'Growth',
        href: routes.growth,
        includes: ['SEO + AEO', 'Full Audit', 'Growth Strategy', 'CRO', 'Paid Media'],
      },
    ],
  },
  {
    type: 'links',
    label: 'Solutions',
    links: [
      { label: 'E-commerce', href: routes.ecommerce },
      { label: 'Wellness & Counselling', href: routes.wellnessCounselling },
      { label: 'Boutique Fitness', href: routes.boutiqueFitness },
      { label: 'Sports Academies', href: routes.sports },
    ],
  },
  { type: 'link', label: 'Labs', href: routes.labs },
  { type: 'link', label: 'Resources', href: routes.resources },
  { type: 'link', label: 'Contact', href: routes.contact },
];

export const headerCta: NavLink = { label: 'Get Your Free Audit', href: routes.audit };

// ---------- Footer ----------

export const footerTagline = 'Growth partner for local businesses across the US & Canada.';

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'Services',
    links: [
      { label: 'Build', href: routes.build },
      { label: 'Growth', href: routes.growth },
      { label: 'Fadeaway Labs', href: routes.labs },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'E-commerce', href: routes.ecommerce },
      { label: 'Wellness & Counselling', href: routes.wellnessCounselling },
      { label: 'Boutique Fitness', href: routes.boutiqueFitness },
      { label: 'Sports Academies', href: routes.sports },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: routes.about },
      { label: 'Contact', href: routes.contact },
      { label: 'Privacy Policy', href: routes.privacy },
      { label: 'Terms of Service', href: routes.terms },
    ],
  },
];

export interface SocialLink {
  name: string;
  href: string;
  platform: 'instagram' | 'facebook' | 'linkedin';
}

// Footer social row per copy: Instagram, Facebook (email is shown as text next to them)
export const footerSocial: SocialLink[] = [
  { name: 'Instagram', href: siteConfig.social.instagram, platform: 'instagram' },
  { name: 'Facebook', href: siteConfig.social.facebook, platform: 'facebook' },
];

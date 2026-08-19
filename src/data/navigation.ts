export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavItemDropdown {
  label: string;
  type: 'dropdown';
  items: NavSubItem[];
}

export interface NavItemLink {
  label: string;
  href: string;
  type?: 'link';
}

export type NavItem = NavItemDropdown | NavItemLink;

export interface SocialLink {
  name: string;
  href: string;
  platform: 'instagram' | 'facebook' | 'email';
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

// Main Header Navigation
export const mainNavigation: NavItem[] = [
  {
    label: 'Services',
    type: 'dropdown',
    items: [
      { label: 'Audit & Growth Strategy', href: '#' },
      { label: 'Website Redesign', href: '#' },
      { label: 'Site Migrations', href: '#' },
      { label: 'Idea to MVP', href: '#' },
    ],
  },
  {
    label: 'Solutions',
    type: 'dropdown',
    items: [
      { label: 'Sports Academies', href: '/sports' },
      { label: 'Boutique Fitness & Wellness', href: '/wellness' },
      { label: 'Startups & SaaS', href: '#' },
      { label: 'E-commerce Stores', href: '#' },
    ],
  },
];

// Header Call to Action Button
export const headerCta = {
  label: 'Contact',
  href: '/contact',
};

// Social Links & Contact Channels
export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/fadeawaycreatives',
    platform: 'instagram',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/fadeawaycreatives',
    platform: 'facebook',
  },
  {
    name: 'Email',
    href: 'mailto:hello@fadeawaycreatives.com',
    platform: 'email',
  },
];

// Footer Navigation Columns
export const footerColumns: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Audit & Growth Strategy', href: '#' },
      { label: 'Website Redesign', href: '#' },
      { label: 'Site Migrations', href: '#' },
      { label: 'Idea to MVP', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Sports Academies', href: '/sports' },
      { label: 'Boutique Fitness & Wellness', href: '/wellness' },
      { label: 'Startups & SaaS', href: '#' },
      { label: 'E-commerce Stores', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

// Legal Links in Footer
export const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
];

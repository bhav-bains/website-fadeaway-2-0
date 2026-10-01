// JSON-LD builders. Everything renders server-side (CLAUDE.md section 4).
import { siteConfig } from '../data/site';

export type JsonLdNode = Record<string, unknown>;

const abs = (path: string) => new URL(path, siteConfig.url).toString();

export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

// Fadeaway is an Organization, never a LocalBusiness: it serves Canada and the US; Vancouver is only HQ.
export function organizationSchema(): JsonLdNode {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { '@type': 'ImageObject', url: abs(siteConfig.logo) },
    description: siteConfig.description,
    email: siteConfig.email,
    foundingDate: siteConfig.foundingDate,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.countryCode,
    },
    areaServed: siteConfig.areaServed.map((name) => ({ '@type': 'Country', name })),
    knowsAbout: siteConfig.knowsAbout,
    sameAs: Object.values(siteConfig.social),
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.email,
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  };
}

export function websiteSchema(): JsonLdNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: siteConfig.language,
  };
}

// HowTo from a page's process section. Pass the same steps the Steps block renders so text matches word for word.
export function howToSchema({
  name,
  steps,
  url,
}: {
  name: string;
  steps: { title: string; text: string }[];
  /** Absolute URL of the section, e.g. https://fadeawaycreatives.com/#how-it-works */
  url: string;
}): JsonLdNode {
  return {
    '@type': 'HowTo',
    name,
    url,
    step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text })),
  };
}

// FAQPage from the same `faq` array the Faq block renders, so visible text and schema match word for word.
export function faqSchema(faq: { q: string; a: string }[]): JsonLdNode {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

// BreadcrumbList from the same items the Breadcrumb block renders.
// URLs keep the sitewide trailing slash (routes.ts already has it; this guards hand-written paths).
export function breadcrumbSchema(items: { label: string; href: string }[]): JsonLdNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: abs(item.href.endsWith('/') ? item.href : `${item.href}/`),
    })),
  };
}

// Service entries for a page, as listed in its copy file. No prices; Fadeaway is the provider.
// Only services visible on the page (copy rule), linked to the page URL where they're described.
export function serviceSchema({ names, url }: { names: string[]; url: string }): JsonLdNode[] {
  return names.map((name) => ({
    '@type': 'Service',
    name,
    serviceType: name,
    url: abs(url.endsWith('/') ? url : `${url}/`),
    provider: { '@id': ORGANIZATION_ID },
    areaServed: siteConfig.areaServed.map((country) => ({ '@type': 'Country', name: country })),
  }));
}

// One @graph per page: sitewide nodes first, then the page's own nodes.
export function buildGraph(pageNodes: JsonLdNode[] = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema(), websiteSchema(), ...pageNodes],
  };
}

// Safe for <script type="application/ld+json">: a "</script>" inside text can't close the tag.
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

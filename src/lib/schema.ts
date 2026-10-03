// JSON-LD builders. Everything renders server-side (CLAUDE.md section 4).
import { siteConfig } from '../data/site';

export type JsonLdNode = Record<string, unknown>;

const abs = (path: string) => new URL(path, siteConfig.url).toString();

export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;
export const FOUNDER_ID = `${siteConfig.url}/#founder`;

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
    founder: { '@type': 'Person', '@id': FOUNDER_ID, name: siteConfig.founder.name },
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
export function serviceSchema({
  names,
  url,
  offers,
  currencies = ['USD', 'CAD'],
}: {
  names: string[];
  url: string;
  /** Pages that show prices: { [service name]: { price, unit? } }. unit "MON" for monthly plans. */
  offers?: Record<string, { price: number; unit?: 'MON' }>;
  /** One Offer per currency at the same price (e.g. USD and CAD: clients pay in their own currency) */
  currencies?: string[];
}): JsonLdNode[] {
  return names.map((name) => {
    const offer = offers?.[name];
    return {
      '@type': 'Service',
      name,
      serviceType: name,
      url: abs(url.endsWith('/') ? url : `${url}/`),
      provider: { '@id': ORGANIZATION_ID },
      areaServed: siteConfig.areaServed.map((country) => ({ '@type': 'Country', name: country })),
      ...(offer && {
        offers: currencies.map((currency) => ({
          '@type': 'Offer',
          price: offer.price,
          priceCurrency: currency,
          ...(offer.unit && {
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: offer.price,
              priceCurrency: currency,
              unitCode: offer.unit,
            },
          }),
        })),
      }),
    };
  });
}

// About page: the page itself, with the Organization as its main entity.
export function aboutPageSchema({ url, name, description }: { url: string; name: string; description: string }): JsonLdNode {
  return {
    '@type': 'AboutPage',
    '@id': `${abs(url)}#webpage`,
    url: abs(url),
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': ORGANIZATION_ID },
  };
}

// Contact page node (Organization as the entity you contact)
export function contactPageSchema({ url, name, description }: { url: string; name: string; description: string }): JsonLdNode {
  return {
    '@type': 'ContactPage',
    '@id': `${abs(url)}#webpage`,
    url: abs(url),
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
  };
}

// Plain page node (legal pages and other simple pages)
export function webPageSchema({ url, name, description }: { url: string; name: string; description: string }): JsonLdNode {
  return {
    '@type': 'WebPage',
    '@id': `${abs(url)}#webpage`,
    url: abs(url),
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORGANIZATION_ID },
  };
}

// Listing page: CollectionPage with an ItemList of the item URLs (e.g. case studies)
export function collectionPageSchema({
  url,
  name,
  description,
  items,
}: {
  url: string;
  name: string;
  description: string;
  items: { name: string; url: string }[];
}): JsonLdNode {
  return {
    '@type': 'CollectionPage',
    '@id': `${abs(url)}#webpage`,
    url: abs(url),
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, url: abs(item.url) })),
    },
  };
}

// Case study detail: an Article by Fadeaway about the client (an Organization with its live URL)
export function caseStudySchema({
  url,
  headline,
  description,
  image,
  client,
  datePublished,
  dateModified,
}: {
  url: string;
  headline: string;
  description: string;
  /** Site-relative or absolute image URL */
  image?: string;
  client: { name: string; url?: string };
  /** ISO dates (YYYY-MM-DD); left out when unknown, never guessed */
  datePublished?: string;
  dateModified?: string;
}): JsonLdNode {
  return {
    '@type': 'Article',
    '@id': `${abs(url)}#article`,
    url: abs(url),
    mainEntityOfPage: abs(url),
    headline,
    description,
    ...(image && { image: abs(image) }),
    ...(datePublished && { datePublished }),
    ...((dateModified ?? datePublished) && { dateModified: dateModified ?? datePublished }),
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    about: { '@type': 'Organization', name: client.name, ...(client.url && { url: client.url }) },
  };
}

// Founder as a Person (fullest on the About page). sameAs only when a personal profile URL is supplied.
export function founderSchema({ description }: { description?: string } = {}): JsonLdNode {
  const { name, jobTitle, linkedin } = siteConfig.founder;
  return {
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name,
    jobTitle,
    worksFor: { '@id': ORGANIZATION_ID },
    ...(description && { description }),
    ...(linkedin && { sameAs: [linkedin] }),
  };
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

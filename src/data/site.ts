// Sitewide entity facts (CLAUDE.md section 5). The schema, SEO defaults and footer read from here.
// Contact details (email, WhatsApp number, booking link, social profiles) live here only: change them here and every
// page, the footer and the schema follow.

/** WhatsApp number, digits only with country code (wa.me format) */
const whatsappNumber = '17056500328';

export const siteConfig = {
  name: 'Fadeaway Creatives',
  url: 'https://fadeawaycreatives.com',
  // Defaults for pages that don't set their own; taken from copy/home.md
  title: 'Fadeaway Creatives | Revenue-Focused Growth Partners',
  description:
    'SEO, AI search, and websites built to turn traffic into paying customers. Fixed pricing, real growth, no guesswork.',
  // Sitewide share image (1200x630) until a page sets its own
  defaultOgImage: '/og-default.jpg',
  defaultOgImageAlt: 'Fadeaway Creatives: Revenue-Focused. Growth Partners. Websites, SEO & AI Search for Growing Businesses',
  logo: '/fadeaway-logo.png',
  themeColor: '#FF6B35',
  locale: 'en_US',
  language: 'en-US',
  email: 'hello@fadeawaycreatives.com',
  // Contact page only; kept out of `social` so it never lands in Organization sameAs
  whatsappNumber,
  whatsapp: `https://wa.me/${whatsappNumber}`,
  // Book-a-call link (Google Calendar booking page, founder Oct 4). One place: every "book a call" link reads it.
  bookingUrl: 'https://calendar.app.google/YLZvcmUobteBCjZG7',
  foundingDate: '2023',
  // Founder (About page Person schema; Organization.founder sitewide). linkedin: personal profile, add when supplied.
  founder: {
    name: 'Bhav Bains',
    jobTitle: 'Founder',
    linkedin: '',
  },
  locationLine: 'Vancouver, BC, working with clients across Canada and the US.',
  address: {
    city: 'Vancouver',
    region: 'BC',
    country: 'Canada',
    countryCode: 'CA',
  },
  areaServed: ['Canada', 'United States'],
  knowsAbout: [
    'SEO',
    'answer engine optimization',
    'web development',
    'e-commerce',
    'business process automation',
    'AI implementation',
    'MVP development',
    // Platforms and tools from the e-commerce logo band (founder-confirmed, Sept 29)
    'Shopify',
    'WooCommerce',
    'WordPress',
    'BigCommerce',
    'headless commerce',
    'Next.js',
    'Astro',
    'Shopify Hydrogen',
    'Stripe',
    'Google Search Console',
    'Google Analytics',
    'Google Merchant Center',
    'Google Ads',
    'Klaviyo',
    'Meta Ads',
    'ChatGPT',
    'Perplexity',
    'Google Gemini',
  ],
  social: {
    instagram: 'https://www.instagram.com/fadeawaycreatives/',
    facebook: 'https://facebook.com/fadeawaycreatives',
    linkedin: 'https://www.linkedin.com/company/fadeaway-creatives/',
  },
  analytics: {
    googleAnalyticsId: 'G-4T10QZ6L2D',
    metaPixelId: '1490844932455143',
  },
};

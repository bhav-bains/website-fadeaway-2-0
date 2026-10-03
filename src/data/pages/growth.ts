// Growth Services page content, copied word for word from copy/growth.md (v2, Oct 1).
// Blocks never contain copy; they render what this file gives them.
// Pricing: none anywhere on this page, including the Full Audit (founder, Oct 1).
import { routes } from '../routes';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { SpecItem } from '../../components/blocks/SpecGrid.astro';
import type { StepItem } from '../../components/blocks/Steps.astro';
import type { FeatureListItem } from '../../components/blocks/FeatureList.astro';
import type { LadderItem } from '../../components/blocks/Ladder.astro';
import type { ServiceIndexItem } from '../../components/blocks/ServiceIndex.astro';
import type { CardGridItem } from '../../components/blocks/CardGrid.astro';
import type { FaqItem } from '../../components/blocks/Faq.astro';

export const seo = {
  title: 'Fadeaway Creatives | SEO Audit Agency & Growth Partners',
  description:
    'SEO audits, AEO, and growth work built to turn search visibility into bookings and sales. Every number we report is tied to revenue.',
};

// Home > Growth: there is no /services hub page
export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Growth', href: routes.growth },
];

/** AEO answer capsule: the wide intro of the first section after the Hero */
export const answerCapsule =
  'Fadeaway Creatives is a growth partner for businesses across Canada and the US. We start with a free Instant Audit and a fixed-price Full Audit to find where your revenue is leaking, fix conversion first, then grow demand through SEO, AEO, and paid media on Google and Meta. Every engagement is scoped to your business and reported in bookings and sales, not rankings.';

/** Service pages ship the blueprint hero. In `npm run dev`, compare with ?hero=statement | showcase | all. */
export const heroVariant: HeroVariant = 'blueprint';

export const hero: HeroContent = {
  displayLine: 'Get ready for the AI search era.',
  eyebrow: 'SEO, AEO and Revenue Growth',
  h1: 'SEO Audits Built to Grow Revenue',
  sub: 'We find where your revenue is leaking, fix it, then run the SEO, AEO, and paid work that turns search into bookings and sales.',
  primaryCta: { label: 'Get Your Free Audit', href: routes.audit },
  secondaryCta: { label: 'See How We Move Revenue', href: '#revenue-system' },
  breadcrumb,
  visual: 'growth',
};

export const standard: { id: string; heading: string; intro: string; items: SpecItem[] } = {
  id: 'standard',
  heading: 'Audited Right, From Day One',
  intro: 'Every audit and every ongoing engagement follows the same standard: real data, real reporting, real accountability.',
  items: [
    {
      title: 'Revenue-Tracked Growth',
      text: 'Every audit and every report measures bookings, sales, and customers, the numbers that actually matter to your business.',
    },
    {
      title: 'Built for Google and AI Search',
      text: 'Your audit covers technical SEO and the structured data, schema, and content signals that AI search tools read to decide who to recommend.',
    },
    {
      title: 'Grounded in Real Data',
      text: "Every recommendation comes from your actual keyword data, your competitors' real rankings, and your site's own numbers.",
    },
    {
      title: 'Clear, Ongoing Reporting',
      text: 'A live dashboard tracking your rankings, traffic, bookings, and revenue, plus a monthly report and a monthly strategy call.',
    },
  ],
};

/** Results Strip: unnamed, verified results only (number + metric + timeframe + client type). Empty = renders nothing. */
export const results: { value: string; label: string }[] = [];

/** The page's centerpiece. Also feeds the HowTo schema. */
export const revenueSystem: {
  id: string;
  heading: string;
  intro: string[];
  items: StepItem[];
  cta: { heading: string; button: string };
} = {
  id: 'revenue-system',
  heading: 'How We Move Revenue',
  intro: [
    // Added Oct 2 (24/7 salesperson framing)
    'A great salesperson in an empty room sells nothing. Growth is how we send the right people in.',
    "Growth isn't one tactic. It's a system, and every step feeds the next.",
  ],
  items: [
    {
      title: 'Measure the baseline',
      text: 'Before we change anything, we make sure every booking, form, call, and sale is tracked in Google Analytics and Search Console, so you know what your revenue looks like today and can see exactly what moves it.',
    },
    {
      title: 'Find the leaks',
      text: "The Full Audit maps where you're losing customers: pages that don't rank, AI tools that don't mention you, slow pages, unclear offers, and forms people abandon. You get a prioritized 3 to 6 month action plan.",
    },
    {
      title: 'Fix conversion first',
      text: 'More traffic into a leaky site is wasted spend. We fix the pages, offers, and checkout or booking flows that turn visitors into customers before we push for more visitors.',
    },
    {
      title: 'Grow demand',
      text: "Then we bring in the right people through SEO on Google, AEO for ChatGPT, Perplexity, and Google's AI Overviews, and paid campaigns on Google and Meta when speed matters.",
    },
    {
      title: 'Compound it',
      text: "Content, reviews, email, and lead generation keep past customers coming back and make every month's work build on the last instead of starting over.",
    },
    {
      title: 'Report and adjust',
      text: 'A live dashboard, a monthly report, and a monthly strategy call show what each piece is doing for revenue. Strategy shifts based on what the data shows, not on a fixed calendar.',
    },
  ],
  // CTA touchpoint: "See where your revenue is leaking. Get Your Free Audit → /audit/" (rendered as the audit URL field)
  cta: { heading: 'See where your revenue is leaking.', button: 'Get Your Free Audit' },
};

export const capabilities: { id: string; heading: string; items: FeatureListItem[] } = {
  id: 'capabilities',
  heading: 'What We Run for You',
  items: [
    {
      icon: 'code',
      title: 'Technical SEO',
      text: 'Site health, crawlability, page speed, and structure, monitored continuously so search engines can find, read, and rank every page that matters.',
    },
    {
      icon: 'search-ai',
      title: 'Answer Engine Optimization (AEO)',
      text: 'Structured data, schema, and answer-ready content that AI search tools read when deciding who to recommend, plus tracking of when and how your business shows up in AI-generated answers.',
    },
    {
      icon: 'map-pin',
      title: 'Local and Organic Visibility',
      text: 'Google Business Profile, local listings, reviews, and a content calendar built around how your customers actually search, from neighbourhood searches to category terms.',
    },
    {
      icon: 'target',
      title: 'Conversion Rate Optimization',
      text: 'Ongoing testing of your key pages, offers, forms, and checkout or booking flows, so more of the traffic you already have turns into revenue.',
    },
    {
      icon: 'megaphone',
      title: 'Paid Media on Google and Meta',
      text: 'Campaign strategy, setup, and ongoing management, built around cost per booking or sale, not clicks. Ad spend is paid directly by you to Google and Meta, so you always see exactly where every dollar goes.',
    },
    {
      icon: 'workflow',
      title: 'Email and Lead Generation',
      text: 'Lead capture, nurture sequences, and email campaigns that turn one-time visitors and past customers into repeat revenue.',
    },
    {
      icon: 'dashboard',
      title: 'Reporting You Can Actually Use',
      text: 'One dashboard combining paid, organic, and AI search performance, tied to bookings and sales, with a monthly report and strategy call to walk you through it.',
    },
  ],
};

export const ladder: {
  id: string;
  heading: string;
  intro: string;
  items: LadderItem[];
  /** The copy's one line, split at the question mark into heading + line (words unchanged) */
  note: { heading: string; text: string; link: { label: string; href: string } };
} = {
  id: 'growth-ladder',
  heading: 'The Growth Ladder',
  intro: 'Every engagement starts small and grows with the results.',
  items: [
    {
      title: 'Instant Audit (free)',
      text: 'A fast review of your website, SEO and AEO readiness basics, performance, site structure, on-page copy, local search visibility, and paid media opportunities. You get the results in a clear report and we walk you through them.',
    },
    {
      title: 'Full Audit (fixed price)',
      text: 'A full account and website review, keyword research for your market, an in-depth AEO readiness check, a content strategy foundation, quick wins ready to act on, and a clear 3 to 6 month action plan.',
    },
    {
      title: 'Ongoing growth work',
      text: 'SEO, AEO, conversion, paid media, and email, scoped to your business and your goals, with a fixed monthly fee agreed before anything starts.',
    },
  ],
  note: {
    heading: 'Starting with a new website instead?',
    text: "The build covers the audit's groundwork, so you pay for one or the other, never both.",
    link: { label: 'See Build Services', href: routes.build },
  },
};

export const industries: { id: string; heading: string; intro: string; items: ServiceIndexItem[] } = {
  id: 'industries',
  heading: 'Built Around Your Industry',
  intro: 'Search behavior looks different in every industry, so the growth work does too.',
  items: [
    {
      title: 'E-commerce',
      text: 'E-commerce SEO is a long game in a competitive field. We run the technical audits and ongoing search work that compound over time, not overnight tricks.',
      link: { label: 'See E-commerce Growth Work', href: routes.ecommerce },
    },
    {
      title: 'Wellness & Counselling',
      text: '"SEO for therapists" alone is searched about 1,600 times a month in the US, and patients search for therapists, counsellors, and chiropractors every day. We build the strategy around that demand, so you\'re found beyond directory listings.',
      link: { label: 'See Wellness & Counselling Growth Work', href: routes.wellnessCounselling },
    },
    {
      title: 'Boutique Fitness',
      text: "Class bookings live and die by local search and referrals. We run the ongoing SEO work that keeps your studio visible when someone's looking for a new class.",
      link: { label: 'See Boutique Fitness Growth Work', href: routes.boutiqueFitness },
    },
    {
      title: 'Sports Academies',
      text: 'Parents search for clubs, fees, and season dates all year, and "how to choose a sports club" alone is searched about 2,800 times a month in the US. Our SEO and AEO work makes sure they find your program when they do.',
      link: { label: 'See Sports Academies Growth Work', href: routes.sports },
    },
    {
      title: 'Other Growing Businesses',
      text: 'Service firms, agencies, local service businesses, and online products. If your customers search before they buy, the same system applies. We scope the work around your market after the audit.',
      link: { label: 'Tell Us About Your Business', href: routes.contact },
    },
  ],
};

export const somethingElse: { id: string; heading: string; items: CardGridItem[] } = {
  id: 'something-else',
  heading: 'Need Something Else First?',
  items: [
    {
      title: 'Website Needs Work First',
      body: "If your website itself needs to be built or redesigned before growth work makes sense, that's a Build project, not growth work.",
      link: { label: 'See Build Services', href: routes.build },
    },
    {
      title: 'Need Custom Software Instead',
      body: "If what you actually need is custom software, automations, or dashboards rather than a website, that's Fadeaway Labs.",
      link: { label: 'See Fadeaway Labs', href: routes.labs },
    },
  ],
};

/** ProofGrid of case studies tagged `growth`. Hidden in production until /portfolio exists; always visible in dev. */
export const realWork = {
  id: 'real-work',
  showInProduction: false,
  heading: 'Real Work, Real Results',
  tag: 'growth',
  limit: 3,
} as const;

/** Also feeds the FAQPage schema */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'How is your growth work priced?',
      a: "Every engagement starts with an audit, then gets scoped to your business: your market, your goals, and which channels make sense. You get a written scope and a fixed monthly fee before anything starts, never hourly billing. Ad spend for Google and Meta is paid directly by you, so it's always visible.",
    },
    {
      q: "What's included in the free Instant Audit?",
      a: "A fast review of your website, SEO and AEO readiness basics, page performance, site structure, on-page copy, local search visibility, and paid media opportunities. You get a clear report, and we walk you through the results so you know where you stand and what's worth fixing first. There's no obligation afterward.",
    },
    {
      q: 'Is AEO actually worth it, or is it just hype?',
      a: "It's real, and it's early. AI search tools like ChatGPT and Perplexity already answer questions your customers are asking, and many businesses haven't touched their AEO yet. The risk isn't that it's hype. It's being invisible while your competitors get there first.",
    },
    {
      q: 'How long until I see results?',
      a: 'Conversion fixes and technical issues often show results within the first few weeks, because they improve the traffic you already have. SEO and AEO build over the 3 to 6 month window in your action plan, and paid campaigns can bring in customers sooner. Your dashboard tracks bookings and sales the whole way.',
    },
    {
      q: 'What if my website needs work too?',
      a: "That's a Build project, not growth work. If your audit shows your site itself needs rebuilding, we loop in the Build team before any SEO work starts, and the audit fee you already paid gets credited toward the build, so you never pay twice for the same work.",
    },
    {
      q: 'Do you work with businesses outside Canada?',
      a: 'Yes. We\'re based in Vancouver, BC, and work with clients across Canada and the United States. Wherever your business is, we build your strategy around how your specific market searches, from local map results to the answers AI assistants give when your customers ask for a recommendation.',
    },
  ],
};

/** From the Blog (tag growth): renders nothing until /articles/ has real Growth posts */
export const blog = {
  id: 'blog',
  heading: 'From the Blog',
  intro: 'Real, practical answers to the SEO and AEO questions we hear most.',
  tag: 'growth',
  cta: { label: 'View All Resources', href: routes.articles },
} as const;

/** Service JSON-LD entries (copy/growth.md frontmatter `schema`). No prices. */
export const serviceNames = [
  'Instant Audit',
  'Full Audit',
  'SEO',
  'Answer Engine Optimization (AEO)',
  'Conversion Rate Optimization',
  'Paid Media Management',
  'Email & Lead Generation',
];

export const cta = {
  id: 'cta',
  heading: 'Ready to See Where You Stand?',
  text: 'Start with a free Instant Audit: no obligation, just a clear picture of where your revenue is leaking and what to fix first.',
  cta: { label: 'Get Your Free Audit', href: routes.audit },
};

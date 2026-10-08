// Boutique Fitness Solutions page content, copied word for word from copy/boutique-fitness.md.
// Same conversion funnel and blocks as Wellness & Counselling (founder, Oct 1); only the copy changes.
// Studio-format only (yoga, pilates, spin/cycling, barre). Real prices shown here.
import { routes } from '../routes';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { BentoItem } from '../../components/blocks/BentoGrid.astro';
import type { FeatureListItem } from '../../components/blocks/FeatureList.astro';
import type { CardGridItem } from '../../components/blocks/CardGrid.astro';
import type { IconGridItem } from '../../components/blocks/IconGrid.astro';
import type { DemoOfferStep } from '../../components/blocks/DemoOffer.astro';
import type { PricingContent } from '../../components/blocks/PricingSection.astro';
import type { TimelineItem } from '../../components/blocks/Timeline.astro';
import type { StepItem } from '../../components/blocks/Steps.astro';
import type { FaqItem } from '../../components/blocks/Faq.astro';

export const seo = {
  title: 'Fadeaway Creatives | SEO for Yoga & Fitness Studios',
  description:
    'Websites, local SEO, and AEO for yoga, pilates, spin, and barre studios. Connected to Mindbody or Momence, built to fill every class. Free demo.',
};

// Home > Boutique Fitness: there is no /solutions hub page
export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Boutique Fitness', href: routes.boutiqueFitness },
];

/** AEO answer capsule: the wide intro of the first section after the Hero */
export const answerCapsule =
  'Fadeaway Creatives builds websites and runs local SEO and AEO for yoga, pilates, spin, and barre studios across Canada and the US. We connect your site to the booking platform you already use, like Mindbody, Momence, or Marianatek, get you showing up on Google Maps and in AI recommendations for your neighbourhood, and start with a free custom demo of your new website.';

export const heroVariant: HeroVariant = 'statement';

export const hero: HeroContent = {
  eyebrow: 'Websites, Local SEO & AEO for Yoga, Pilates, Spin & Barre Studios',
  h1: 'Websites and SEO Growth\nThat Fill Your Classes',
  sub: "More people finding you, more people booking, fewer empty spots in your schedule.",
  auditForm: { action: routes.audit, label: 'Get a Free Audit of Your Current Setup', placeholder: 'yourstudio.com', button: 'Get Your Free Audit' },
  breadcrumb,
  visual: 'fitness',
};

export const insights: {
  id: string;
  heading: string;
  intro?: string;
  items: BentoItem[];
  cta: { text: string; label: string; href: string };
} = {
  id: 'insights',
  heading: 'What Most Studio Websites Get Wrong',
  items: [
    {
      title: 'The Booking Flow Loses People',
      // Last sentence added Oct 2 (24/7 salesperson framing)
      text: "If booking a class takes more than a couple of taps, or bounces people to a confusing schedule page, some of them simply leave. Most studio sites make this harder than it needs to be. Your site should fill tomorrow's 6am class while you're teaching tonight's.",
    },
    {
      title: 'Invisible on the Map in Your Own Neighbourhood',
      text: `Someone searches "yoga studio near me" three blocks from your door, and a studio across town shows up first. That's usually a fixable Google Business Profile and site problem, not bad luck.`,
    },
    {
      title: 'AI Assistants Now Recommend Studios',
      text: "People are starting to ask ChatGPT and Google's AI for class recommendations. Those tools favour studios whose sites clearly state classes, schedule, pricing, location, and fresh reviews.",
    },
    {
      title: 'A Brochure, Not a Growth Engine',
      text: "A site that just sits there doesn't fill classes. Booking, search, reviews, and reporting need to work together, so you can see which searches turn into booked classes.",
    },
  ],
  cta: { text: 'Want to see how your studio shows up today?', label: 'Get a Free Audit', href: routes.audit },
};

export const why: { id: string; heading: string; items: FeatureListItem[] } = {
  id: 'why',
  heading: 'Why Studios Work With Fadeaway',
  items: [
    {
      icon: 'calendar',
      title: 'Built for Studios, Not Generic Small Businesses',
      text: "Class schedules, intro offers, memberships, and instructor pages are built in from the start, because that's how studio clients decide.",
    },
    {
      icon: 'workflow',
      title: 'Works With Your Booking Platform',
      text: 'We connect your site to Mindbody, Momence, or Marianatek, so classes, payments, and clients stay in one place and booking feels seamless.',
    },
    {
      icon: 'map-pin',
      title: 'Found Locally and in AI Search',
      text: 'Google Business Profile, neighbourhood pages, schema, and review signals set up so you show up on the map and in AI recommendations.',
    },
    {
      icon: 'sparkles',
      title: 'Care in Every Detail',
      text: "We care about each pixel and each interaction, and treat every studio's site like it's the only one we're building.",
    },
    {
      icon: 'award',
      title: 'Founder-Led, With Fixed Pricing',
      text: '15+ years of experience, hands-on from first call to launch. Every price is on this page, with no hourly billing and no surprises.',
    },
  ],
};

export const audience: { id: string; heading: string; items: CardGridItem[]; cta: { title: string; body: string; label: string; href: string } } = {
  id: 'who-its-for',
  heading: 'Built for Boutique Studios',
  items: [
    {
      title: 'Yoga Studios',
      illustration: 'studio-yoga',
      body: 'Fill your schedule with locals searching for classes nearby, and turn first-timers into members with a smooth intro offer flow.',
    },
    {
      title: 'Pilates Studios',
      illustration: 'studio-pilates',
      body: 'Reformer and mat studios live on limited spots per class. We help you keep them booked and your waitlist moving.',
    },
    {
      title: 'Spin and Cycling Studios',
      illustration: 'studio-spin',
      body: 'High-energy brands need sites that feel the same. We build fast, bold sites that turn visitors into riders.',
    },
    {
      title: 'Barre Studios',
      illustration: 'studio-barre',
      body: 'Show off your community and your instructors, and make the first class an easy yes.',
    },
    {
      title: 'Opening a New Studio?',
      illustration: 'studio-new',
      body: 'Starting from scratch is the best time to get your website and local search right. We set up your site, booking, and Google Business Profile before your doors open.',
    },
  ],
  cta: {
    title: 'Ready for the Next Step?',
    body: 'Tell us about your studio and we will help you plan what comes next.',
    label: 'Contact Us',
    href: routes.contact,
  },
};

export const services: {
  id: string;
  heading: string;
  items: IconGridItem[];
  labs: { heading: string; text: string; link: { label: string; href: string } };
} = {
  id: 'services',
  heading: 'What We Do for Your Studio',
  items: [
    {
      icon: 'calendar',
      title: 'A Website Built Around Your Booking Flow',
      text: 'Class schedules, intro offers, and memberships connected to your booking platform, so booking a class takes seconds on any phone.',
    },
    {
      icon: 'map-pin',
      title: 'Win the Google Map Pack',
      text: 'Google Business Profile optimization so your studio shows up when someone nearby searches for a class.',
    },
    {
      icon: 'map',
      title: 'Neighbourhood Pages',
      text: 'Clients search their own neighbourhood, not just your city. We build pages that capture searches across your whole service area.',
    },
    {
      icon: 'search-ai',
      title: 'AEO for AI Recommendations',
      text: "Structured data and clear studio details, so you're the answer when someone asks an AI assistant for the best studio nearby.",
    },
    {
      icon: 'star',
      title: 'Automated Review Requests',
      text: 'Fresh reviews help with both Google and AI tools. We set up reminders that make it easy for happy clients to leave one right after class.',
    },
    {
      icon: 'dashboard',
      title: 'Track Real Bookings, Not Views',
      text: 'A dashboard showing which searches turn into booked classes and memberships, not just which pages get visited.',
    },
  ],
  labs: {
    heading: 'Need Custom Software Instead',
    text: "If what you actually need is custom software, automations, or dashboards rather than a website, that's Fadeaway Labs.",
    link: { label: 'See Fadeaway Labs', href: routes.labs },
  },
};

/** Primary conversion section */
export const demo: {
  id: string;
  heading: string;
  text: string;
  steps: DemoOfferStep[];
  cta: { label: string; href: string };
  fallback: { text: string; link: { label: string; href: string } };
} = {
  id: 'demo',
  heading: 'Not Sure Yet? Request Your Demo',
  text: 'We know boutique studios well, so your demo starts from what already works. We build 4 pages made for your studio, in your branding, ready in 2 business days.',
  steps: [
    { title: 'Tell us about your studio', text: 'a few details and your brand. It takes about a minute.' },
    { title: 'We build your 4 pages', text: 'your homepage and the pages that turn visitors into booked classes, made for your brand.' },
    { title: 'Experience it', text: 'we send you a private link within 2 business days so you can click through your new site yourself.' },
  ],
  cta: { label: 'Request Your Demo', href: routes.demoRequest },
  fallback: { text: 'Already have a website you want to keep?', link: { label: 'Get a free audit instead', href: routes.audit } },
};

const included = "What's included:";
const outcome = 'What you get out of it:';

export const pricing: PricingContent & { id: string; heading: string; intro: string } = {
  id: 'pricing',
  heading: 'What You Pay For, and What You Get',
  intro: 'Fixed prices, complete deliverable lists, and honest expectations.',
  plans: [
    {
      name: 'Attract Plan',
      cta: { label: 'Start with the Attract Plan', href: routes.contact },
      price: '$499',
      cadence: 'a month',
      for: 'For studios that want steady, compounding local visibility.',
      includedLabel: included,
      included: [
        'Ongoing technical SEO and site health monitoring',
        'Structured data and AEO signals kept current',
        'Local SEO and Google Business Profile management',
        'Booking platform integration and management',
        'A monthly content calendar',
        'A review generation system',
        'A monthly reporting dashboard',
        'A monthly check-in call',
      ],
      outcomeLabel: outcome,
      outcome:
        "a studio that's easier to find on Google Maps, in local search, and in AI answers month over month, more reviews, and a clear monthly view of rankings, traffic, and bookings.",
    },
    {
      name: 'Growth Plan',
      cta: { label: 'Start with the Growth Plan', href: routes.contact },
      price: '$999',
      cadence: 'a month',
      for: 'For studios ready to grow faster on more than one channel.',
      includedLabel: included,
      included: [
        'Everything in the Attract Plan',
        'Paid ads management across Google and Meta',
        'Lead generation campaigns, like intro offers and class passes',
        'Email marketing campaigns',
        'AI search visibility tracking',
        'An expanded dashboard combining paid and organic results',
        'Weekly strategy calls',
      ],
      outcomeLabel: outcome,
      outcome:
        'new faces through the door from paid campaigns while your local visibility builds underneath, plus weekly strategy calls timed to your class calendar and busy seasons.',
      featured: true,
    },
  ],
  setupLine:
    "Every plan starts with a one-time $945 setup: a new website built from your demo, or a Full Audit if you're keeping your current site.",
};

export const expect: { id: string; heading: string; intro: string; items: TimelineItem[] } = {
  id: 'what-to-expect',
  heading: 'What to Expect, Month by Month',
  intro:
    'Typical timelines from industry best practice, not promises. Every market is different, and your dashboard shows the real numbers as they happen.',
  items: [
    {
      title: 'First weeks',
      text: 'Your site goes live, or your audit fixes start. Tracking is set up, your Google Business Profile is cleaned up, and booking is connected.',
    },
    {
      title: 'Months 1 to 2',
      text: 'Technical fixes, neighbourhood pages, and the first content go live. Review requests start running. On the Growth Plan, intro offer campaigns can start bringing in first-timers.',
    },
    {
      title: 'Months 3 to 6',
      text: 'This is where local SEO and AEO usually start compounding: better map rankings, more people finding you directly, and more classes booked from your own site.',
    },
    {
      title: 'Month 6',
      text: "A full picture with real numbers on visibility, bookings, and memberships, and a clear decision on what's next.",
    },
  ],
};

/** Also feeds the HowTo schema */
export const howItWorks: { id: string; heading: string; items: StepItem[] } = {
  id: 'how-it-works',
  heading: 'How It Works',
  items: [
    { title: 'Start free', text: 'Request a free demo of your new website, or a free audit of the one you have.' },
    {
      title: 'Choose your path',
      text: "A new site with the $945 setup, or a Full Audit if you're keeping your current site. Never both.",
    },
    {
      title: 'Launch',
      text: "We build or fix your site, connect it to your booking platform, set up your tracking, and host it for you if it's built from your demo.",
    },
    {
      title: 'Grow',
      text: 'Your Attract or Growth Plan kicks in, with local SEO, AEO, content, reviews, and reporting tied to booked classes.',
    },
  ],
};

/** Real Work: WorkGrid from getRealWork(tag): case studies with this tag first, then featured and labs work (portfolio.yaml), max `limit`. Renders nothing when none match. */
export const realWork = {
  id: 'real-work',
  eyebrow: 'Our Work',
  heading: "Results We've Delivered",
  tag: 'boutique-fitness',
  limit: 3,
} as const;

/** Also feeds the FAQPage schema */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'How much does SEO for a yoga studio cost?',
      a: "A new studio website is a one-time $945 setup, or a Full Audit is $945 if you're keeping your current site. After that, the Attract Plan is $499 a month and the Growth Plan is $999 a month, with everything included listed on this page. Plans run on a 6-month minimum.",
    },
    {
      q: 'Can I do local SEO for my studio myself?',
      a: "You can, and some owners do. Most find they don't have the time once they add up schema, indexing, content, reviews, and Google Business Profile management on top of running classes and a team. That's the gap we fill, so you can focus on your studio.",
    },
    {
      q: 'Do you integrate with Mindbody, Momence, or Marianatek?',
      a: 'Yes, all three. We connect your booking platform directly to your website and reporting, so class schedules, payments, and clients stay in sync. Your team keeps the system it already knows, and new clients can book a class in a few taps from your new website.',
    },
    {
      q: 'What if I already have a website?',
      a: "Start with a free audit. We'll show you what's working and what's costing you bookings. If your site is worth keeping, the Full Audit maps the fixes and growth plan. If it needs replacing, the $945 website setup covers it instead, so you never pay for both.",
    },
    {
      q: "I'm opening a new studio. Can you help?",
      a: "Yes, and it's the best time to start. We set up your website, booking connection, and Google Business Profile before you open, so people searching for classes nearby can find you and book from day one. Request a free demo and we'll show you what your site could look like.",
    },
    {
      q: 'Do you work with studios outside Canada?',
      a: "Yes. We're based in Vancouver, BC, and work with yoga, pilates, spin, and barre studios across Canada and the United States. Everything happens remotely, and we build your local strategy around the neighbourhoods and searches that matter in your city.",
    },
  ],
};

/** From the Blog (tag boutique-fitness): renders nothing until /articles/ has real posts */
export const blog = {
  id: 'blog',
  heading: 'From the Blog',
  intro: "Real, practical answers for studio owners, whether you're already running one or about to open one.",
  tag: 'boutique-fitness',
  cta: { label: 'View All Resources', href: routes.articles },
} as const;

/** Service JSON-LD entries. Custom Website Build is scoped, so it has no offer. */
export const serviceNames = ['Studio Website Setup', 'Full Audit', 'Attract Plan', 'Growth Plan', 'Custom Website Build'];

/** Same number in USD or CAD, whichever the client pays in. Plans are monthly. */
export const serviceOffers: Record<string, { price: number; unit?: 'MON' }> = {
  'Studio Website Setup': { price: 945 },
  'Full Audit': { price: 945 },
  'Attract Plan': { price: 499, unit: 'MON' },
  'Growth Plan': { price: 999, unit: 'MON' },
};

export const cta = {
  id: 'cta',
  heading: 'Ready to Fill Every Class?',
  text: "See your new website before you spend a dollar. Tell us about your studio and we'll build you a free demo.",
  cta: { label: 'Get Your Free Demo', href: routes.demoRequest },
  link: { label: 'Or get a free audit of your current site', href: routes.audit },
};

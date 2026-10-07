// Wellness & Counselling Solutions page content, copied word for word from copy/wellness-counselling.md.
// A conversion funnel: hook → insight → why us → who it's for → what we do → free demo → pricing → what to expect
// → how it works → proof → FAQ → final ask. Real prices are shown here (one of the three demo-industry pages).
import { routes } from '../routes';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { BentoItem } from '../../components/blocks/BentoGrid.astro';
import type { FeatureListItem } from '../../components/blocks/FeatureList.astro';
import type { ServiceIndexItem } from '../../components/blocks/ServiceIndex.astro';
import type { IconGridItem } from '../../components/blocks/IconGrid.astro';
import type { DemoOfferStep } from '../../components/blocks/DemoOffer.astro';
import type { PricingContent } from '../../components/blocks/PricingSection.astro';
import type { TimelineItem } from '../../components/blocks/Timeline.astro';
import type { StepItem } from '../../components/blocks/Steps.astro';
import type { FaqItem } from '../../components/blocks/Faq.astro';

export const seo = {
  title: 'Fadeaway Creatives | SEO for Therapists & Wellness Practices',
  description:
    'SEO, AEO, and websites for therapists, counsellors, chiropractors, and wellness practices. Get found beyond directory listings. Free custom demo.',
};

// Home > Wellness & Counselling: there is no /solutions hub page
export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Wellness & Counselling', href: routes.wellnessCounselling },
];

/** AEO answer capsule: the wide intro of the first section after the Hero */
export const answerCapsule =
  'Fadeaway Creatives builds websites and runs SEO and AEO for therapists, counsellors, chiropractors, and wellness practices across Canada and the US, so new clients find you on Google and in AI assistant recommendations instead of scrolling past you on a directory page. Every site works with the practice software you already use, like Jane App or SimplePractice, and starts with a free custom demo.';

/** Solutions pages ship the statement hero. In `npm run dev`, compare with ?hero=showcase | visual | all. */
export const heroVariant: HeroVariant = 'statement';

export const hero: HeroContent = {
  eyebrow: 'SEO, AEO & Websites for Therapists, Counsellors, Chiropractors & Wellness Practices',
  h1: 'SEO for Therapists, Built to Fill Your Practice',
  sub: 'Get found by new clients on Google and in AI recommendations, not lost on a directory page with dozens of other providers. See your new website before you spend a dollar.',
  primaryCta: { label: 'Get Your Free Demo', href: routes.demoRequest },
  secondaryCta: { label: 'Get a Free Audit of Your Current Site', href: routes.audit },
  breadcrumb,
  visual: 'wellness',
};

export const insights: {
  id: string;
  heading: string;
  intro: string;
  items: BentoItem[];
  cta: { text: string; label: string; href: string };
} = {
  id: 'insights',
  heading: 'How Clients Find Practices Now',
  intro:
    "The way new clients find a therapist, counsellor, or chiropractor has changed. Here's what we see across the practices we look at.",
  items: [
    {
      title: 'Directories Put You Next to Your Competition',
      text: "A directory profile puts you on the same page as dozens of other providers, sorted by things you don't control. Your own website and search presence are the one place a potential client sees only you.",
    },
    {
      title: 'Clients Search by Problem and Place',
      text: 'People rarely search for "a therapist." They search for help with anxiety, couples counselling, back pain, or a sports injury, near where they live or work. Practices with a clear page for each specialty and location get found for those searches.',
    },
    {
      title: 'AI Assistants Now Recommend Providers',
      text: "More people ask ChatGPT, Perplexity, or Google's AI Overviews to suggest a provider. Those tools recommend practices whose websites clearly state who they help, where, how to book, and what they accept.",
    },
    {
      title: 'Booking Has to Be Effortless',
      // Last sentence added Oct 2 (24/7 salesperson framing)
      text: 'Most first visits happen on a phone, often late at night. If booking takes more than a few taps, or sends people to a confusing third-party page, they leave and book somewhere else. Your website should be the one booking new clients at 11pm, long after your front desk has gone home.',
    },
  ],
  // CTA touchpoint, rendered as the bento's closing tile
  cta: { text: 'Want to see how your practice shows up today?', label: 'Get a Free Audit', href: routes.audit },
};

export const why: { id: string; heading: string; items: FeatureListItem[] } = {
  id: 'why',
  heading: 'Why Practices Work With Fadeaway',
  items: [
    {
      icon: 'search-ai',
      title: 'Built to Be Found, Not Just Listed',
      text: 'Every site is structured with the content and technical signals search engines need to recommend you directly, not just list you in a directory.',
    },
    {
      icon: 'sparkles',
      title: 'Ready for AI Search',
      text: "Schema, clear practice details, and content written the way AI assistants read it, so you're the answer when someone asks for a provider near them.",
    },
    {
      icon: 'calendar',
      title: 'Works With Your Practice Software',
      text: 'We build around Jane App, SimplePractice, TherapyNotes, and similar platforms, so booking and intake stay where they already are and your clients get a smoother way in.',
    },
    {
      icon: 'shield',
      title: 'Built Compliance-Ready',
      text: "We know what health practices have to get right: HIPAA in the US, PIPEDA and PHIPA in Canada, and your college or association's advertising rules. Client health information stays out of website forms and email, intake runs through your secure practice software, and your privacy policy and consent language are in place before launch.",
    },
    {
      icon: 'award',
      title: 'Founder-Led, With Fixed Pricing',
      text: '15+ years of experience, hands-on from first call to launch. Every price is on this page, with no hourly billing and no surprises.',
    },
  ],
};

export const practices: { id: string; heading: string; items: ServiceIndexItem[]; note: string } = {
  id: 'which-practice-fits',
  heading: 'Which Practice Fits',
  items: [
    {
      title: 'Therapists & Counsellors',
      text: 'Private practice or group practice, we help you stop relying on directories alone and build a search presence that brings clients directly to you.',
    },
    {
      title: 'Chiropractors',
      text: "Patients search when they're in pain and ready to book. We help you show up first for the searches that matter in your area.",
    },
    {
      title: 'Physical Therapy',
      text: 'Referrals matter, but so does being found directly by someone searching for relief right now. We build for both.',
    },
  ],
  // Med spas: a light mention only (founder, Oct 1)
  note: 'We also work with med spas and aesthetic practices.',
};

export const services: {
  id: string;
  heading: string;
  items: IconGridItem[];
  labs: { heading: string; text: string; link: { label: string; href: string } };
} = {
  id: 'services',
  heading: 'What We Do for Your Practice',
  items: [
    {
      icon: 'calendar',
      title: 'A Website Built Around Your Booking Flow',
      text: 'Connected to the practice software you already use, so booking and intake work the way your clients expect, on any phone.',
    },
    {
      icon: 'shield',
      title: 'Compliance-Ready Setup',
      text: "Secure booking and intake links instead of open contact forms for health details, a privacy policy and consent language you approve, and no testimonials or claims that break your profession's advertising rules.",
    },
    {
      icon: 'map-pin',
      title: 'Local SEO and AEO',
      text: 'Structured data, Google Business Profile, local listings, and content built to get you found on Google and recommended by AI assistants.',
    },
    {
      icon: 'map',
      title: 'Specialty and Location Pages',
      text: 'A clear page for each service you offer and each area you serve, written around the questions clients actually search.',
    },
    {
      icon: 'star',
      title: 'Content and Reviews',
      text: 'A monthly content calendar and a review generation system that keep new clients finding you and trusting you.',
    },
    {
      icon: 'dashboard',
      title: 'Reporting and Regular Check-ins',
      text: 'A dashboard tracking your rankings, traffic, and bookings, with a monthly check-in call, or weekly strategy calls on the Growth Plan.',
    },
  ],
  // Labs mention (founder, Oct 1): wording from the approved Growth page
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
  id: 'free-demo',
  heading: 'See Your New Website First',
  text: "We'll build a free 2 to 4 page demo of your new website, based on what already works for wellness practices and shaped around yours. No cost, no obligation.",
  steps: [
    { title: 'Tell us about your practice', text: 'a few details and what you need. It takes about a minute.' },
    { title: 'We build your demo', text: 'your homepage and the pages that matter most for bookings.' },
    {
      title: 'Review it with no pressure',
      text: 'we send you a private link and a short overview. If you love it, we make it your live site.',
    },
  ],
  cta: { label: 'Get Your Free Demo', href: routes.demoRequest },
  fallback: { text: 'Already have a website you want to keep?', link: { label: 'Get a free audit instead', href: routes.audit } },
};

const included = "What's included:";
const outcome = 'What you get out of it:';

export const pricing: PricingContent & { id: string; heading: string; intro: string } = {
  id: 'pricing',
  heading: 'What You Pay For, and What You Get',
  intro: 'Fixed prices, complete deliverable lists, and honest expectations. You pay for an audit or a website setup to start, never both.',
  // Start with one (never both)
  start: [
    {
      name: 'Practice Website Setup',
      price: '$945',
      cadence: 'one time',
      for: 'For practices that want a professional site live fast.',
      note: 'Your free demo shows you 2 to 4 pages first. Once you approve it, we build out the rest of your site from our wellness practice library and launch it.',
      includedLabel: included,
      included: [
        'A complete practice website: the pages from your demo, plus the rest your practice needs, like services and specialties, about, booking and contact, locations, and FAQ',
        'All website copy written for you, SEO and AEO ready from day one',
        'Your branding: logo, colours, photos, and your practice details',
        'Booking and intake connected to your practice software, like Jane App or SimplePractice',
        'Built mobile-first, fast, and secure',
        'Compliance-ready setup: no health information in open forms, privacy policy and consent language in place',
        'On-page SEO, structured data, and AEO basics set up at launch',
        'Google Analytics and Search Console set up, with booking clicks tracked',
        "Hosting included while you're on a plan",
        '1 round of revisions before launch',
      ],
      outcomeLabel: outcome,
      outcome:
        'a professional, fast website live within 2 weeks of approving your demo, written and structured to rank, ready to be recommended by AI tools, and set up to turn visitors into booked appointments. Paired with an Attract or Growth Plan.',
      featured: true,
    },
    {
      name: 'Full Audit',
      price: '$945',
      cadence: 'one time',
      for: 'For practices keeping their current site.',
      includedLabel: included,
      included: [
        'A full website and account review',
        'Keyword research for your specialties and area',
        "An in-depth AEO readiness check: how ChatGPT, Perplexity, and Google's AI Overviews see your practice",
        "A compliance check of your site's forms, privacy policy, and claims",
        'A content strategy foundation',
        'Quick wins identified and ready to act on',
        'A clear 3 to 6 month action plan',
      ],
      outcomeLabel: outcome,
      outcome:
        "a clear, prioritized picture of what's holding your practice back and exactly what to fix first. If you move ahead with a new website instead, the fee is credited toward it.",
    },
  ],
  plans: [
    {
      name: 'Attract Plan',
      price: '$499',
      cadence: 'a month',
      for: 'For practices that want steady, compounding visibility.',
      includedLabel: included,
      included: [
        'Ongoing technical SEO and site health monitoring',
        'Structured data and AEO signals kept current',
        'Local SEO and Google Business Profile management',
        'Booking and practice software integration and management',
        'A monthly content calendar',
        "A review generation system, set up within your profession's rules",
        'A monthly reporting dashboard',
        'A monthly check-in call',
      ],
      outcomeLabel: outcome,
      outcome:
        "a practice that's easier to find on Google Maps, in local search, and in AI answers month over month, more reviews, and a clear monthly view of rankings, traffic, and bookings.",
    },
    {
      name: 'Growth Plan',
      price: '$999',
      cadence: 'a month',
      for: 'For practices ready to grow faster on more than one channel.',
      includedLabel: included,
      included: [
        'Everything in the Attract Plan',
        'Paid ads management across Google and Meta',
        'Lead generation campaigns',
        'Email marketing campaigns',
        'AI search visibility tracking',
        'An expanded dashboard combining paid and organic results',
        'Weekly strategy calls',
      ],
      outcomeLabel: outcome,
      outcome:
        "new client inquiries from paid campaigns while your search visibility builds underneath, plus weekly strategy calls so spend goes to what's actually filling your calendar.",
      featured: true,
    },
  ],
  finePrint:
    'Plans run on a 6-month minimum. Ad spend is paid directly by you to Google and Meta. Results depend on your market, competition, and starting point; we never guarantee rankings.',
  custom: {
    heading: 'Need More Than the Website Setup?',
    text: 'Multi-location clinics, heavier customization, or a custom-designed site are scoped as a custom build and quoted at a fixed price before we start.',
    link: { label: 'See Build Services', href: routes.build },
  },
  cta: { label: 'Get Your Free Demo', href: routes.demoRequest },
};

export const expect: { id: string; heading: string; intro: string; items: TimelineItem[] } = {
  id: 'what-to-expect',
  heading: 'What to Expect, Month by Month',
  intro:
    'Typical timelines from industry best practice, not promises. Every market is different, and your dashboard shows the real numbers as they happen.',
  items: [
    {
      title: 'First weeks',
      text: 'Your site goes live, or your audit fixes start. Tracking is set up, your Google Business Profile is cleaned up, and compliance basics are in place.',
    },
    {
      title: 'Months 1 to 2',
      text: 'Technical fixes, specialty and location pages, and the first content go live. Reviews start coming in. On the Growth Plan, paid campaigns can start bringing in inquiries.',
    },
    {
      title: 'Months 3 to 6',
      text: 'This is where SEO and AEO usually start compounding: better local rankings, more people finding you directly instead of through directories, and more bookings from your own site.',
    },
    {
      title: 'Month 6',
      text: "A full picture with real numbers on visibility, inquiries, and bookings, and a clear decision on what's next.",
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
      text: "We build or fix your site, connect it to your practice software, set up your tracking, and host it for you if it's built from your demo.",
    },
    {
      title: 'Grow',
      text: 'Your Attract or Growth Plan kicks in, with SEO, AEO, content, and reporting tied to new client bookings.',
    },
  ],
};

/** Real Work: WorkGrid from getRealWork(tag): case studies with this tag first, then featured and labs work (portfolio.yaml), max `limit`. Renders nothing when none match. */
export const realWork = {
  id: 'real-work',
  eyebrow: 'Our Work',
  heading: "Results We've Delivered",
  tag: 'wellness-counselling',
  limit: 3,
} as const;

/** Also feeds the FAQPage schema */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'How much does SEO for therapists cost?',
      a: "A new practice website is a one-time $945 setup, or a Full Audit is $945 if you're keeping your current site. After that, the Attract Plan is $499 a month and the Growth Plan is $999 a month, with everything included listed on this page. Plans run on a 6-month minimum.",
    },
    {
      q: 'Can I just do my own SEO instead of hiring someone?',
      a: "You can, and some practices do. But SEO and AEO take real time every month: keyword research, technical fixes, content, schema, and reviews. Most clinicians don't have that time alongside a full caseload. We handle all of it so you can focus on your clients, not your website.",
    },
    {
      q: 'Is my website compliant with HIPAA, PIPEDA, and PHIPA?',
      a: 'We build every practice site compliance-ready. Client health information stays out of website forms and email, booking and intake run through your secure practice software, and your privacy policy and consent language are in place before launch. Your practice stays responsible for its own compliance, and your website is set up to support it.',
    },
    {
      q: 'Do you work with Jane App, SimplePractice, or TherapyNotes?',
      a: 'Yes. We build your site around the practice management and booking platform you already use, so clients can book and complete intake without you switching systems or moving client records. Your team keeps its tools, and your clients get a smoother way to book from your new website.',
    },
    {
      q: 'What if I already have a website?',
      a: "Start with a free audit. We'll show you what's working and what's costing you clients. If your site is worth keeping, the Full Audit maps the fixes and growth plan. If it needs replacing, the $945 website setup covers it instead, so you never pay for both.",
    },
    {
      q: 'Do you work with practices outside Canada?',
      a: "Yes. We're based in Vancouver, BC, and work with therapists, counsellors, chiropractors, physical therapy clinics, and med spas across Canada and the United States. Everything happens remotely, and we build your strategy around how clients in your specific city and province or state search for care.",
    },
  ],
};

/** From the Blog (tag wellness-counselling): renders nothing until /articles/ has real posts */
export const blog = {
  id: 'blog',
  heading: 'From the Blog',
  intro: 'Real, practical answers to the questions we hear most from therapists, counsellors, chiropractors, and wellness practices.',
  tag: 'wellness-counselling',
  cta: { label: 'View All Resources', href: routes.articles },
} as const;

/** Service JSON-LD entries (copy frontmatter `schema`). Custom Website Build is scoped, so it has no offer. */
export const serviceNames = ['Practice Website Setup', 'Full Audit', 'Attract Plan', 'Growth Plan', 'Custom Website Build'];

/** Same number in USD or CAD, whichever the client pays in (founder, Oct 1). Plans are monthly. */
export const serviceOffers: Record<string, { price: number; unit?: 'MON' }> = {
  'Practice Website Setup': { price: 945 },
  'Full Audit': { price: 945 },
  'Attract Plan': { price: 499, unit: 'MON' },
  'Growth Plan': { price: 999, unit: 'MON' },
};

export const cta = {
  id: 'cta',
  heading: 'Ready to Fill Your Practice?',
  text: "See your new website before you spend a dollar. Tell us about your practice and we'll build you a free demo.",
  cta: { label: 'Get Your Free Demo', href: routes.demoRequest },
  link: { label: 'Or get a free audit of your current site', href: routes.audit },
};

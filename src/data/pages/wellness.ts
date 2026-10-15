// Wellness & Counselling Solutions page content, copied word for word from copy/wellness-counselling.md (Oct 14 rewrite).
// Same blocks and layout as Boutique Fitness: hero audit box → how clients find practices (3 cards) → tailored solutions
// (practice tiles + strip + call-out) → from search to booked client (3 stages) → pricing → why (4) → what to expect → FAQ → final ask.
// No demo anywhere until it returns after launch (founder, Oct 14); How It Works and its HowTo schema are hidden.
// Real prices are shown here (one of the three demo-industry pages).
import { routes } from '../routes';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { BentoItem } from '../../components/blocks/BentoGrid.astro';
import type { FeatureListItem } from '../../components/blocks/FeatureList.astro';
import type { CardGridItem } from '../../components/blocks/CardGrid.astro';
import type { IconGridItem } from '../../components/blocks/IconGrid.astro';
import type { PricingContent } from '../../components/blocks/PricingSection.astro';
import type { TimelineItem } from '../../components/blocks/Timeline.astro';
import type { StepItem } from '../../components/blocks/Steps.astro';
import type { FaqItem } from '../../components/blocks/Faq.astro';

export const seo = {
  title: 'SEO for Therapists & Wellness Practices | Fadeaway Creatives',
  description:
    'SEO, AEO, and websites for therapists, counsellors, chiropractors, and wellness practices. Get found beyond directory listings, on Google and in AI search.',
};

// Home > Wellness & Counselling: there is no /solutions hub page
export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Wellness & Counselling', href: routes.wellnessCounselling },
];

/** AEO answer capsule: screen-reader text in the first section after the Hero (same as Boutique Fitness) */
export const answerCapsule =
  'Fadeaway Creatives builds websites and runs SEO and AEO for therapists, counsellors, chiropractors, and wellness practices across Canada and the US, so new clients find you on Google and in AI assistant recommendations instead of scrolling past you on a directory page. Every site works with the practice software you already use, like Jane App or SimplePractice, with monthly plans starting from $495.';

/** Solutions pages ship the statement hero. In `npm run dev`, compare with ?hero=showcase | visual | all. */
export const heroVariant: HeroVariant = 'statement';

export const hero: HeroContent = {
  eyebrow: 'SEO, AEO & Websites for Therapists, Counsellors, Chiropractors & Wellness Practices',
  h1: 'SEO for Therapists, Built to Fill Your Practice',
  sub: 'Get found by new clients on Google and in AI recommendations, not lost on a directory page with dozens of other providers.',
  auditForm: { action: routes.audit, label: 'Get a Free Audit of Your Current Site', placeholder: 'yourpractice.com', button: 'Get Your Free Audit' },
  breadcrumb,
  visual: 'wellness',
};

export const insights: {
  id: string;
  heading: string;
  items: BentoItem[];
  cta: { text: string; label: string; href: string };
} = {
  id: 'insights',
  heading: 'How Clients Find Practices Now',
  items: [
    {
      title: 'Directories Put You Next to Your Competition',
      text: "A directory profile puts you on the same page as dozens of other providers, sorted by things you don't control. Your own website is the one place a potential client sees only you.",
    },
    {
      title: 'Clients Search by Problem and Place',
      text: 'People rarely search for "a therapist." They search for help with anxiety, couples counselling, back pain, or a sports injury, near where they live or work. A clear page for each specialty and location gets you found.',
    },
    {
      title: 'AI Assistants Now Recommend Providers',
      text: "More people ask ChatGPT, Perplexity, or Google's AI Overviews to suggest a provider. Those tools recommend practices whose websites clearly state who they help, where, and how to book.",
    },
  ],
  // CTA touchpoint, rendered as the bento's closing tile
  cta: { text: 'Want to see how your practice shows up today?', label: 'Get a Free Audit', href: routes.audit },
};

export const audience: {
  id: string;
  heading: string;
  items: CardGridItem[];
  note: string;
  cta: { title: string; body: string; label: string; href: string };
  strip: { label: string; items: IconGridItem[] };
} = {
  id: 'who-its-for',
  heading: 'Tailored Solutions Built for Wellness Practices',
  items: [
    { title: 'Therapists & Counsellors', illustration: 'practice-therapy' },
    { title: 'Chiropractors', illustration: 'practice-chiro' },
    { title: 'Physical Therapy', illustration: 'practice-physio' },
  ],
  // Med spas: a light mention only (founder, Oct 1)
  note: 'We also work with med spas and aesthetic practices.',
  strip: {
    label: 'For Every Practice',
    items: [
      {
        icon: 'sparkles',
        title: 'A Site That Feels Like Your Practice',
        text: 'Calm, clear and welcoming, so a first-time client feels comfortable reaching out.',
      },
      {
        icon: 'star',
        title: 'Your Clinicians, Front and Center',
        text: 'Bios, specialties and approach for each clinician, so clients find the right fit before they book.',
      },
      {
        icon: 'workflow',
        title: 'Works With Your Practice Software',
        text: "Jane App, SimplePractice, TherapyNotes and similar platforms stay at the centre, so booking and intake don't change for your team.",
      },
      {
        icon: 'bulb',
        title: 'Starting Your Own Practice?',
        text: 'We set up your site, booking, and Google Business Profile the right way from day one.',
      },
    ],
  },
  cta: {
    title: "Let's Grow Your Practice",
    body: 'Tell us about your practice and we will help you plan what comes next.',
    label: 'Contact Us',
    href: routes.contact,
  },
};

export const services: {
  id: string;
  heading: string;
  stages: { title: string; items: IconGridItem[] }[];
} = {
  id: 'services',
  heading: 'From Search to Booked Client',
  stages: [
    {
      title: 'Get Found',
      items: [
        {
          icon: 'map',
          title: 'Specialty and Location Pages',
          text: 'A clear page for each service you offer and each area you serve, written around the questions clients actually search.',
        },
        {
          icon: 'map-pin',
          title: 'Win the Local Map Results',
          text: 'Google Business Profile and local listings optimized so you show up when someone nearby searches for care.',
        },
      ],
    },
    {
      title: 'Get Chosen',
      items: [
        {
          icon: 'search-ai',
          title: 'AEO for AI Recommendations',
          text: "Structured data and clear practice details, so you're the answer when someone asks an AI assistant for a provider near them.",
        },
        {
          icon: 'shield',
          title: 'Trust Before the First Session',
          text: "Clinician bios, credentials, and a review strategy that follows your college's or association's rules, so new clients feel confident booking.",
        },
      ],
    },
    {
      title: 'Get Booked',
      items: [
        {
          icon: 'calendar',
          title: 'A Website Built Around Your Booking Flow',
          text: 'Connected to Jane App, SimplePractice, or the software you already use, so booking a first session takes a few taps, even at 11pm.',
        },
        {
          icon: 'dashboard',
          title: 'Track Real Bookings, Not Views',
          text: 'A dashboard showing which searches turn into booked appointments, not just which pages get visited.',
        },
      ],
    },
  ],
};

const included = "What's included:";

export const pricing: PricingContent & { id: string; eyebrow?: string; heading: string; intro?: string } = {
  id: 'pricing',
  eyebrow: 'Pricing',
  heading: 'Clear Deliverables.\nTransparent Pricing.',
  detailsLabel: 'See Deliverables',
  plans: [
    {
      name: 'Attract Plan',
      cta: { label: 'Start with the Attract Plan', href: routes.contact },
      tone: 'accent',
      price: '$495',
      priceLead: 'Starts from',
      priceNote: '$945 one-time website build setup',
      cadence: '/ month',
      for: 'For practices that want steady, compounding visibility.',
      includedLabel: included,
      points: [
        'Full SEO and AEO foundation, set up compliance-ready',
        'New content, local links and site improvements every month',
        'Clear dashboard and monthly strategy calls',
      ],
      deliverables: [
        {
          title: 'Build the Foundation',
          sections: [
            { label: 'Research and planning', items: [
              'Local market and keyword research for your specialties and service areas',
              'A keyword map that gives every page one clear job',
              'Site structure and URL plan, with redirects so nothing breaks',
            ] },
            { label: 'Your pages', items: [
              'Page copy written and tuned for search, page by page',
              'Page titles and descriptions written to earn the click',
              'Structured data (JSON-LD) so Google and AI tools can read your services, clinicians, locations and hours',
            ] },
            { label: 'Technical health', items: [
              'Technical SEO fixes: speed, mobile, indexing and broken links',
              'A backlink audit, with spammy links cleaned up',
            ] },
            { label: 'Compliance', items: [
              'A compliance check of your forms, privacy policy and claims',
              'Forms and tracking set up so client health details stay out of email, analytics and ad pixels',
            ] },
            { label: 'Local presence', items: [
              'Google Business Profile fully optimized',
              'Business listings made consistent across directories',
              'Your practice software connected to your site and your tracking',
            ] },
            { label: 'Tracking', items: [
              'Google Analytics, Search Console and booking tracking set up',
              'Your reporting dashboard built',
            ] },
          ],
        },
        {
          title: 'Every Month: Grow and Compound',
          sections: [
            { items: [
              'A content calendar built around your specialties, the concerns you treat and the areas you serve',
              'New content that makes you the trusted local practice for what you treat, on Google and in AI answers',
              'Link building from local sites and health directories',
              'Conversion improvements to your booking and service pages',
              'Google Business Profile posts and updates',
              "A review strategy that follows your college's or association's rules",
              'Site health, rankings and AI search signals monitored',
              '24/7 reporting dashboard',
              'Monthly strategy calls',
            ] },
          ],
        },
      ],
    },
    {
      name: 'Growth Plan',
      cta: { label: 'Start with the Growth Plan', href: routes.contact },
      tone: 'highlight',
      price: '$995',
      priceLead: 'Starts from',
      priceNote: '$945 one-time website build setup',
      cadence: '/ month',
      for: 'For practices ready to grow faster on more than one channel.',
      includedLabel: included,
      points: [
        'Everything in the Attract Plan',
        'Paid ads, consultation campaigns and email',
        'Weekly strategy calls',
      ],
      deliverables: [
        {
          title: 'Everything in the Attract Plan, plus:',
          sections: [
            { label: 'Paid campaigns', items: [
              'Google and Meta campaigns set up within health advertising rules',
              'New-client and consultation campaigns, each with its own landing page',
              'Ongoing testing of ads, audiences and offers',
            ] },
            { label: 'Email', items: [
              'Welcome emails for new clients who opt in',
              'Newsletters and updates for clients who have opted in',
              'Announcements for new services, clinicians and locations',
            ] },
            { label: 'Visibility and reporting', items: [
              'AI search visibility tracking across ChatGPT, Perplexity and Google AI Overviews',
              'An expanded dashboard with paid and organic results side by side',
              'Weekly strategy calls',
            ] },
          ],
        },
      ],
    },
  ],
};

/** Row card under the pricing cards (same as Boutique Fitness) */
export const customRow = {
  art: 'wireframe' as const,
  title: 'Need Something Custom?',
  body: "Multi-location clinics and custom-designed sites are scoped as a custom build, and Fadeaway Labs builds custom apps, automations and dashboards. See what we've built in our portfolio.",
  links: [
    { label: 'Explore Fadeaway Labs', href: routes.labs },
    { label: 'See Our Portfolio', href: routes.portfolio },
  ],
};

export const why: { id: string; heading: string; items: FeatureListItem[] } = {
  id: 'why',
  heading: 'Why Practices Work With Fadeaway',
  items: [
    {
      icon: 'calendar',
      title: 'Built for Health Practices, Not Generic Small Businesses',
      text: "Specialty pages, clinician bios, intake and booking flows are built in from the start, because that's how clients choose a provider.",
    },
    {
      icon: 'shield',
      title: 'Built Compliance-Ready',
      text: "We know what health practices have to get right: HIPAA in the US, PIPEDA and PHIPA in Canada, and your college or association's advertising rules. Client health information stays out of website forms and email, intake runs through your secure practice software, and your privacy policy and consent language are in place before launch.",
    },
    {
      icon: 'map-pin',
      title: 'Found Locally and in AI Search',
      text: 'Google Business Profile, specialty and location pages, and structured data set up so you show up on the map and in AI recommendations.',
    },
    {
      icon: 'award',
      title: 'Founder-Led, With Clear Pricing',
      text: '15+ years of experience, hands-on from first call to launch. Every plan price is on this page, with no hourly billing and no surprises.',
    },
  ],
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
      text: 'Technical fixes, specialty and location pages, and the first content go live. Your review strategy starts where your profession allows it. On the Growth Plan, paid campaigns can start bringing in inquiries.',
    },
    {
      title: 'Months 3 to 6',
      text: 'This is where SEO and AEO usually start compounding: better local rankings, more people finding you directly instead of through directories, and more bookings from your own site.',
    },
    {
      title: 'Month 6+',
      text: "A full picture with real numbers on visibility, inquiries, and bookings, and a clear decision on what's next.",
    },
  ],
};

/** HIDDEN from the page Oct 14 (with its HowTo schema), same as Boutique Fitness. Kept for reuse. */
export const howItWorks: { id: string; heading: string; items: StepItem[] } = {
  id: 'how-it-works',
  heading: 'How It Works',
  items: [
    { title: 'Start free', text: 'Contact us about a new website, or ask for a free audit of the one you have.' },
    {
      title: 'Choose your path',
      text: "A new site with the $945 setup, or a Full Audit if you're keeping your current site. Never both.",
    },
    {
      title: 'Launch',
      text: 'We build or fix your site, connect it to your practice software, set up your tracking, and host it for you if we built it.',
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
      a: "A new practice website is a one-time $945 setup, or a Full Audit is $945 if you're keeping your current site. After that, the Attract Plan is $495 a month and the Growth Plan is $995 a month, with everything included listed on this page. Plans run on a 6-month minimum.",
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
  'Attract Plan': { price: 495, unit: 'MON' },
  'Growth Plan': { price: 995, unit: 'MON' },
};

export const cta = {
  id: 'cta',
  heading: 'Ready to Fill Your Practice?',
  text: 'Tell us about your practice and we will help you plan what comes next.',
  cta: { label: 'Contact Us', href: routes.contact },
  link: { label: 'Or get a free audit of your current site', href: routes.audit },
};

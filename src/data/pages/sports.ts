// Sports Academies Solutions page content, copied word for word from copy/sports.md.
// Same conversion funnel and offer structure as Wellness and Boutique Fitness, plus a Method section and a
// founder-led "Why Fadeaway" near the end. Outbound-first: the proof line and eyebrow name the buyer fast.
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
  title: 'Fadeaway Creatives | Sports Team Website Design & SEO',
  description:
    'Websites, SEO, and AEO for sports clubs, academies, camps, and combat sports gyms. Get found by parents, keep your registration software. Free demo.',
};

// Home > Sports Academies: there is no /solutions hub page
export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Sports Academies', href: routes.sports },
];

/** AEO answer capsule: the wide intro of the first section after the Hero */
export const answerCapsule =
  'Fadeaway Creatives builds websites and runs SEO and AEO for sports clubs, academies, camps, and combat sports gyms across Canada and the US. We make your program easy for parents to find on Google and in AI answers, with clear fees, season, and tryout pages, and we connect it to the registration software you already use, like LeagueApps, TeamSnap, or GotSport.';

export const heroVariant: HeroVariant = 'statement';

export const hero: HeroContent = {
  proofLine:
    'Founder-led, 15+ years of experience. You work directly with the founder, who personally leads our sports and combat sports work.',
  eyebrow: 'Websites, SEO & AEO for Club Directors, Academy Owners, Coaches & Program Directors',
  h1: 'Sports Team Website Design That Fills Your Roster',
  sub: 'Parents find you on Google and in AI answers before tryouts open. Keep the registration software you already use; we rebuild the front door and wire it in. See your new site before you spend a dollar.',
  primaryCta: { label: 'Get Your Free Demo', href: routes.demoRequest },
  secondaryCta: { label: 'See What Parents Search For', href: '#problem' },
  breadcrumb,
  visual: 'sports',
};

export const problem: {
  id: string;
  heading: string;
  intro: string;
  items: BentoItem[];
  cta: { text: string; label: string; href: string };
} = {
  id: 'problem',
  heading: 'What Parents See Before They Ever Call You',
  // Midnight line added Oct 2 (24/7 salesperson framing)
  intro:
    'Parents compare clubs online long before they show up to a tryout, and they check fees and tryout dates at midnight. Your site should answer before another club does. Most club websites lose them in a few quiet ways.',
  items: [
    {
      title: "Your Site Looks Like Every Other Club's",
      text: "Template sites make a serious program look the same as the rec league down the road. Parents paying premium season fees expect a site that looks like the program they're paying for.",
    },
    {
      title: "Parents Can't Find Your Fees or Season Dates",
      text: `"How much is club volleyball" is searched around 300 times a month in the US alone. Clubs with a clear fees page show up in those results and get quoted in AI answers. Most clubs don't have one.`,
    },
    {
      title: "You're Invisible When Parents Search Near Them",
      text: 'When a parent searches for a club nearby or asks ChatGPT for a recommendation, the clubs with clean local listings and clearly structured information get named. Everyone else gets skipped.',
    },
    {
      title: 'Registration Leaks Before Anyone Signs Up',
      text: "If a parent has to hunt for the signup link, click through three pages, or land on a generic form that doesn't match your brand, some of them leave. That's a lost season, not a lost click.",
    },
  ],
  cta: { text: 'See what parents find for your program.', label: 'Get a Free Audit', href: routes.audit },
};

export const programs: { id: string; heading: string; items: ServiceIndexItem[] } = {
  id: 'programs',
  heading: 'Built for Every Kind of Sports Program',
  items: [
    {
      title: 'Club Teams & Travel Programs',
      text: "Volleyball, baseball, softball, soccer, basketball, and more. Parents ask almost the same questions in every sport: what it costs, when the season starts, and whether it's worth it. We build your site to answer them.",
    },
    {
      title: 'Academies & Elite Training',
      text: 'Skill development and elite training programs need to show serious coaching and real progress. We build sites that make that case before a parent books an evaluation.',
    },
    {
      title: 'Martial Arts & Combat Sports',
      text: 'Boxing, MMA, jiu-jitsu, and martial arts gyms, built to turn a first search into a first class, and connected to the membership and booking tools you already run.',
    },
    {
      title: 'Camps & Seasonal Programs',
      text: 'Summer camps, clinics, and seasonal programs depend on the registration window. We build pages that fill spots before the deadline, not after it passes.',
    },
  ],
};

export const services: {
  id: string;
  heading: string;
  items: IconGridItem[];
  labs: { heading: string; text: string; link: { label: string; href: string } };
} = {
  id: 'services',
  heading: 'What We Do for Sports Programs',
  items: [
    {
      icon: 'browser',
      title: 'A Website That Looks Like a Serious Program',
      text: "Custom design built around your club's brand, your teams, and your coaches, mobile-first because most parents look you up on their phone between practices.",
    },
    {
      icon: 'workflow',
      title: 'Keep Your Registration Software',
      text: 'Keep LeagueApps, TeamSnap, GotSport, or SportsEngine running registration and scheduling. We build the front door and connect it, so parents go from your site to signed up without getting lost.',
    },
    {
      icon: 'price-tag',
      title: 'Fees, Season, and Tryout Pages Parents Search For',
      text: 'Clear pages for fees, season dates, tryouts, and what a season includes, written to answer the exact questions parents type into Google and ask AI assistants.',
    },
    {
      icon: 'calendar',
      title: 'Season-Ready Content & Campaigns',
      text: 'Content and campaigns timed to your tryout and registration calendar, so interest peaks when signups open, not after they close.',
    },
    {
      icon: 'chart-up',
      title: 'Track Real Registrations',
      text: 'A dashboard showing which searches turn into a registration or an evaluation booking, not just which pages get visited.',
    },
  ],
  labs: {
    heading: 'Need Custom Software Instead',
    text: 'Custom registration flows, member portals, and automations beyond your website live at Fadeaway Labs.',
    link: { label: 'See Fadeaway Labs', href: routes.labs },
  },
};

export const method: { id: string; heading: string; intro: string; items: FeatureListItem[] } = {
  id: 'method',
  heading: 'Our AEO & SEO Method',
  intro: "Here's exactly how we get your program found, on Google and in AI search.",
  items: [
    {
      icon: 'map-pin',
      title: 'Win the Map Pack',
      text: 'We optimize your Google Business Profile so your club shows up on the map when parents search for a program nearby.',
    },
    {
      icon: 'map',
      title: 'Reach the Towns Parents Drive From',
      text: 'Families often travel for the right program. We build content for your whole area, not just the town your facility sits in.',
    },
    {
      icon: 'search-ai',
      title: 'Be the Club AI Recommends',
      text: "Parents are starting to ask ChatGPT and Google's AI which club to choose. We structure your programs, fees, and seasons with schema so AI assistants can confidently name you.",
    },
    {
      icon: 'sparkles',
      title: 'Answer the Questions Parents Ask',
      text: "Cost, season length, age groups, and whether it's worth it. We turn those questions into page content and FAQs, the format AI answers quote most often.",
    },
    {
      icon: 'star',
      title: 'Reviews After Every Season',
      text: 'Automated review requests go out after tryouts, tournaments, and season wrap-ups, when families are happiest and most likely to leave one.',
    },
  ],
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
  text: "We'll build a free 2 to 4 page demo of your new website, based on what already works for sports programs and shaped around yours. No cost, no obligation.",
  steps: [
    { title: 'Tell us about your program', text: 'a few details and what you need. It takes about a minute.' },
    { title: 'We build your demo', text: 'your homepage and the pages parents check first, like programs, fees, and tryouts.' },
    {
      title: 'Review it with no pressure',
      text: 'we send you a private link and a short overview you can share with your board or coaches. If you love it, we make it your live site.',
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
  intro:
    'Fixed prices, complete deliverable lists, and honest expectations. Clear numbers you can take straight to your board. You pay for an audit or a website setup to start, never both.',
  start: [
    {
      name: 'Program Website Setup',
      price: '$945',
      cadence: 'one time',
      for: 'For programs that want a professional site live fast.',
      note: 'Your free demo shows you 2 to 4 pages first. Once you approve it, we build out the rest of your site from our sports program library and launch it.',
      includedLabel: included,
      included: [
        'A complete program website: the pages from your demo, plus the rest your program needs, like programs and teams, fees and season details, tryouts or evaluations, coaches, schedule, about, contact, and FAQ',
        'All website copy written for you, SEO and AEO ready from day one',
        'Your branding: logo, colours, photos, and your program details',
        'Registration connected to your platform, like LeagueApps, TeamSnap, GotSport, or SportsEngine, or to your membership and class booking tools',
        'Built mobile-first, fast, and secure',
        'On-page SEO, structured data, and AEO basics set up at launch',
        'Google Business Profile set up or cleaned up',
        'Google Analytics and Search Console set up, with registration clicks tracked',
        "Hosting included while you're on a plan",
        '1 round of revisions before launch',
      ],
      outcomeLabel: outcome,
      outcome:
        'a professional, fast website live within 2 weeks of approving your demo, built to answer the questions parents search, ready to be recommended by AI tools, and set up to turn visits into registrations. Paired with an Attract or Growth Plan.',
      featured: true,
    },
    {
      name: 'Full Audit',
      price: '$945',
      cadence: 'one time',
      for: 'For programs keeping their current site.',
      includedLabel: included,
      included: [
        'A full website and search presence review',
        'A registration flow review: how many steps it takes to sign up, and where parents drop off',
        'What parents find when they search for your sport in your area',
        'Keyword research for your sport and your area',
        "An in-depth AEO readiness check: how ChatGPT, Perplexity, and Google's AI Overviews describe your program",
        'A content strategy foundation',
        'Quick wins identified and ready to act on',
        'A clear 3 to 6 month action plan you can take to your board',
      ],
      outcomeLabel: outcome,
      outcome:
        "a clear, prioritized picture of what's costing you registrations and exactly what to fix first, timed to your season. If you move ahead with a new website instead, the fee is credited toward it.",
    },
  ],
  plans: [
    {
      name: 'Attract Plan',
      price: '$499',
      cadence: 'a month',
      for: 'For programs that want steady, compounding local visibility.',
      includedLabel: included,
      included: [
        'Ongoing technical SEO and site health monitoring',
        'Structured data and AEO signals kept current',
        'Local SEO and Google Business Profile management',
        'Registration platform integration and management',
        'A monthly content calendar built around your season',
        'A review generation system',
        'A monthly reporting dashboard tracking rankings, inquiries, and registrations',
        'A monthly check-in call',
      ],
      outcomeLabel: outcome,
      outcome:
        "a program that's easier for parents to find on Google Maps, in local search, and in AI answers season over season, more reviews, and a clear monthly view of inquiries and registrations.",
    },
    {
      name: 'Growth Plan',
      price: '$999',
      cadence: 'a month',
      for: 'For programs ready to fill rosters and camps faster.',
      includedLabel: included,
      included: [
        'Everything in the Attract Plan',
        'Paid ads management across Google and Meta',
        'Lead generation campaigns timed to tryouts, camps, and registration windows',
        'Email marketing campaigns to past and prospective families',
        'AI search visibility tracking',
        'An expanded dashboard combining paid and organic results',
        'Weekly strategy calls',
      ],
      outcomeLabel: outcome,
      outcome:
        'registrations from paid campaigns when your window opens, while your search visibility builds underneath, plus weekly strategy calls so every campaign lines up with your season calendar.',
      featured: true,
    },
  ],
  finePrint:
    'Plans run on a 6-month minimum. Ad spend is paid directly by you to Google and Meta. Results depend on your market, competition, and starting point; we never guarantee rankings.',
  custom: {
    heading: 'Need More Than the Website Setup?',
    text: 'Multi-location academies, heavier customization, or a custom-designed site are scoped as a custom build and quoted at a fixed price before we start.',
    link: { label: 'See Build Services', href: routes.build },
  },
  cta: { label: 'Get Your Free Demo', href: routes.demoRequest },
};

export const expect: { id: string; heading: string; intro: string; items: TimelineItem[] } = {
  id: 'what-to-expect',
  heading: 'What to Expect, Season by Season',
  intro:
    'Typical timelines from industry best practice, not promises. Every market and sport is different, and your dashboard shows the real numbers as they happen.',
  items: [
    {
      title: 'First weeks',
      text: 'Your site goes live, or your audit fixes start. Tracking is set up, your Google Business Profile is cleaned up, and registration is connected.',
    },
    {
      title: 'Months 1 to 2',
      text: 'Fees, season, and tryout pages go live, local and area pages follow, and review requests start running. On the Growth Plan, campaigns can start bringing in inquiries.',
    },
    {
      title: 'Months 3 to 6',
      text: "This is where local SEO and AEO usually start compounding: better map rankings, more parents finding you directly, and more registrations from your own site. That's why starting 3 to 6 months before your registration window matters.",
    },
    {
      title: 'Month 6',
      text: 'A full picture with real numbers on inquiries and registrations, and a clear plan for the next season.',
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
      text: "We build or fix your site, connect it to your registration platform, set up your tracking, and host it for you if it's built from your demo.",
    },
    {
      title: 'Grow, season by season',
      text: 'Your Attract or Growth Plan kicks in, with SEO, AEO, content, and campaigns timed to your tryouts and registration windows.',
    },
  ],
};

/** Real Work: WorkGrid from getRealWork(tag): case studies with this tag first, then featured and labs work (portfolio.yaml), max `limit`. Renders nothing when none match. */
export const realWork = {
  id: 'real-work',
  eyebrow: 'Our Work',
  heading: "Results We've Delivered",
  tag: 'sports-academies',
  limit: 3,
} as const;

/** Founder-led note near the end (the founder's own sports background is an open item in the copy file) */
export const why = {
  id: 'why',
  heading: 'Why Fadeaway',
  text: "Sports programs are personal for us. Our founder leads this work directly and spends real time with coaches, club directors, and people across the sports and combat sports world, so we understand how tryouts, registration seasons, and parent decisions actually work. Founder-led, 15+ years of experience, and every program gets the care we'd want if it were our own.",
};

/** Also feeds the FAQPage schema */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'How much does a sports club website cost?',
      a: "A new program website is a one-time $945 setup, or a Full Audit is $945 if you're keeping your current site. After that, the Attract Plan is $499 a month and the Growth Plan is $999 a month, with everything included listed on this page. Plans run on a 6-month minimum.",
    },
    {
      q: 'We already use TeamSnap or LeagueApps. Do we have to switch?',
      a: 'No. Keep LeagueApps, TeamSnap, GotSport, SportsEngine, or whatever runs your registration and scheduling today. We build the website parents see first and connect it to your existing platform, so families go from your site to signed up without you moving any data or retraining your staff.',
    },
    {
      q: 'When should we start before registration opens?',
      a: 'Start three to six months before your registration or tryout window. Search visibility builds over time, and our action plan covers that three to six month stretch. A new website can be live within two weeks, but the clubs that start early are the ones parents find first when registration opens.',
    },
    {
      q: 'Do parents really search for clubs on Google and AI assistants?',
      a: 'Yes. "How to choose a sports club" alone is searched about 2,800 times a month in the US, and parents search cost, season dates, and whether a program is worth it for every major sport. Clubs with clear fees and season pages show up in those results and get quoted in AI answers.',
    },
    {
      q: 'Our board has to approve spending. Can you help with that?',
      a: "Yes. Every price is fixed and published on this page. Your free demo shows the board exactly what the new site looks like, and the Full Audit gives you a written three to six month action plan. It's built so your board decides on specifics, not a sales pitch.",
    },
    {
      q: 'Do you work with martial arts and combat sports gyms?',
      a: 'Yes. Boxing, MMA, jiu-jitsu, and martial arts gyms are a core part of our sports work, alongside club teams, academies, and camps. We work with programs across Canada and the United States, and we connect your site to the membership and class booking tools you already use.',
    },
  ],
};

/** From the Blog (tag sports-academies): renders nothing until /articles/ has real posts */
export const blog = {
  id: 'blog',
  heading: 'From the Blog',
  intro: 'Real, practical answers for club directors, coaches, and the parents they serve.',
  tag: 'sports-academies',
  cta: { label: 'View All Resources', href: routes.articles },
} as const;

/** Service JSON-LD entries. Custom Website Build is scoped, so it has no offer. */
export const serviceNames = ['Program Website Setup', 'Full Audit', 'Attract Plan', 'Growth Plan', 'Custom Website Build'];

/** Same number in USD or CAD, whichever the client pays in. Plans are monthly. */
export const serviceOffers: Record<string, { price: number; unit?: 'MON' }> = {
  'Program Website Setup': { price: 945 },
  'Full Audit': { price: 945 },
  'Attract Plan': { price: 499, unit: 'MON' },
  'Growth Plan': { price: 999, unit: 'MON' },
};

export const cta = {
  id: 'cta',
  heading: 'Ready to Fill Your Roster?',
  text: "See your new website before you spend a dollar. Tell us about your program and we'll build you a free demo.",
  cta: { label: 'Get Your Free Demo', href: routes.demoRequest },
  link: { label: 'Or see what parents find for your program with a free audit', href: routes.audit },
};

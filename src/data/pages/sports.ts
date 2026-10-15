// Sports Academies Solutions page content, copied word for word from copy/sports.md (Oct 14 rewrite).
// Same blocks and layout as Boutique Fitness: hero audit box → what parents see (3 cards) → tailored solutions
// (program tiles + strip + call-out) → from search to signed up (3 stages) → pricing → why → what to expect → FAQ → final ask.
// No demo anywhere until it returns after launch (founder, Oct 14); How It Works and its HowTo schema are hidden.
// Outbound-first (founder outreach), so the Hero keeps the founder proof line.
import { routes } from '../routes';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { BentoItem } from '../../components/blocks/BentoGrid.astro';
import type { CardGridItem } from '../../components/blocks/CardGrid.astro';
import type { IconGridItem } from '../../components/blocks/IconGrid.astro';
import type { PricingContent } from '../../components/blocks/PricingSection.astro';
import type { TimelineItem } from '../../components/blocks/Timeline.astro';
import type { StepItem } from '../../components/blocks/Steps.astro';
import type { FaqItem } from '../../components/blocks/Faq.astro';

export const seo = {
  title: 'Fadeaway Creatives | Sports Team Website Design & SEO',
  description:
    'Websites, SEO, and AEO for sports clubs, academies, camps, and combat sports gyms. Get found by parents, keep your registration software.',
};

// Home > Sports Academies: there is no /solutions hub page
export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Sports Academies', href: routes.sports },
];

/** AEO answer capsule: screen-reader text in the first section after the Hero (same as Boutique Fitness) */
export const answerCapsule =
  'Fadeaway Creatives builds websites and runs SEO and AEO for sports clubs, academies, camps, and combat sports gyms across Canada and the US. We make your program easy for parents to find on Google and in AI answers, with clear fees, season, and tryout pages, and we connect it to the registration software you already use, like LeagueApps, TeamSnap, or GotSport, with monthly plans starting from $495.';

export const heroVariant: HeroVariant = 'statement';

export const hero: HeroContent = {
  // HIDDEN Oct 14 (founder): proofLine 'Founder-led, 15+ years of experience. You work directly with the founder, who personally leads our sports and combat sports work.'
  eyebrow: 'Websites, SEO & AEO for Club Directors, Academy Owners, Coaches & Program Directors',
  h1: 'Sports Team Website Design That Fills Your Roster',
  sub: 'Parents find you on Google and in AI answers before tryouts open. Keep the registration software you already use; we rebuild the front door and wire it in.',
  auditForm: { action: routes.audit, label: 'See What Parents Find for Your Program', placeholder: 'yourclub.com', button: 'Get Your Free Audit' },
  breadcrumb,
  visual: 'sports',
};

export const problem: {
  id: string;
  heading: string;
  items: BentoItem[];
  cta: { text: string; label: string; href: string };
} = {
  id: 'problem',
  heading: 'What Parents See Before They Ever Call You',
  items: [
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

export const programs: {
  id: string;
  heading: string;
  items: CardGridItem[];
  cta: { title: string; body: string; label: string; href: string };
  strip: { label: string; items: IconGridItem[] };
} = {
  id: 'programs',
  heading: 'Tailored Solutions Built for Sports Programs',
  items: [
    { title: 'Club Teams & Travel Programs', illustration: 'program-club' },
    { title: 'Academies & Elite Training', illustration: 'program-academy' },
    { title: 'Martial Arts & Combat Sports', illustration: 'program-martial' },
    { title: 'Camps & Seasonal Programs', illustration: 'program-camp' },
  ],
  strip: {
    label: 'For Every Program',
    items: [
      {
        icon: 'browser',
        title: 'A Site That Looks Like a Serious Program',
        text: 'Your colours, your teams and your coaches, in a fast site that matches what parents are paying for.',
      },
      {
        icon: 'workflow',
        title: 'Keep Your Registration Software',
        text: 'LeagueApps, TeamSnap, GotSport, or SportsEngine stay in charge of signups and schedules. We build the front door and connect it.',
      },
      {
        icon: 'star',
        title: 'Your Coaches, Front and Center',
        text: 'Coach bios and credentials, so parents trust your program before the first tryout or evaluation.',
      },
      {
        icon: 'price-tag',
        title: 'Ready for Your Board',
        text: 'Clear prices on this page and a written plan your board can review before anyone signs.',
      },
    ],
  },
  cta: {
    title: "Let's Grow Your Program",
    body: 'Tell us about your program and we will help you plan what comes next.',
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
  heading: 'From Search to Signed Up',
  stages: [
    {
      title: 'Get Found',
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
      ],
    },
    {
      title: 'Get Chosen',
      items: [
        {
          icon: 'search-ai',
          title: 'Be the Club AI Recommends',
          text: "Parents are starting to ask ChatGPT and Google's AI which club to choose. We structure your programs, fees, and seasons so AI assistants can confidently name you.",
        },
        {
          icon: 'sparkles',
          title: 'Fees, Season, and Tryout Pages',
          text: 'Clear pages for fees, season dates, tryouts, and what a season includes, written to answer the exact questions parents search.',
        },
      ],
    },
    {
      title: 'Get Registered',
      items: [
        {
          icon: 'calendar',
          title: 'Registration Built Into Your Site',
          text: 'Parents check fees and tryout dates at midnight. Your site connects them straight to registration in a few taps, on any phone.',
        },
        {
          icon: 'dashboard',
          title: 'Track Real Registrations',
          text: 'A dashboard showing which searches turn into a registration or an evaluation booking, not just which pages get visited.',
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
      for: 'For programs that want steady, compounding local visibility.',
      includedLabel: included,
      points: [
        'Full SEO and AEO foundation',
        'New content, local links and site improvements every month',
        'Clear dashboard and monthly strategy calls',
      ],
      deliverables: [
        {
          title: 'Build the Foundation',
          sections: [
            { label: 'Research and planning', items: [
              'Local market and keyword research for your sport, your programs and the towns families drive from',
              'A keyword map that gives every page one clear job',
              'Site structure and URL plan, with redirects so nothing breaks',
            ] },
            { label: 'Your pages', items: [
              'Page copy written and tuned for search, page by page',
              'Page titles and descriptions written to earn the click',
              'Structured data (JSON-LD) so Google and AI tools can read your programs, fees, seasons and locations',
            ] },
            { label: 'Technical health', items: [
              'Technical SEO fixes: speed, mobile, indexing and broken links',
              'A backlink audit, with spammy links cleaned up',
            ] },
            { label: 'Local presence', items: [
              'Google Business Profile fully optimized',
              'Business listings made consistent across directories',
              'Your registration platform connected to your site and your tracking',
            ] },
            { label: 'Tracking', items: [
              'Google Analytics, Search Console and registration tracking set up',
              'Your reporting dashboard built',
            ] },
          ],
        },
        {
          title: 'Every Month: Grow and Compound',
          sections: [
            { items: [
              'A content calendar built around your season, tryouts and registration windows',
              "New content that answers what parents ask, so you're the club Google and AI assistants name",
              'Link building from local sites, leagues and sports directories',
              'Conversion improvements to your registration and tryout pages',
              'Google Business Profile posts and updates',
              'Automated review requests after tryouts, tournaments and season wrap-ups',
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
      for: 'For programs ready to fill rosters and camps faster.',
      includedLabel: included,
      points: [
        'Everything in the Attract Plan',
        'Paid ads, registration campaigns and email',
        'Weekly strategy calls',
      ],
      deliverables: [
        {
          title: 'Everything in the Attract Plan, plus:',
          sections: [
            { label: 'Paid campaigns', items: [
              'Google and Meta ad campaigns set up and managed',
              'Tryout, camp and registration campaigns, each with its own landing page',
              'Ongoing testing of ads, audiences and offers',
            ] },
            { label: 'Email', items: [
              'Welcome emails for new families',
              'Re-registration reminders for returning families before each season',
              'Campaigns for camps, clinics and tryout dates',
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
  body: "Multi-location academies and custom-designed sites are scoped as a custom build, and Fadeaway Labs builds custom registration flows, member portals and automations. See what we've built in our portfolio.",
  links: [
    { label: 'Explore Fadeaway Labs', href: routes.labs },
    { label: 'See Our Portfolio', href: routes.portfolio },
  ],
};

/** Founder-led note after pricing (the founder's own sports background is an open item in the copy file) */
export const why = {
  id: 'why',
  heading: 'Why Fadeaway',
  text: "Sports programs are personal for us. Our founder leads this work directly and spends real time with coaches, club directors, and people across the sports and combat sports world, so we understand how tryouts, registration seasons, and parent decisions actually work. Founder-led, 15+ years of experience, and every program gets the care we'd want if it were our own.",
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
      title: 'Month 6+',
      text: 'A full picture with real numbers on inquiries and registrations, and a clear plan for the next season.',
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
      text: 'We build or fix your site, connect it to your registration platform, set up your tracking, and host it for you if we built it.',
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

/** Also feeds the FAQPage schema */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'How much does a sports club website cost?',
      a: "A new program website is a one-time $945 setup, or a Full Audit is $945 if you're keeping your current site. After that, the Attract Plan is $495 a month and the Growth Plan is $995 a month, with everything included listed on this page. Plans run on a 6-month minimum.",
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
      a: "Yes. Every plan price is published on this page, and the full list of what's included is one click away. The Full Audit gives you a written three to six month action plan you can share. It's built so your board decides on specifics, not a sales pitch.",
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
  'Attract Plan': { price: 495, unit: 'MON' },
  'Growth Plan': { price: 995, unit: 'MON' },
};

export const cta = {
  id: 'cta',
  heading: 'Ready to Fill Your Roster?',
  text: 'Tell us about your program and we will help you plan what comes next.',
  cta: { label: 'Contact Us', href: routes.contact },
  link: { label: 'Or see what parents find for your program with a free audit', href: routes.audit },
};

// Fadeaway Labs page content, copied word for word from copy/labs.md.
// The founder's most personal page: energetic, builder-first, basketball roots. No prices (scoped per project).
// Anchors used in links and networking follow-ups: #what-we-build, #idea-to-mvp, #ai-native, #products, #see-it-working.
import { routes } from '../routes';
import type { HeroContent, HeroVariant } from '../../components/blocks/hero/types';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { IconGridItem } from '../../components/blocks/IconGrid.astro';
import type { FeatureListItem } from '../../components/blocks/FeatureList.astro';
import type { StepItem } from '../../components/blocks/Steps.astro';
import type { LinkCardItem } from '../../components/blocks/LinkCards.astro';
import type { FaqItem } from '../../components/blocks/Faq.astro';

export const seo = {
  title: 'Fadeaway Labs | MVP Development & AI Automation Services',
  description:
    'MVP development services, business process automation, custom web apps, and AI implementation for growing businesses. Scoped and priced up front.',
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Labs', href: routes.labs },
];

/** AEO answer capsule: the wide intro of What We Build, the first section after the Hero */
export const answerCapsule =
  'Fadeaway Labs offers MVP development services, business process automation, custom web apps, and AI implementation for small businesses and startups across Canada and the US. We take product ideas from architecture to launch, automate the manual work between the tools you already use, and set up AI tools like Claude and ChatGPT inside your team, with every project scoped and priced before we start.';

/** Brand line: the largest type on the page (not the H1), repeated in the final CTA as a bookend */
export const displayLine = "We always cookin'.";

export const heroVariant: HeroVariant = 'statement';

export const hero: HeroContent = {
  displayLine,
  eyebrow: 'Fadeaway Labs: MVP Development, Automation, Custom Apps & AI Setup',
  h1: 'MVP Development Services & AI Automation for Growing Businesses',
  sub: 'Labs is where we build for the love of building. MVPs taken from idea to launch, automations that take the manual work off your plate, custom apps and dashboards shaped around how you actually work, and AI tools like Claude and ChatGPT set up properly inside your business.',
  // Founder, Oct 4: both hero CTAs move down the page; "idea to live product" instead of "MVP" for people new to the term
  primaryCta: { label: 'What We Build', href: '#what-we-build' },
  secondaryCta: { label: 'See Idea to Live Product Journey', href: '#idea-to-mvp' },
  breadcrumb,
  visual: 'court',
};

export const build: {
  id: string;
  heading: string;
  items: IconGridItem[];
  cta: { heading: string; cta: { label: string; href: string }; secondaryCta: { label: string; href: string } };
} = {
  id: 'what-we-build',
  heading: 'What We Build',
  items: [
    {
      icon: 'bulb',
      title: 'From Idea to MVP',
      text: 'Got a product idea? We take it from architecture to launch: a working first version real users can try, with a roadmap for what comes next.',
    },
    {
      icon: 'workflow',
      title: 'Business Process Automation',
      text: "A lead comes in, gets qualified, lands in your CRM, and receives a follow-up, without anyone copying and pasting. We map your manual steps and automate every one that doesn't need a human, with AI handling the sorting, summaries, and follow-ups.",
    },
    {
      icon: 'chat',
      title: 'AI Chatbots & Lead Qualification',
      text: 'Custom AI assistants trained on your business that answer questions, qualify leads around the clock, and hand warm prospects to your team, so nobody goes cold overnight.',
    },
    {
      icon: 'browser',
      title: 'Custom Web Apps & Client Portals',
      text: 'Client portals, booking tools, and internal apps built around your actual workflow, for the jobs off-the-shelf software gets almost right but not quite.',
    },
    {
      icon: 'migrate',
      title: 'Integrations That Keep Your Tools',
      text: 'CRM, email, booking, payments, and point of sale, connected so data flows between them automatically. You keep the software you know; it just finally talks to itself.',
    },
    {
      icon: 'dashboard',
      title: 'Performance Dashboards',
      text: "Rankings, bookings, leads, and revenue in one live view, so you can see what's working at a glance instead of stitching reports together every month.",
    },
  ],
  // CTA touchpoint (founder, Oct 4: two buttons)
  cta: {
    heading: 'Got an idea, or a process that eats your week?',
    cta: { label: "Let's Discuss Your Idea", href: routes.labsStart },
    secondaryCta: { label: "Tell Us What You'd Automate", href: routes.labsStart },
  },
};

export const aiNative: {
  id: string;
  heading: string;
  intro: string;
  items: FeatureListItem[];
  proof: string;
  cta: { label: string; href: string };
} = {
  id: 'ai-native',
  heading: 'Go AI-Native',
  intro:
    "Most businesses already pay for ChatGPT or Claude. Few have set them up to actually know the business. You don't need to pick the right tool first: we pick it, set it up, and wire it into what you already use. That's what AI implementation should mean: AI built into how your team works, not another tab someone opens now and then.",
  items: [
    {
      icon: 'sparkles',
      title: 'Claude & ChatGPT, Set Up for Your Business',
      text: 'Team workspaces configured with your brand voice, your processes, and your documents, so every answer starts from how your business actually runs.',
    },
    {
      icon: 'migrate',
      title: 'Connected to Your Tools',
      text: 'Linked to your shared drive, CRM, and project tools, so AI can read the context it needs and hand work back where your team already looks.',
    },
    {
      icon: 'refresh',
      title: 'Repeatable Workflows, Not One-Off Prompts',
      text: 'Your recurring tasks, like proposals, reports, follow-ups, and audits, turned into saved workflows anyone on the team can run the same way every time.',
    },
    {
      icon: 'shield',
      title: 'Guardrails & Team Training',
      text: 'Clear rules on what data goes in and who can access what, plus hands-on training so your team uses AI with confidence, not guesswork.',
    },
  ],
  // Proof line: wording to confirm before launch (copy file open item)
  proof: 'We run Fadeaway this way. Our own planning, research, and content workflows run on the same kind of setup we build for you.',
  cta: { label: 'Get Your Team AI-Ready', href: routes.labsStart },
};

/**
 * Live products (portfolio.yaml labs entries without the `internal` tag: ours, co-founded and client builds), 3 across.
 * Renders nothing when none are visible. `link`: proposed by Claude Oct 4 (needs approval).
 */
export const products = {
  id: 'products',
  heading: 'From Labs to Live Users',
  link: { label: 'See the Full Portfolio', href: routes.portfolio },
  /** SoftwareApplication schema only for products we own or co-founded */
  schemaOwners: ['ours', 'cofounded'],
} as const;

/** Internal tools and demo sites (portfolio.yaml labs entries tagged `internal`): no heading, "Internal" badge, never linked */
export const seeItWorking = {
  id: 'see-it-working',
} as const;

/** Networking follow-up anchor. Also feeds the HowTo schema. */
export const ideaToMvp: { id: string; heading: string; items: StepItem[]; cta: { label: string; href: string } } = {
  id: 'idea-to-mvp',
  heading: 'From Idea to MVP: How a Labs Project Works',
  items: [
    {
      title: 'Discovery and Architecture',
      text: 'We start by mapping how your business actually runs today, the tools, the handoffs, and where time disappears, then design the architecture before anything gets built.',
    },
    {
      title: 'Scope and Roadmap',
      text: 'You get a written scope, the features your first version really needs, a fixed price for that scope, and a roadmap for what comes after.',
    },
    {
      title: 'Build and Test',
      text: 'We build in focused stages and test with real data along the way, so you see working pieces early instead of waiting for one big reveal.',
    },
    {
      title: 'Launch and Keep Improving',
      text: 'We launch, watch how it performs with real users, and refine from there. Your automations and apps keep getting better as your business grows.',
    },
  ],
  cta: { label: "Let's Build Your MVP", href: routes.labsStart },
};

export const worksWith: { id: string; heading: string; intro: string; items: LinkCardItem[] } = {
  id: 'works-with',
  heading: 'Works With Everything Else We Do',
  intro: "Labs isn't a separate world. It plugs straight into the rest of Fadeaway.",
  items: [
    {
      title: 'Your Website',
      text: 'Lead routing, booking automations, and client portals built right into the site we design for you.',
      links: [{ label: 'Build Services', href: routes.build }],
    },
    {
      title: 'Your Growth',
      text: 'The dashboards and tracking behind our growth work, showing which searches turn into real customers.',
      links: [{ label: 'Growth Services', href: routes.growth }],
    },
    {
      title: 'Your Industry',
      text: 'Industry-specific automations for e-commerce stores, wellness practices, boutique studios, and sports programs.',
      links: [
        { label: 'E-commerce', href: routes.ecommerce },
        { label: 'Wellness & Counselling', href: routes.wellnessCounselling },
        { label: 'Boutique Fitness', href: routes.boutiqueFitness },
        { label: 'Sports Academies', href: routes.sports },
      ],
    },
  ],
};

/** Also feeds the FAQPage schema */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'What is an MVP in software development?',
      a: 'An MVP, or minimum viable product, is the simplest working version of a product that real users can try. It includes only the core features needed to test whether the idea solves a real problem, so you learn from actual users before paying for everything else. We build MVPs from architecture to launch.',
    },
    {
      q: 'Do I need to replace my current software?',
      a: 'No. We build around the CRM, booking system, email platform, and payment tools you already run. Automations and custom apps plug into what you have, so your team keeps the systems it knows and you skip the cost and disruption of switching everything at once.',
    },
    {
      q: 'How much does an MVP cost?',
      a: 'It depends on what your first version needs to do. After a discovery call, you get a written scope, the exact features included, and a fixed price for that scope, with no hourly billing. A simple internal tool and a full SaaS product are very different projects, so we quote each one on what it actually takes.',
    },
    {
      q: 'What is business process automation?',
      a: 'Business process automation uses software to handle the repetitive steps in how your business runs, like moving leads into your CRM, sending follow-ups, creating invoices, or updating reports. With AI added, it can also sort, summarize, and qualify information. Your team keeps the decisions that need a person, and the busywork runs on its own.',
    },
    {
      q: 'Can you set up Claude or ChatGPT for my team?',
      a: 'Yes. We configure Claude or ChatGPT workspaces around your business, connect them to the tools your team already uses, and turn recurring tasks into reusable workflows anyone can run. Then we train your team and set clear rules on what data goes in, so AI becomes part of daily work, even on a small team.',
    },
    {
      q: 'Do you work with businesses outside Canada?',
      a: 'Yes. Fadeaway Labs works with small businesses and startups across Canada and the United States. Everything we build runs in the cloud, so discovery calls, builds, and launches all happen remotely, wherever your team is based, with the same scope, pricing, and process for every client.',
    },
  ],
};

/** From the Lab (tag labs): renders nothing until /articles/ has real posts */
export const blog = {
  id: 'blog',
  heading: 'From the Lab',
  intro: "Notes from the workshop: what we're building, what we're learning, and what's worth automating.",
  tag: 'labs',
  cta: { label: 'View All Resources', href: routes.articles },
} as const;

/** Service JSON-LD entries (copy frontmatter `schema`). No prices. */
export const serviceNames = [
  'MVP Development',
  'Business Process Automation',
  'AI Implementation',
  'Custom Web App Development',
  'AI Chatbots & Lead Qualification',
  'Integrations',
  'Performance Dashboards',
];

export const cta = {
  id: 'cta',
  heading: "Got a Process You'd Love to Never Do Again?",
  text: "Tell us about it. We'll map what can be automated, what's worth building, and what it would take.",
  signoff: displayLine,
  cta: { label: "Let's Build It", href: routes.labsStart },
};

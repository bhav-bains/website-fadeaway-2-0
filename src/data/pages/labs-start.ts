// Labs intake (/labs/start/) + success page (/labs/start/success/), copied word for word from copy/labs-start.md
// (Claude draft, Oct 4, awaiting approval). Every Labs page CTA points here instead of /contact/.
import { routes } from '../routes';
import { siteConfig } from '../site';
import type { BreadcrumbItem } from '../../components/blocks/Breadcrumb.astro';
import type { FormContent } from '../../components/blocks/FormHero.astro';
import type { StepItem } from '../../components/blocks/Steps.astro';
import type { FaqItem } from '../../components/blocks/Faq.astro';
import type { LinkIndexItem } from '../../components/blocks/LinkIndex.astro';

export const seo = {
  title: 'Start a Project | Fadeaway Labs MVP & AI Automation',
  description:
    'Start a Fadeaway Labs project: share your product idea, the process you want automated, or the AI setup your team needs. Scoped and priced before we start.',
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'Labs', href: routes.labs },
  { label: 'Start a Project', href: routes.labsStart },
];

/** AEO answer capsule: wide intro of the first section after the Hero */
export const answerCapsule =
  'Fadeaway Labs takes product ideas from idea to a live product, automates the manual work between your tools, and sets up AI tools like Claude and ChatGPT for businesses across Canada and the US. Share a few details about your project here. We reply within one business day to book a discovery call, then send a written scope with a fixed price before any work starts.';

/** No CTA buttons: the form sits beside the Hero text on desktop, below it on phones */
export const hero = {
  eyebrow: 'Fadeaway Labs: Start a Project',
  h1: 'Start Your MVP, Automation or AI Project',
  sub: "Tell us what you're building, or what you'd love to stop doing by hand. A few details now mean our first call starts with real ideas, not a blank page.",
};

/** Netlify Forms: name `labs-intake`, honeypot `bot-field`, posts to the success page */
export const form: FormContent = {
  name: 'labs-intake',
  action: routes.labsStartSuccess,
  fields: [
    { name: 'name', label: 'Your name', type: 'text', required: true, autocomplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
    { name: 'company', label: 'Company or project name (if you have one)', type: 'text', autocomplete: 'organization' },
    { name: 'website', label: 'Current website (if you have one)', type: 'url', autocomplete: 'url' },
    {
      name: 'project',
      label: 'What do you want to build?',
      hint: 'Pick all that apply.',
      type: 'checkboxes',
      required: true,
      requiredMessage: 'Please pick at least one option.',
      options: [
        'A new product or app, from idea to launch',
        'Automating a business process',
        'An AI chatbot or lead qualification',
        'A custom web app or client portal',
        'Connecting the tools I already use',
        'A performance dashboard',
        'Setting up Claude or ChatGPT for my team',
        'Not sure yet',
      ],
    },
    {
      name: 'stage',
      label: 'Where are you today?',
      type: 'radios',
      required: true,
      options: ['Just an idea', 'Planned out and ready to build', 'Something exists and needs work', 'Doing it by hand today'],
    },
    {
      name: 'message',
      label: 'Tell us about it',
      type: 'textarea',
      placeholder: 'What it should do, who will use it, and the tools you already run on...',
    },
  ],
  submit: 'Send My Project Details',
  note: "We reply within one business day. We'll only use your details to talk about your project.",
  // Booking link instead of a form (founder, Oct 4): one shared URL in site.ts. Wording: Claude draft, needs approval.
  footer: {
    text: 'Prefer to talk it through?',
    link: { label: 'Book a Call', href: siteConfig.bookingUrl, external: true, newTabLabel: 'opens in a new tab' },
  },
};

/** Also feeds the HowTo schema */
export const howItWorks: { id: string; heading: string; items: StepItem[] } = {
  id: 'how-it-works',
  heading: 'What Happens Next',
  items: [
    {
      title: 'Tell us about your project',
      text: 'A few details about what you want to build or automate. It takes about two minutes.',
    },
    {
      title: 'Discovery call',
      text: 'We talk through how your business runs today, the tools, the handoffs, and where time disappears.',
    },
    {
      title: 'Written scope and fixed price',
      text: 'You get the features your first version really needs, a fixed price for that scope, and a roadmap, before any work starts.',
    },
  ],
};

/** Also feeds the FAQPage schema */
export const faq: { id: string; heading: string; items: FaqItem[] } = {
  id: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      q: 'What happens after I send my project details?',
      a: 'We read every request ourselves and reply within one business day to book a discovery call. On the call, we map how things run today and what your first version really needs. Then you get a written scope, a fixed price for that scope, and a roadmap, before any work starts.',
    },
    {
      q: 'Do I need a technical plan before reaching out?',
      a: "No. Many Labs projects start as a rough idea or a process that eats someone's week. Tell us the problem in plain words, and we work out the architecture, the right tools, and what your first version needs. If you already have specs, designs, or examples, share them too.",
    },
    {
      q: 'What kinds of projects does Fadeaway Labs take on?',
      a: "Product ideas taken to a working first version, business process automation, AI chatbots and lead qualification, custom web apps and client portals, integrations between your tools, performance dashboards, and Claude or ChatGPT setup for teams. If it's software that makes running a business easier, tell us about it.",
    },
  ],
};

export const cta = {
  id: 'cta',
  heading: "Want to see what we've built first?",
  text: 'Our own products, live with real users, and the tools we build for our own work.',
  cta: { label: 'Explore Fadeaway Labs', href: routes.labs },
};

// ---------- Success page (/labs/start/success/, noindex) ----------

export const success: {
  seo: { title: string; description: string };
  h1: string;
  text: string;
  linksHeading: string;
  links: LinkIndexItem[];
  button: { label: string; href: string };
} = {
  seo: { title: 'Project Details Received | Fadeaway Labs', description: 'Your project details are in.' },
  h1: 'Your Project Details Are In',
  text: "Thanks for telling us what you're building. We'll read through it and reply within one business day to set up a discovery call.",
  linksHeading: "While you wait, see what we've built.",
  links: [
    { label: 'Fadeaway Labs', href: routes.labs },
    { label: 'Portfolio', href: routes.portfolio },
    { label: 'Case Studies', href: routes.caseStudies },
  ],
  button: { label: 'Back to Home', href: routes.home },
};

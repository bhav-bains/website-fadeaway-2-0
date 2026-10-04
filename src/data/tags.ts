// Content tags shared by case studies, testimonials and posts (see CLAUDE.md section 8).
import { routes } from './routes';
// Blocks like ProofGrid filter collections by these values.
export const CONTENT_TAGS = [
  'featured',
  'ecommerce',
  'wellness-counselling',
  'boutique-fitness',
  'sports-academies',
  'labs',
  'labs-product',
  'build',
  // Build sub-tags (founder, Oct 4): what kind of website work; shown instead of the generic "Build" via displayTags
  'custom-website',
  'website-redesign',
  'website-migration',
  'growth',
  // Internal tools and demo sites (founder, Oct 4): shown with an "Internal" badge and never linked (workHref)
  'internal',
] as const;

export type ContentTag = (typeof CONTENT_TAGS)[number];

/** How a tag shows on a page (chip label + the page it links to). `featured` only controls homepage placement. */
export const TAG_DISPLAY: Partial<Record<ContentTag, { label: string; href: string }>> = {
  build: { label: 'Build', href: routes.build },
  'custom-website': { label: 'Custom Website', href: routes.build },
  'website-redesign': { label: 'Website Redesign', href: routes.build },
  'website-migration': { label: 'Website Migration', href: routes.build },
  growth: { label: 'Growth', href: routes.growth },
  ecommerce: { label: 'E-commerce', href: routes.ecommerce },
  'wellness-counselling': { label: 'Wellness & Counselling', href: routes.wellnessCounselling },
  'boutique-fitness': { label: 'Boutique Fitness', href: routes.boutiqueFitness },
  'sports-academies': { label: 'Sports Academies', href: routes.sports },
  labs: { label: 'Fadeaway Labs', href: routes.labs },
  'labs-product': { label: 'Fadeaway Labs', href: routes.labs },
};

/**
 * Visible tags for an entry, in display order, without duplicates. `displayTags` (when the entry sets it) picks which
 * tags show; all tags still count for filtering (e.g. NWP keeps `build` but shows Custom Website + Growth).
 */
export const visibleTags = (tags: readonly ContentTag[], displayTags?: readonly ContentTag[]) => {
  const seen = new Set<string>();
  return (displayTags?.length ? displayTags : tags)
    .map((t) => TAG_DISPLAY[t])
    .filter((t): t is { label: string; href: string } => !!t && !seen.has(t.label) && !!seen.add(t.label));
};

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
  'growth',
] as const;

export type ContentTag = (typeof CONTENT_TAGS)[number];

/** How a tag shows on a page (chip label + the page it links to). `featured` only controls homepage placement. */
export const TAG_DISPLAY: Partial<Record<ContentTag, { label: string; href: string }>> = {
  build: { label: 'Build', href: routes.build },
  growth: { label: 'Growth', href: routes.growth },
  ecommerce: { label: 'E-commerce', href: routes.ecommerce },
  'wellness-counselling': { label: 'Wellness & Counselling', href: routes.wellnessCounselling },
  'boutique-fitness': { label: 'Boutique Fitness', href: routes.boutiqueFitness },
  'sports-academies': { label: 'Sports Academies', href: routes.sports },
  labs: { label: 'Fadeaway Labs', href: routes.labs },
  'labs-product': { label: 'Fadeaway Labs', href: routes.labs },
};

/** Visible tags for an entry, in display order, without duplicates */
export const visibleTags = (tags: readonly ContentTag[]) => {
  const seen = new Set<string>();
  return tags
    .map((t) => TAG_DISPLAY[t])
    .filter((t): t is { label: string; href: string } => !!t && !seen.has(t.label) && !!seen.add(t.label));
};

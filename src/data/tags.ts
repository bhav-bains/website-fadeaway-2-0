// Content tags shared by case studies, testimonials and posts (see CLAUDE.md section 8).
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

// Illustration registry: page data names an illustration, blocks render it.
import IllusEcommerce from './IllusEcommerce.astro';
import IllusWellness from './IllusWellness.astro';
import IllusFitness from './IllusFitness.astro';
import IllusSports from './IllusSports.astro';
import IllusAiShopping from './IllusAiShopping.astro';

export const illustrations = {
  ecommerce: IllusEcommerce,
  wellness: IllusWellness,
  fitness: IllusFitness,
  sports: IllusSports,
  'ai-shopping': IllusAiShopping,
};

export type IllustrationName = keyof typeof illustrations;

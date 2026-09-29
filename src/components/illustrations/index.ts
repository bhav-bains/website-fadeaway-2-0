// Illustration registry: page data names an illustration, blocks render it.
import IllusEcommerce from './IllusEcommerce.astro';
import IllusWellness from './IllusWellness.astro';
import IllusFitness from './IllusFitness.astro';
import IllusSports from './IllusSports.astro';

export const illustrations = {
  ecommerce: IllusEcommerce,
  wellness: IllusWellness,
  fitness: IllusFitness,
  sports: IllusSports,
};

export type IllustrationName = keyof typeof illustrations;

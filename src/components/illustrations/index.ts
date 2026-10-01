// Illustration registry: page data names an illustration, blocks render it.
import IllusEcommerce from './IllusEcommerce.astro';
import IllusWellness from './IllusWellness.astro';
import IllusFitness from './IllusFitness.astro';
import IllusSports from './IllusSports.astro';
import IllusAiShopping from './IllusAiShopping.astro';
import IllusCycle from './IllusCycle.astro';
import IllusAsk from './IllusAsk.astro';

export const illustrations = {
  ecommerce: IllusEcommerce,
  wellness: IllusWellness,
  fitness: IllusFitness,
  sports: IllusSports,
  'ai-shopping': IllusAiShopping,
  cycle: IllusCycle,
  ask: IllusAsk,
};

export type IllustrationName = keyof typeof illustrations;

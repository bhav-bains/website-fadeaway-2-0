// Shared contract for every Hero variant: same content in, different layout out.
export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroContent {
  /** Slogan shown above the H1, largest type in the Hero (CLAUDE.md copy rule) */
  displayLine?: string;
  eyebrow?: string;
  /** Real service-term heading; the page's only H1 */
  h1: string;
  sub?: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  /** AEO summary paragraph; must stay plain text in the raw HTML */
  answerCapsule?: string;
}

export const HERO_VARIANTS = ['centered', 'split', 'editorial', 'visual'] as const;
export type HeroVariant = (typeof HERO_VARIANTS)[number];

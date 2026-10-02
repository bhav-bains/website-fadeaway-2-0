// Shared contract for every Hero variant: same content in, different layout out.
import type { IllustrationName } from '../../illustrations';
import type { BreadcrumbItem } from '../Breadcrumb.astro';
import type { LogoItem } from '../LogoBand.astro';

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroContent {
  /** Slogan shown above the H1, largest type in the Hero (CLAUDE.md copy rule) */
  displayLine?: string;
  eyebrow?: string;
  /** statement: small credibility line above the eyebrow (e.g. founder-led, years of experience) */
  proofLine?: string;
  /** Real service-term heading; the page's only H1 */
  h1: string;
  sub?: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  /** AEO summary paragraph; must stay plain text in the raw HTML */
  answerCapsule?: string;
  /** Interior pages: crumbs shown above the eyebrow (visual, showcase, statement, blueprint). Last item is the current page. */
  breadcrumb?: BreadcrumbItem[];
  /** visual / showcase / statement: illustration by name; defaults to the homepage search/AI illustration */
  visual?: IllustrationName;
  /** statement: quiet band of platform/tool marks along the bottom of the Hero */
  logos?: { label: string; groups: LogoItem[][] };
}

export const HERO_VARIANTS = ['centered', 'split', 'editorial', 'visual', 'showcase', 'statement', 'blueprint'] as const;
export type HeroVariant = (typeof HERO_VARIANTS)[number];

// Every internal URL in one place (CLAUDE.md section 6). Link to routes.x, never a hardcoded path.
// Trailing slash on every page URL (astro.config `trailingSlash: 'always'`); add #anchors or ?queries after it.
export const routes = {
  home: '/',
  build: '/services/build/',
  growth: '/services/growth/',
  ecommerce: '/solutions/ecommerce/',
  wellnessCounselling: '/solutions/wellness-counselling/',
  boutiqueFitness: '/solutions/boutique-fitness/',
  sports: '/solutions/sports/',
  labs: '/labs/',
  // Resources dropdown (no /resources/ landing page, founder Oct 3): three listing pages
  caseStudies: '/case-studies/',
  portfolio: '/portfolio/',
  articles: '/articles/',
  about: '/about/',
  contact: '/contact/',
  contactSuccess: '/contact-success/',
  // Free website demo funnel (fitness, wellness, sports; e-commerce has no demo)
  demoRequest: '/demo-request/',
  demoSuccess: '/demo-success/',
  // Free (Instant) Audit: every "Get Your Free Audit" CTA lands here
  audit: '/audit/',
  auditSuccess: '/audit-success/',
  privacy: '/privacy/',
  terms: '/terms/',
} as const;

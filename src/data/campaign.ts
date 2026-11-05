// Holiday-Ready Store Sprint campaign (founder, Nov 4 2026; copy/holiday-ready-store.md).
// One place for the campaign's end date and the popup text. Page content is in
// src/data/pages/holiday-ready-store.ts.
import { routes } from './routes';

export const campaign = {
  /** Last day the popup shows. After it the popup never appears (checked in the browser, and at build time). */
  endDate: '2026-11-30',
  /** Vancouver in November is PST (UTC-8): the popup stops at the end of Nov 30 on the west coast */
  endUtcOffset: '-08:00',
} as const;

/** End of the last campaign day, as a timestamp */
export const campaignEndsAt = Date.parse(`${campaign.endDate}T23:59:59.999${campaign.endUtcOffset}`);

/** True while the campaign runs (evaluated when the site is built, and again in the browser) */
export const campaignActive = () => Date.now() <= campaignEndsAt;

// No utm_* tags on our own links (founder, Nov 5): UTM tags belong on links from OTHER sites; on internal links they can
// overwrite the visitor's real traffic source in GA4. Clicks are measured with GA4 events instead (CampaignEvents, CampaignPopup).

/** The popup: shown on Home, E-commerce, Build and Growth; hidden on /audit/ and on the Sprint page itself */
export const popup = {
  heading: 'Is your store ready for Black Friday?',
  text: 'Get a free Instant Audit and see what to fix first.',
  audit: { label: 'Get my free audit', href: routes.audit },
  sprint: { label: 'See the Holiday-Ready Store Sprint', href: routes.holidayReadyStore },
  /** Accessible name of the close button (not visible text) */
  closeLabel: 'Close',
  /** Wait this long on a page, or until the visitor has scrolled this far, whichever comes first (founder, Nov 4) */
  delayMs: 20000,
  scrollRatio: 0.5,
  /** After the visitor closes it: stay away this long. After a click on either button: never again. */
  snoozeDays: 7,
} as const;

export type PopupPage = 'home' | 'ecommerce' | 'build' | 'growth';

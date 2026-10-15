// Brand marks for platform/tool bands, from Simple Icons (CC0 icon data; the marks remain their owners' trademarks).
// Used at build time only: the SVG path is inlined, no JS ships. Brands that asked Simple Icons to remove their
// logo (Klaviyo, OpenAI/ChatGPT, Google Merchant Center, Shopify Hydrogen) have no key here and render as name only.
import {
  siShopify,
  siWoocommerce,
  siWordpress,
  siNextdotjs,
  siAstro,
  siBigcommerce,
  siStripe,
  siGooglesearchconsole,
  siGoogleanalytics,
  siGoogleads,
  siMeta,
  siPerplexity,
  siGooglegemini,
} from 'simple-icons';

export const brandIcons = {
  shopify: siShopify,
  woocommerce: siWoocommerce,
  wordpress: siWordpress,
  nextjs: siNextdotjs,
  astro: siAstro,
  bigcommerce: siBigcommerce,
  stripe: siStripe,
  'google-search-console': siGooglesearchconsole,
  'google-analytics': siGoogleanalytics,
  'google-ads': siGoogleads,
  meta: siMeta,
  perplexity: siPerplexity,
  gemini: siGooglegemini,
};

export type BrandIconKey = keyof typeof brandIcons;

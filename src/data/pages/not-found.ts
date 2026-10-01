// 404 page content, copied word for word from copy/404.md (approved Sept 30).
// Links: only pages that are live. Add Build, Growth, Labs and the other solutions pages as they ship.
import { routes } from '../routes';

export const seo = {
  title: 'Page Not Found | Fadeaway Creatives',
  description: "The page you were looking for isn't here. Head back home, see our e-commerce work, or get in touch.",
};

export const notFound = {
  eyebrow: 'Error 404',
  h1: 'This Page Took a Wrong Turn',
  text: "The link may be old, or the page may have moved. Here's where most people are headed.",
  primaryCta: { label: 'Back to Home', href: routes.home },
  secondaryCta: { label: 'Get in Touch', href: routes.contact },
  linksHeading: 'Try one of these',
  links: [
    { label: 'Home', text: 'Web design, SEO, and AEO for growing businesses.', href: routes.home },
    { label: 'E-commerce', text: 'Store builds and growth for Shopify, WooCommerce, and headless.', href: routes.ecommerce },
    { label: 'Contact', text: "Tell us what you were looking for and we'll point you to it.", href: routes.contact },
  ],
};

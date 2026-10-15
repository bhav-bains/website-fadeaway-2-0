// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { pageDates } from './src/lib/page-dates.ts';

// https://astro.build/config
export default defineConfig({
  site: "https://fadeawaycreatives.com",
  // One URL form sitewide: every page is /path/ (folder + index.html). Canonicals, internal links (routes.ts),
  // JSON-LD and the sitemap all use the trailing slash; Netlify 301s /path to /path/.
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    mdx(),
    // Regenerated every build, so new pages and case studies appear automatically. Noindex pages (thank-you pages)
    // stay out. <lastmod> = the page's latest git date (src/lib/page-dates.ts, same as its JSON-LD dateModified);
    // no known source → no lastmod, never the build time.
    sitemap({
      filter: (page) => !['/contact-success', '/demo-success', '/audit-success', '/labs/start/success'].some((path) => page.includes(path)),
      serialize(item) {
        const { modified } = pageDates(new URL(item.url).pathname);
        return modified ? { ...item, lastmod: modified } : item;
      },
    }),
  ],
  // Self-hosted at build time; exposed as --ff-* CSS variables (see src/styles/theme.css)
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Outfit',
      cssVariable: '--ff-outfit',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'DM Sans',
      cssVariable: '--ff-dm-sans',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
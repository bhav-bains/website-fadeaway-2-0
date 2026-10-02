// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://fadeawaycreatives.com",
  // One URL form sitewide: every page is /path/ (folder + index.html). Canonicals, internal links (routes.ts),
  // JSON-LD and the sitemap all use the trailing slash; Netlify 301s /path to /path/.
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    mdx(),
    // Keep noindex pages (thank-you pages) out of the sitemap
    sitemap({ filter: (page) => !['/contact-success', '/demo-success', '/audit-success'].some((path) => page.includes(path)) }),
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
// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://fadeawaycreatives.com",
  integrations: [tailwind(), react(), mdx()],
  vite: {
    ssr: {
      external: ['@supabase/supabase-js'],
    },
  },
});

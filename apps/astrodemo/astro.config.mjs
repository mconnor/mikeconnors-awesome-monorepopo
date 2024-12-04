import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  integrations: [
    // myIntegration,

    mdx(),
  ],

  adapter: vercel(),
});

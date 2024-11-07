// @ts-check
import lit from '@astrojs/lit';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/static';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
 
  site: 'https://example.com',

  integrations: [
    // myIntegration,
    lit(),
    mdx({
      drafts: true,
    }),

  ],

 

  adapter: vercel(),
});

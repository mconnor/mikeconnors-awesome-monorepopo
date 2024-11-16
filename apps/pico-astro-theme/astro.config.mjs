import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-pico.netlify.app',
  integrations: [react(), icon(), mdx(), sitemap()],

  image: {
    domains: ['astro.build'],
    remotePatterns: [
      {
        protocol: 'https',
      },
    ],
  },

  output: 'static',
  adapter: vercel(),
});

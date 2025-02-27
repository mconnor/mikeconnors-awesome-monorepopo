// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// Import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  // Adapter: vercel({
  //   ImageService: true,
  //   DevImageService: 'sharp',
  // }),
});

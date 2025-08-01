// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  outDir: 'dist',
  site: 'https://example.com',
  image: {
    domains: ['astro.build', 'picsum.photos', 'https://doodleipsum.com'],
    responsiveStyles: false,
    // Used for all `<Image />` and `<Picture />` components unless overridden
  },

  integrations: [sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
  }),
});

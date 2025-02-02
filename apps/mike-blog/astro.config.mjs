import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: 'dist',
  compressHTML: true,
  // trailingSlash: 'never',
  cacheDir: './cache-directory',

  // env: {
  //   schema: {
  //     SENTRY_DSN: envField.string({ context: "server", access: "private"}),
  //     SENTRY_AUTH_TOKEN: envField.string({ context: "server", access: "private"}),
  //   }
  // }
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  // experimental: {
  //   clientPrerender: true,
  // },

  site: 'https://staging.mikeconnor.tech/',

  image: {
    domains: ['astro.build', 'picsum.photos', 'https://doodleipsum.com'],
    // Used for all `<Image />` and `<Picture />` components unless overridden
    experimentalLayout: 'responsive',
  },
  experimental: {
    responsiveImages: true,
  },

  markdown: {
    drafts: true,
  },

  scopedStyleStrategy: 'attribute',

  integrations: [icon(), mdx()],
  output: 'server',
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
  }),
});

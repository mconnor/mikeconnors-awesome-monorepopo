import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

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

  site: 'https://staging.mikeconnor.tech/',

  image: {
    domains: ['astro.build', 'picsum.photos', 'https://doodleipsum.com'],
  },

  markdown: {
    drafts: true,
  },

  scopedStyleStrategy: 'attribute',

  integrations: [
    preact(),
    icon(),
    mdx({
      drafts: true,
    }),
  ],
  output: 'server',
  adapter: vercel(),
});

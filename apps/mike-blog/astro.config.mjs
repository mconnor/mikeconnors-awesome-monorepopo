// import sentry from '@sentry/astro';

import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/static';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
// import { loadEnv } from 'vite';

// const { SENTRY_AUTH_TOKEN } = loadEnv(
//   process.env.SENTRY_AUTH_TOKEN,
//   process.cwd(),
//   '',
// );

export default defineConfig({
  outDir: 'dist',
  compressHTML: true,
  trailingSlash: 'ignore',
  cacheDir: './cache-directory',
  redirects: {
    '/index': '/about',
  },

  site: 'https://staging.mikeconnor.tech/',

  image: {
    domains: ['astro.build', 'picsum.photos', 'https://doodleipsum.com'],
  },

  markdown: {
    drafts: true,
  },

  scopedStyleStrategy: 'attribute',

  integrations: [
    icon(),
    mdx({
      drafts: true,
    }),
    // sentry({
    //   dsn: 'https://b620d87b24b1fda6b0064305d7ca46e2@o4506328206802944.ingest.us.sentry.io/4506770210291712',
    //   release: '1.0.0',
    //   environment: import.meta.env.MODE,
    //   sourceMapsUploadOptions: {
    //     org: 'mike-connor',
    //     project: 'astro-openprops-blog-w-tags',
    //     authToken: import.meta.env.SENTRY_AUTH_TOKEN,
    //   },
    // }),

    // icon({
    //   include: {
    //     mdi: ['*'], // (Default) Loads entire Material Design Icon set
    //     // mdi: ['account'], // Loads only Material Design Icon's "account" SVG
    //   },
    // }),
  ],

  adapter: vercel(),
});

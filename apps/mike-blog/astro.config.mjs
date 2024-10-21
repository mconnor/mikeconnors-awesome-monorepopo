import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// import sentry from '@sentry/astro';
import lit from '@astrojs/lit';

import vercel from '@astrojs/vercel/static';

// import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  trailingSlash: 'ignore',
  cacheDir: './cache-directory',

  redirects: {
    '/index': '/about',
  },

  // your configuration options here...
  // https://docs.astro.build/en/reference/configuration-reference/
  output: 'static',

  site: 'https://staging.mikeconnor.tech/',

  image: {
    domains: ['astro.build', 'picsum.photos', 'https://doodleipsum.com'],
  },

  markdown: {
    drafts: true,
  },

  scopedStyleStrategy: 'attribute',

  integrations: [
    lit(),
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

  // cacheDir: './my-custom-cache-directory',

  experimental: {
    contentCollectionCache: true,
  },

  adapter: vercel(),
});

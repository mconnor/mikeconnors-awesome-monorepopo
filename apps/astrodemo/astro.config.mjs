import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// import sentry from '@sentry/astro';
import lit from '@astrojs/lit';
// import vercel from '@astrojs/vercel/serverless';
// https://astro.build/config
export default defineConfig({
  outDir: 'dist',
  output: 'static',
  integrations: [
    // myIntegration,
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

    // icon(),
  ],
  vite: {
    ssr: {
      noExternal: ['date-fns', 'open-props'],
    },
  },
});

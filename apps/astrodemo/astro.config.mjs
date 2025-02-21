import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

import { defineConfig } from 'astro/config';

// import { loadEnv } from 'vite';
//const { SECRET_PASSWORD } = loadEnv(process.env.NODE_ENV, process.cwd(), '');
// import { SENTRY_DSN, SENTRY_AUTH_TOKEN } from 'astro:env/server';
// const env = loadEnv(env.VITE_NODE_ENV || 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://example.com',

  // env: {
  //   schema: {
  //     SENTRY_DSN: envField.string({ access: 'secret', context: 'server' }),
  //     SENTRY_AUTH_TOKEN: envField.string({
  //       access: 'secret',
  //       context: 'server',
  //     }),
  //   },
  // },

  integrations: [mdx()],
});

/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
// import { sentryVitePlugin } from '@sentry/vite-plugin';

import stylelint from 'vite-plugin-stylelint';

export default getViteConfig({
  // ssr: {
  //   noExternal: ['date-fns', 'open-props'],
  // },
  test: {
    // Vitest configuration options
  },
  build: {
    emptyOutDir: true,
    minify: 'esbuild',
    sourcemap: true, // Source map generation must be turned on
  },
  plugins: [
    stylelint({ dev: true }),
    // Put the Sentry vite plugin after all other plugins
    // sentryVitePlugin({
    //   authToken: import.meta.env.SENTRY_AUTH_TOKEN,
    //   org: 'mike-connor',
    //   project: 'astro-openprops-blog-w-tags',
    // }),
  ],
});

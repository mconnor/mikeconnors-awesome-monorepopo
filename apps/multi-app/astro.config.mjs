import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import solid from '@astrojs/solid-js';
import lit from '@astrojs/lit';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  // Enable many frameworks to support all different kinds of components.
  integrations: [
    preact({ include: ['**/preact/*'], compat: true, devtools: true }),
    solid({ include: ['**/solid/*'] }),
    react({ include: ['**/react/*'] }),
    svelte(),
    vue(),
    lit(),
  ],

  vite: {
    ssr: {
      noExternal: ['date-fns', 'open-props'],
    },
    // lit: {
    //   // Enable the `lit-analyzer` plugin to provide diagnostics in the editor.
    //   litAnalyzer: true,
    //   dev,
    // },
  },

  output: 'static',
  adapter: vercel(),
});

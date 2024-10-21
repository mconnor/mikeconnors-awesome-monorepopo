import lit from '@astrojs/lit';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
// import solid from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel/static';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Enable many frameworks to support all different kinds of components.
  integrations: [
    preact({ include: ['@repo/preact/*'], compat: true, devtools: true }),
    // solid({
    //   include: ['@repo/solid/**', '**/node_modules/@suid/material/**'],
    // }),
    react({ include: ['@repo/react/*'] }),
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

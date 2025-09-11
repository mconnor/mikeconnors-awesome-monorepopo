import preact from '@astrojs/preact';
import react from '@astrojs/react';
// import solid from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';

import vercel from '@astrojs/vercel';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  outDir: 'dist',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: [
        'open-props',
        'https://early.webawesome.com/webawesome@3.0.0-beta.5/',
      ],
    },
  },

  // Enable many frameworks to support all different kinds of components.
  integrations: [
    preact({
      compat: true,
      include: ['**/preact/*'],
    }),
    // solid({
    //   include: ['@repo/solid/**', '**/node_modules/@suid/material/**'],
    // }),
    react({
      include: ['**/react/*'],
    }),
    svelte(),
    vue(),
  ],
  adapter: vercel(),
});

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
        'https://early.webawesome.com/webawesome@3.0.0-alpha.12/',
      ],
    },
  },

  // Enable many frameworks to support all different kinds of components.
  integrations: [
    preact({
      include: ['node_modules/@repo/preact/dist/*'],
      compat: true,
      devtools: true,
    }),
    // solid({
    //   include: ['@repo/solid/**', '**/node_modules/@suid/material/**'],
    // }),
    react({ include: ['node_modules/@repo/react/dist/*'] }),
    svelte(),
    vue(),
  ],

  output: 'server',
  adapter: vercel(),
});

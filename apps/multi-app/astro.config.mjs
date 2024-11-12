
import preact from '@astrojs/preact';
import react from '@astrojs/react';
// import solid from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  outDir: 'dist',
  // Enable many frameworks to support all different kinds of components.
  integrations: [
    preact({ include: ['@repo/preact/*'], compat: true, devtools: true }),
    // solid({
    //   include: ['@repo/solid/**', '**/node_modules/@suid/material/**'],
    // }),
    react({ include: ['@repo/react/*'] }),
    svelte(),
    vue()
  ],

  

  output: 'server',
  adapter: vercel(),
});

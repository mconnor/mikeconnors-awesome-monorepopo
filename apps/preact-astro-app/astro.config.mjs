import preact from '@astrojs/preact';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Enable Preact to support Preact JSX components.
  integrations: [
    preact({ include: ['@repo/preact/*'], compat: true, devtools: true }),
  ],
});

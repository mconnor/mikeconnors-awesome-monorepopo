import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

import { defineConfig } from 'astro/config';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://example.com',
  vite: {},

  integrations: [mdx()],
});

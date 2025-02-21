// @ts-check
import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
  env: {
    schema: {
      ENABLE_EXPERIMENTAL_COREPACK: envField.string({
        context: 'server',
        access: 'public',
      }),
    },
  },
});

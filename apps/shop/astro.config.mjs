import tailwind from '@astrojs/tailwind';
import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  env: {
    schema: {
      ESLINT_USE_FLAT_CONFIG: envField.string({
        context: 'client',
        access: 'public',
      }),
      ENABLE_EXPERIMENTAL_COREPACK: envField.string({
        context: 'server',
        access: 'public',
      }),
    },
  },
});

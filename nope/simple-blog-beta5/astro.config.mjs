import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { defineConfig, envField, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  image: {
    service: passthroughImageService(),
  },
  vite: {
    ssr: {
      noExternal: ['@repo/eslint-config'],
    },
  },
  env: {
    schema: {
      YOUTUBE_API_KEY: envField.string({ access: 'secret', context: 'server' }),
      YOUTUBE_PLAYLIST_ID: envField.string({
        access: 'secret',
        context: 'server',
      }),
    },
  },

  adapter: vercel(),
});

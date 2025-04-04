// @ts-check
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  outDir: 'dist',
  compressHTML: true,
  // trailingSlash: 'never',
  cacheDir: './cache-directory',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['open-props'],
    },
  },

  // env: {
  //   schema: {
  //     SENTRY_DSN: envField.string({ context: "server", access: "private"}),
  //     SENTRY_AUTH_TOKEN: envField.string({ context: "server", access: "private"}),
  //   }
  // }
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  // experimental: {
  //   clientPrerender: true,
  // },

  site: 'https://staging.mikeconnor.tech/',

  image: {
    domains: ['astro.build', 'picsum.photos', 'https://doodleipsum.com'],
    // Used for all `<Image />` and `<Picture />` components unless overridden
    experimentalLayout: 'responsive',
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
  experimental: {
    responsiveImages: true,
    headingIdCompat: true,
    contentIntellisense: true,
  },

  scopedStyleStrategy: 'attribute',

  integrations: [icon(), mdx()],
  output: 'server',
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
    excludeFiles: ['./src/assets/markdown-cartoon.png'],
  }),
});

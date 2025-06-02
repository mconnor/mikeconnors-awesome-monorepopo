// @ts-check

import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import { defineConfig, sharpImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  outDir: 'dist',
  site: 'https://staging.mikeconnor.tech/',
  image: {
    domains: [
      'astro.build',
      'picsum.photos',
      'https://doodleipsum.com',
      'unsplash.com',
      'img.daisyui.com',
    ],
    // Used for all `<Image />` and `<Picture />` components unless overridden

    // experimentalBreakpoints: [640, 750, 828, 1080, 1280, 1668, 2048, 2560],
    service: sharpImageService(),
    // service: {
    //   service: sharpImageService(),
    //   entrypoint: 'astro/assets/services/sharp',
    //   config: {
    //     limitInputPixels: false,
    //   },
    // },
  },
  experimental: {
    responsiveImages: true,
    headingIdCompat: true,
    contentIntellisense: true,
  },

  // compressHTML: true,
  // trailingSlash: 'never',
  cacheDir: './cache-directory',
  vite: {
    // ssr: {
    //   noExternal: ['@repo/design-system'],
    // },
    plugins: [
      tailwindcss(),
      // visualizer({
      //   emitFile: true,
      //   filename: 'stats.html',
      // }),
    ],
  },

  // env: {
  //   schema: {
  //     SENTRY_DSN: envField.string({ context: "server", access: "private"}),
  //     SENTRY_AUTH_TOKEN: envField.string({ context: "server", access: "private"}),
  //   }
  // }
  // prefetch: {
  //   prefetchAll: true,
  //   defaultStrategy: 'viewport',
  // },
  // experimental: {
  //   clientPrerender: true,
  // },

  // scopedStyleStrategy: 'attribute',

  integrations: [icon(), mdx()],
  output: 'static',
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
    excludeFiles: ['./src/assets/markdown-cartoon.png'],
  }),
});

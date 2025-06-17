// @ts-check

import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import { defineConfig, sharpImageService, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  outDir: 'dist',
  site: 'https://staging.mikeconnor.tech/',
  image: {
    remotePatterns: [{ protocol: 'https' }],
    // domains: [
    //   'astro.build',
    //   'picsum.photos',
    //   'https://doodleipsum.com',
    //   'unsplash.com',
    //   'img.daisyui.com',
    // ],
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
    // headingIdCompat: true,
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
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file',
  },

  env: {
    schema: {
      SENTRY_DSN: envField.string({ context: 'server', access: 'secret' }),
      SENTRY_AUTH_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
      USER: envField.string({ context: 'server', access: 'secret' }),
      DOMAIN: envField.string({ context: 'server', access: 'secret' }),
    },
  },
  // prefetch: {
  //   prefetchAll: true,
  //   defaultStrategy: 'viewport',
  // },
  // experimental: {
  //   clientPrerender: true,
  // },

  // scopedStyleStrategy: 'attribute',

  integrations: [icon(), mdx()],
  // Astro v5.0 merges the output: 'hybrid'
  //  and output: 'static' configurations into one single configuration (now called 'static')
  output: 'static', // default all of your pages will continue to be prerendered
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
    excludeFiles: ['./src/assets/markdown-cartoon.png'],
  }),
});

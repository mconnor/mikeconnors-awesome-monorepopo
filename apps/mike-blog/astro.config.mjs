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
    responsiveStyles: true,
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
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'dracula',
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // Disable the default colors
      // https://shiki.style/guide/dual-themes#without-default-color
      // (Added in v4.12.0)
      defaultColor: false,
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
      // Add custom aliases for languages
      // Map an alias to a Shiki language ID: https://shiki.style/languages#bundled-languages
      // https://shiki.style/guide/load-lang#custom-language-aliases
      langAlias: {
        cjs: 'javascript',
      },
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
  experimental: {
    // liveContentCollections: true,
    contentIntellisense: true,
  },

  // compressHTML: true,
  // trailingSlash: 'never',
  // cacheDir: './cache-directory',
  vite: {
    // ssr: {
    //   noExternal: ['@repo/astro-ui'],
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

  // scopedStyleStrategy: 'attribute',

  integrations: [icon(), mdx()],
  // Astro v5.0 merges the output: 'hybrid'
  //  and output: 'static' configurations into one single configuration (now called 'static')
  // output: 'static', // default all of your pages will continue to be prerendered
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
    excludeFiles: ['./src/assets/markdown-cartoon.png'],
  }),
});

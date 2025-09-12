import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// import { loadEnv } from 'vite';
// const { DOMAIN } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

export default defineConfig({
  redirects: {
    '/': '/posts/live',
  },
  outDir: 'dist',
  site: `https://mikeconnor.tech/`,
  image: {
    // if you prefer to handle responsive image styling yourself,
    // or need to override these defaults when using Tailwind 4,
    //  leave the default false value configured.
    responsiveStyles: true,

    //Defines a list of permitted image source domains for
    //  remote image optimization. No other remote images
    // will be optimized by Astro.

    domains: [
      'astro.build',
      'docs.astro.build',
      'picsum.photos',
      // 'https://doodleipsum.com',
      'images.unsplash.com',
      'img.daisyui.com',
    ],

    layout: 'constrained',
    // Used for all `<Image />` and `<Picture />` components unless overridden
    // breakpoints:
    //   [640, 750, 828, 1080, 1280, 1668, 2048, 2560] |
    //   [
    //     640, 750, 828, 960, 1080, 1280, 1668, 1920, 2048, 2560, 3200, 3840,
    //     4480, 5120, 6016,
    //   ],
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
  vite: {
    // ssr: {
    //   noExternal: ['@repo/astro-ui'],
    // },
    plugins: [tailwindcss()],
  },
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file',
    inlineStylesheets: 'auto', // Inline small CSS files
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

  integrations: [icon(), mdx(), sitemap({
      filter: (page) => page !== 'https://mikeconnor.tech/secret-vip-lounge/' &&
       page !== 'https://mikeconnor.tech/randomnumber/'

      ,
    })],
  // It is no longer necessary to specify output: 'hybrid' in your Astro config to use server-rendered pages. The new output: 'static' has this capability included.
  // output: 'static',
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
    excludeFiles: ['./src/assets/markdown-cartoon.png'],
  }),
});

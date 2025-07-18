// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image:{
    responsiveStyles: false, //default is false
  }
});


// image.responsiveStyles
// Type: boolean
// Default: false
// https://docs.astro.build/en/reference/configuration-reference/#imageresponsivestyles
// Added in: astro@5.10.0
// Whether to automatically add global styles for responsive images. You should enable this option unless you are styling the images yourself.

// This option is only used when layout is set to constrained, full-width, or fixed using the configuration or the layout prop on the image component.

// See the images docs for more information.
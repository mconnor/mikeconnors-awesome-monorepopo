// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['@repo/design-system'],
    },
    plugins: [
      tailwindcss(),
      // visualizer({
      //   emitFile: true,
      //   filename: 'stats.html',
      // }),
    ],
  },
});

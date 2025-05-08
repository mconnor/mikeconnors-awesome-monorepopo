import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*/index.tsx'],
  format: ['esm'],
  external: ['preact'],
  dts: true,
  banner: {
    js: "'use client'",
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false,
});

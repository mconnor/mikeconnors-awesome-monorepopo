import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/PreactCounter.tsx'],
  format: ['esm'],
  external: ['preact'],
  banner: {
    js: "'use client'",
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false,
});

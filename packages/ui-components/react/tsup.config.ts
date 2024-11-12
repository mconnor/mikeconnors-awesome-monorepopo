import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/ReactCounter.tsx'],
  format: ['esm'],
  external: ['react'],
  banner: {
    js: "'use client'",
  },
  splitting: false,
  sourcemap: false,
  clean: true,
});

import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  format: ['esm'],
  external: ['preact'],
  banner: {
    js: "'use client'",
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false,
  outExtension() {
    return {
      js: `.mjs`,
      dts: `.d.mts`,
    };
  },
});

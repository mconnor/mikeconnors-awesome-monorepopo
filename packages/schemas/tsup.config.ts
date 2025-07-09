import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/zod3/*.ts'],
  format: ['esm'],
  splitting: false,
  sourcemap: true,
  dts: true,
  clean: true,
  minify: false,
  outExtension() {
    return {
      js: `.mjs`,
    };
  },
});

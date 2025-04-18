import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/cn.ts'],
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

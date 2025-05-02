import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/cn.mts'],
  format: ['esm'],
  splitting: false,
  sourcemap: true,
  dts: true,
  clean: true,
  shims: true,
  minify: false,
});

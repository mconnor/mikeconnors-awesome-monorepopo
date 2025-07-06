// @ts-check
import { defineConfig, globalIgnores } from 'eslint/config';

export const ignoreList = [
  'dist/',
  // 'tsup.config.ts',
  '.vercel/',
  '.wrangler',
  'cache-directory/',
  '.svelte-kit/',
  '.next/',
  'build/',
  '.config/',
  '.env.*',
  '.DS_Store',
  '.turbo/',
  'Thumbs.db',
  '.astro/',
  'test/*.ts',
  '.turbo/',
  '*.svg',
  '*-lock.yaml',
  'package-lock.json',
  'pnpm-lock.yaml',
  'tsconfig.json',
];

export default defineConfig([
  globalIgnores(ignoreList, 'Ignore build directory'),
]);

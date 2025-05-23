// @ts-check
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(
    [
      '**/dist/',
      '**/tsup.config.ts',
      '**/.vercel/',
      '**/.wrangler',
      '**/cache-directory/',
      '**/.svelte-kit/',
      '**/.next/',
      '**/build/',
      '**/.env.*',
      '**/.DS_Store',
      '**/vite.config.js.timestamp-*',
      '**/vite.config.ts.timestamp-*',
      '**/.turbo/',
      '**/Thumbs.db',
      '**/.astro/',
      '**/.prettierrc.mjs',
      '**/test/*.ts',
      '**/.turbo/',
      '**/*.svg',
      '**/*-lock.yaml',
      '**/package-lock.json',
      '**/.vscode/*.json',
      '**/node_modules/',
    ],
    'Ignore build directory',
  ),
]);

// export default {
//   name: '[*] ignored files',
//   ignores: [
//     '**/dist',
//     '**/.vercel',
//     '**/.wrangler',
//     '**/cache-directory',
//     '**/.svelte-kit',
//     '**/.next',
//     '**/build',
//     '**/.env.*',
//     '**/.DS_Store',
//     '**/vite.config.js.timestamp-*',
//     '**/vite.config.ts.timestamp-*',
//     '**/.turbo',
//     '**/Thumbs.db',
//     '**/.astro',
//     '**/.prettierrc.mjs',
//     '**/test/*.ts',
//     '**/.turbo',
//     '**/*.svg',
//     '**/*-lock.yaml',
//     '**/package-lock.json',
//   ],
// };

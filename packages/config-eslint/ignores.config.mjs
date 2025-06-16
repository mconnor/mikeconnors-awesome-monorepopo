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
      '**/.turbo/',
      '**/Thumbs.db',
      '**/.astro/',
      '**/.prettierrc.mjs',
      '**/test/*.ts',
      '**/.turbo/',
      '**/*.svg',
      '**/*-lock.yaml',
      '**/package-lock.json',
    ],
    'Ignore build directory',
  ),
]);

// export default defineConfig([
//     {
//       ignores: [
//       '**/dist/',
//       '**/tsup.config.ts',
//       '**/.vercel/',
//       '**/.wrangler',
//       '**/cache-directory/',
//       '**/.svelte-kit/',
//       '**/.next/',
//       '**/build/',
//       '**/.env.*',
//       '**/.DS_Store',
//       '**/.turbo/',
//       '**/Thumbs.db',
//       '**/.astro/',
//       '**/.prettierrc.mjs',
//       '**/test/*.ts',
//       '**/.turbo/',
//       '**/*.svg',
//       '**/*-lock.yaml',
//       '**/package-lock.json',
//     ]
//     },
//     { ... }, // ... other configuration object, inherit global ignores
//     { ... }, // ... other configuration object, inherit global ignores
// ]);

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

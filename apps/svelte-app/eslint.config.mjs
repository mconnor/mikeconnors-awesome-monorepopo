import svelteConfig from '@repo/eslint-config/svelte';
import tsLint from '@repo/eslint-config/ts-lint';


export default [
  {
    ignores: [
      'dist/',
      '.vercel/',
      'cache-directory/',
      '.astro/',
      'test/*.ts',
      '**/*d.ts',
      '.turbo/',
      '*.svg/',
      'pnpm-lock.yaml',
      'package-lock.json',
      '.prettierrc.mjs',
      '.svelte-kit/',
    ],
  },
  ...tsLint,
  ...svelteConfig,
];

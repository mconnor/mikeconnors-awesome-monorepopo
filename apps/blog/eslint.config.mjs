import * as MyLints from '@repo/eslint-config';

export default [
  ...MyLints.astroLintConfig,
  {
    ignores: [
      '**/_*.*',
      '**/temp.js',
      '*lock.yaml',
      '.turbo/',
      '.astro/',
      'dist/',
      'my-custom-cache-directory',
      'src/env.d.ts',
      '.vercel/',
    ],
  },
];

import astroLintConfig from '@repo/eslint-config/astroLintConfig.js';

export default [
  ...astroLintConfig,
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
      'my-astro-build-directory/',
    ],
  },
];

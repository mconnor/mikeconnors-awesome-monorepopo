import astroConfig from '@repo/eslint-config';

export default [
  ...astroConfig,

  // {
  //   rules: {
  //     "@typescript-eslint/no-unused-vars": ["warn"],
  //     // "lit/no-invalid-html": "warn",
  //   },
  // },

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
      '**/*.d.ts.map',
      '**/*.d.ts',
    ],
  },
];

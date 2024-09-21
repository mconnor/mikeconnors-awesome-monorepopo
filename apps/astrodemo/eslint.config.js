import astroConfig from '@repo/eslint-config/astro';
import litConfig from '@repo/eslint-config/lit-config';
import prettierConfig from '@repo/eslint-config/prettier';

export default [
  ...astroConfig,
  ...litConfig,
  prettierConfig,
  {
    ignores: ['.prettierrc.mjs', '.vercel/'],
  },
];

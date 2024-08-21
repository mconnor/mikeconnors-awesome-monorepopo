import astroConfig from '@repo/eslint-config/astro';
import prettierConfig from '@repo/eslint-config/prettier-config';

export default [
  ...astroConfig,
  prettierConfig,
  {
    ignores: ['.prettierrc.mjs'],
  },
];

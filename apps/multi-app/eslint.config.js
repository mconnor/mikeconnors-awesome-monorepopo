import astroConfig from '@repo/eslint-config/astro';
import eslintConfigPrettier from '@repo/eslint-config/prettier-config';

export default [
  ...astroConfig,
  eslintConfigPrettier,
  {
    ignores: ['.prettierrc.mjs'],
  },
];

import eslintConfigPrettier from '@repo/eslint-config/prettier';
import astroConfig from '@repo/eslint-config/astro';

import litConfig from '@repo/eslint-config/lit-config';

export default [
  ...astroConfig,
  ...litConfig,

  eslintConfigPrettier,
  { ignores: ['test/*.ts'] },
];

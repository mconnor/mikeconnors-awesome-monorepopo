import eslintConfigPrettier from '@repo/eslint-config/prettier';
import astroConfig from '@repo/eslint-config/astro';
import typeCheckingDisable from '@repo/eslint-config/type-disable';
import litConfig from '@repo/eslint-config/lit-config';

export default [
  ...astroConfig,
  ...typeCheckingDisable,
  ...litConfig,
  eslintConfigPrettier,
  { ignores: ['test/*.ts'] },
];

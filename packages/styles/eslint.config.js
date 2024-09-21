//import tsLint from '@repo/eslint-config/ts-lint';
import tsLint from '@repo/eslint-config/ts-lint-type-check';
import eslintConfigPrettier from '@repo/eslint-config/prettier';
import astro from '@repo/eslint-config/astro';

import litConfig from '@repo/eslint-config/lit-config';

export default [
  ...tsLint,
  ...astro,
  ...litConfig,
  eslintConfigPrettier,
  { ignores: ['test/*.ts'] },
];

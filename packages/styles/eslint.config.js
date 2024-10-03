//import tsLint from '@repo/eslint-config/ts-lint';
import tsLint from '@repo/eslint-config/ts-lint-type-check';
import eslintConfigPrettier from '@repo/eslint-config/prettier';
import astro from '@repo/eslint-config/astro';

import litConfig from '@repo/eslint-config/lit-config';
import regExpConfig from '@repo/eslint-config/regex';

export default [
  ...tsLint,
  ...regExpConfig,
  ...astro,
  ...litConfig,
  eslintConfigPrettier,
  { ignores: ['test/*.ts'] },
];

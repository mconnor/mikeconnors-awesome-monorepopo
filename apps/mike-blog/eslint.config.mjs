// @ts-check

import astro from '@repo/eslint-config/astroLint';
import litConfig from '@repo/eslint-config/lit-config';
import markdownConfig from '@repo/eslint-config/markdown';
import eslintConfigPrettier from '@repo/eslint-config/prettier';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import tsLint from '@repo/eslint-config/ts-lint';
// import turboConfig from '@repo/eslint-config/turbo-config'

// import jsonConfig from '@repo/eslint-config/json';
// import regexConfig from '@repo/eslint-config/regex';

export default [
  ...tsLint,
  ...astro,
  ...litConfig,
  ...markdownConfig,
  // turboConfig,
  // {
  //   rules: {
  //     'no-useless-escape': 'warn',
  //     '@typescript-eslint/no-unsafe-assignment': 'warn',
  //   },
  // },
  eslintConfigPrettier,
];

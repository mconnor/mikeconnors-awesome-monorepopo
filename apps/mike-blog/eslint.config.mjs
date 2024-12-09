// @ts-check

import astro from '@repo/eslint-config/astroLint';
import litConfig from '@repo/eslint-config/lit-config';
import markdownConfig from '@repo/eslint-config/markdown';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import tsLint from '@repo/eslint-config/ts-lint';
// import turboConfig from '@repo/eslint-config/turbo-config'

// import jsonConfig from '@repo/eslint-config/json';
// import regexConfig from '@repo/eslint-config/regex';

const config = [
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
];

export default config;

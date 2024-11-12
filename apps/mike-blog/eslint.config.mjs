// @ts-check

import astro from '@repo/eslint-config/astro';
import litConfig from '@repo/eslint-config/lit-config';
import markdownConfig from '@repo/eslint-config/markdown';
import tsLint from '@repo/eslint-config/ts-lint-type-check';
// import tsLint from '@repo/eslint-config/ts-lint';
// import jsonConfig from '@repo/eslint-config/json';
// import regexConfig from '@repo/eslint-config/regex';

export default [
  ...tsLint,
  ...astro,
  ...litConfig,
  ...markdownConfig,
  {
    rules: {
      'no-useless-escape': 'warn',
    },
  },
];

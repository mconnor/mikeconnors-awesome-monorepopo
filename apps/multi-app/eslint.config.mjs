import astro from '@repo/eslint-config/astroLint';

import tsLint from '@repo/eslint-config/ts-lint-type-check';
import eslintConfigPrettier from '@repo/eslint-config/prettier';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';

// import turboConfig from '@repo/eslint-config/turbo-config'

// import jsonConfig from '@repo/eslint-config/json';
// import regexConfig from '@repo/eslint-config/regex';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tsLint,
  ...astro,

  {
    rules: {
      'no-useless-escape': 'warn',
    },
  },
  eslintConfigPrettier,
];

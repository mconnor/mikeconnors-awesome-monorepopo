import astro from '@repo/eslint-config/astroLint';
import markdownConfig from '@repo/eslint-config/markdown';
// import litConfig from '@repo/eslint-config/lit-config';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import tsLint from '@repo/eslint-config/ts-lint';
import eslintConfigPrettier from '@repo/eslint-config/prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tsLint,
  ...astro,
  ...markdownConfig,
  // ...litConfig,

  {
    rules: {
      'no-useless-escape': 'warn',
    },
  },
  eslintConfigPrettier,
];

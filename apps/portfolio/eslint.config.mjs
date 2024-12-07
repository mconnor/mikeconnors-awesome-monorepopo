import astro from '@repo/eslint-config/astroLint';
// import litConfig from '@repo/eslint-config/lit-config';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import tsLint from '@repo/eslint-config/ts-lint';
import markdownConfig from '@repo/eslint-config/markdown';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...tsLint,
  ...astro,
  ...markdownConfig,
  // ...litConfig,

  {
    rules: {
      'no-useless-escape': 'warn',
    },
  },
];

export default config;

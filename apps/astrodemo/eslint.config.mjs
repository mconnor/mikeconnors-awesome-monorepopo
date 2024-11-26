import astro from '@repo/eslint-config/astro.lint.config';
import litConfig from '@repo/eslint-config/lit-config';
import markdownConfig from '@repo/eslint-config/md.lint.config';
import tsLint from '@repo/eslint-config/ts.lint.config';
// import tsLint from '@repo/eslint-config/ts.typeChecked.lint.config';
// import turboConfig from '@repo/eslint-config/turbo-config'

// import jsonConfig from '@repo/eslint-config/json';
// import regexConfig from '@repo/eslint-config/regex';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...tsLint,
  ...astro,
  ...litConfig,
  ...markdownConfig,
  // turboConfig,
  {
    rules: {
      'no-useless-escape': 'warn',
    },
  },
];

export default config;

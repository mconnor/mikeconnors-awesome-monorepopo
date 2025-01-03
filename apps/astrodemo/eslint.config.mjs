import astro from '@repo/eslint-config/astroLint';
import litConfig from '@repo/eslint-config/lit-config';
import markdownConfig from '@repo/eslint-config/md.lint.config';
import tsLint from '@repo/eslint-config/ts-lint';
import eslintConfigPrettier from '@repo/eslint-config/prettier';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
// import turboConfig from '@repo/eslint-config/turbo-config'

// import jsonConfig from '@repo/eslint-config/json';
// import regexConfig from '@repo/eslint-config/regex';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
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
  eslintConfigPrettier,
];

export default config;

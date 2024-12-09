// @ts-check
import astro from '@repo/eslint-config/astroLint';
// import litConfig from '@repo/eslint-config/lit-config';
import markdownConfig from '@repo/eslint-config/markdown';
import tsLint from '@repo/eslint-config/ts-lint-type-check';

const config = [
  ...tsLint,
  ...astro,
  // ...litConfig,
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

// @ts-check
import tsLint from '@repo/eslint-config/ts-lint';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import config from '@repo/eslint-config/astro';
import prettierConfig from '@repo/eslint-config/prettier';
import regex from '@repo/eslint-config/regex';

export default [...tsLint, ...config, ...regex, prettierConfig];

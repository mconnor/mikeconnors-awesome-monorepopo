// @ts-check

import astro from '@repo/eslint-config/astroLint';
import tsLint from '@repo/eslint-config/ts-lint-type-check';
import eslintConfigPrettier from '@repo/eslint-config/prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [...tsLint, ...astro, eslintConfigPrettier];

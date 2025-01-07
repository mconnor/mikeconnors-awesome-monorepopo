import astroConfig from '@repo/eslint-config/astroLint';

import tsLint from '@repo/eslint-config/ts-lint';
import eslintConfigPrettier from '@repo/eslint-config/prettier';

/** @type {import('eslint').Linter.Config[]} */
const config = [...tsLint, ...astroConfig, eslintConfigPrettier];

export default config;

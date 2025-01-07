// import tsLint from '@repo/eslint-config/ts-lint';
import astroConfig from '@repo/eslint-config/astroLint';
import reactConfig from '@repo/eslint-config/react.lint.config';
import tsLint from '@repo/eslint-config/ts-lint';
import eslintConfigPrettier from '@repo/eslint-config/prettier';

/** @type {import('eslint').Linter.Config[]} */
const config =  [...tsLint, ...astroConfig, ...reactConfig, eslintConfigPrettier];

export default config;
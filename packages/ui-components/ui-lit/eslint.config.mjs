import astro from '@repo/eslint-config/astro.lint.config';
import litConfig from '@repo/eslint-config/lit-config';
import tsLint from '@repo/eslint-config/ts-lint';

/** @type {import('eslint').Linter.Config} */
const config = [...tsLint, ...astro, ...litConfig];

export default config;

import astro from '@repo/eslint-config/astro.lint.config';
import tsLint from '@repo/eslint-config/ts-lint';
// import tsLint from '@repo/eslint-config/ts.typeChecked.lint.config';

/** @type {import('eslint').Linter.Config[]} */
const config = [...tsLint, ...astro];

export default config;

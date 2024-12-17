import astro from '@repo/eslint-config/astroLint';
import tsLint from '@repo/eslint-config/ts-lint';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';

/** @type {import('eslint').Linter.Config[]} */
const config = [...tsLint, ...astro];

export default config;

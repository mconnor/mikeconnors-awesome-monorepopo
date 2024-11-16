// import tsLint from '@repo/eslint-config/ts-lint';
import astroConfig from '@repo/eslint-config/astro';
import tsLint from '@repo/eslint-config/ts-lint-type-check';
// import litConfig from '@repo/eslint-config/lit-config';

// import jsonConfig from '@repo/eslint-config/json';
/** @type {import('eslint').Linter.Config[]} */
const config = [...tsLint, ...astroConfig];

export default config;

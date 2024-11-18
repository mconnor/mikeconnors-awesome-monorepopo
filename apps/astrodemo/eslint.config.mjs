// import tsLint from '@repo/eslint-config/ts.lint.config';
import astLint from '@repo/eslint-config/astro.lint.config';
import tsLint from '@repo/eslint-config/ts.typeChecked.lint.config';
// import litConfig from '@repo/eslint-config/lit-config';

// import jsonConfig from '@repo/eslint-config/json';
/** @type {import('eslint').Linter.Config[]} */
const config = [...tsLint, ...astLint];

export default config;

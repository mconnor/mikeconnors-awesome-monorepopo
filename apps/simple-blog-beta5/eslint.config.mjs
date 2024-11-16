// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import astroConfig from '@repo/eslint-config/astro';
// import markdownConfig from '@repo/eslint-config/markdown';
// import jsonConfig from '@repo/eslint-config/json';
// import regexConfig from '@repo/eslint-config/regex';
import tsLint from '@repo/eslint-config/ts-lint';

/** @type {import('eslint').Linter.Config[]} */
export default [...tsLint, ...astroConfig];

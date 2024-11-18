// import tsLint from '@repo/eslint-config/ts.typeChecked.lint.config';
import astLint from '@repo/eslint-config/astro.lint.config';
// import markdownConfig from '@repo/eslint-config/md.lint.config';
// import jsonConfig from '@repo/eslint-config/json';
// import regexConfig from '@repo/eslint-config/regex';
import tsLint from '@repo/eslint-config/ts.lint.config';

/** @type {import('eslint').Linter.Config[]} */
export default [...tsLint, ...astLint];

import markdownConfig from '@repo/eslint-config/md-config';
import tsLint from '@repo/eslint-config/ts-lint';
import tailwindConfig from '@repo/eslint-config/tailwind-lint';
// import turboConfig from '@repo/eslint-config/turbo-config';

// import jsonConfig from '@repo/eslint-config/json';
// import regexConfig from '@repo/eslint-config/regex';

/** @type {import("eslint").Linter.Config} */
const config = [...tsLint, ...markdownConfig];

export default config;

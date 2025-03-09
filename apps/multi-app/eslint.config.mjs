import markdownConfig from '@repo/eslint-config/md-config';
import tsLint from '@repo/eslint-config/ts-lint';



/** @type {import("eslint").Linter.Config} */
const config = [...tsLint, ...markdownConfig];

export default config;

import litConfig from '@repo/eslint-config/lit-config';
import markdownConfig from '@repo/eslint-config/md-config';
import tsLint from '@repo/eslint-config/ts-lint';

/** @type {import("eslint").Linter.Config} */
const config = [...tsLint, ...litConfig, ...markdownConfig];

export default config;

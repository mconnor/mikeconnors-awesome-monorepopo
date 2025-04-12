import tsLint from '@repo/eslint-config/ts-lint';
import litConfig from '@repo/eslint-config/lit-config';

/** @type {import("eslint").Linter.Config} */
const config = [...tsLint, ...litConfig];

export default config;

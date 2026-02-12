import reactConfig from '@repo/eslint-config/react-internal';
import tsLint from '@repo/eslint-config/ts-lint';

/** @type {import('eslint').Linter.Config[]} */
const config = [...tsLint, ...reactConfig];

export default config;

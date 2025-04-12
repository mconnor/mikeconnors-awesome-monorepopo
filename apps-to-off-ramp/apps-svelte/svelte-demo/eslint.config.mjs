import svelte from '@repo/eslint-config/svelte5-app';

import tsLint from '@repo/eslint-config/ts-lint';

/** @type {import("eslint").Linter.Config} */
const config = [...tsLint, ...svelte];

export default config;

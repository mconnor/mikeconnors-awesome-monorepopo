import tsLint from '@repo/eslint-config/ts-lint';
import reactConfig from '@repo/eslint-config/react-internal';
import svelteConfig from '@repo/eslint-config/svelte5-app';
import solid from '@repo/eslint-config/solid';
import vue from '@repo/eslint-config/vue-config';

/** @type {import("eslint").Linter.Config} */
const config = [...tsLint, ...svelteConfig, ...vue];

export default config;

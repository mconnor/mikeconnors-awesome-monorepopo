import svelteConfig from '@repo/eslint-config/svelte-app';
import tsLint from '@repo/eslint-config/ts-lint';

const config = [...tsLint, ...svelteConfig];

export default config;

import svelteConfig from '@repo/eslint-config/svelte';
import tsLint from '@repo/eslint-config/ts-lint-type-check';


export default [
  ...tsLint,
  ...svelteConfig,
];

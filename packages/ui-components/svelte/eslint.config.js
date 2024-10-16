import tsLint from '@repo/eslint-config/ts-lint';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import svelte from '@repo/eslint-config/svelte';
import eslintConfigPrettier from '@repo/eslint-config/prettier';
// import jsonConfig from '@repo/eslint-config/json';

export default [
  ...tsLint,
  ...svelte,
  // ...jsonConfig,
  eslintConfigPrettier,
];

import astroConfig from '@repo/eslint-config/astroLint';
import tsLint from '@repo/eslint-config/ts-lint';
// import reactConfig from '@repo/eslint-config/react.lint.config';
// import svelte from '@repo/eslint-config/svelte';
import eslintConfigPrettier from '@repo/eslint-config/prettier';

export default [...tsLint, ...astroConfig, eslintConfigPrettier];

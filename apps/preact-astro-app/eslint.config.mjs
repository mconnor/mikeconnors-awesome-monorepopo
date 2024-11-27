import astroConfig from '@repo/eslint-config/astro.lint.config';
import tsLint from '@repo/eslint-config/ts-lint';
// import reactConfig from '@repo/eslint-config/react.lint.config';
// import svelte from '@repo/eslint-config/svelte';

export default [...tsLint, ...astroConfig];

import tsLint from '@repo/eslint-config/ts-lint';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import astroConfig from '@repo/eslint-config/astro';
// import reactConfig from '@repo/eslint-config/react';
// import svelte from '@repo/eslint-config/svelte';
import solid from '@repo/eslint-config/solid';

export default [...tsLint, ...astroConfig, ...solid];

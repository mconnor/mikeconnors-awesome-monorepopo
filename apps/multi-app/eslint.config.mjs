// @ts-check

import astroConfig from '@repo/eslint-config/astro';
import tsLint from '@repo/eslint-config/ts-lint';
// import reactConfig from '@repo/eslint-config/react';
// import svelte from '@repo/eslint-config/svelte';

export default [...tsLint, ...astroConfig];

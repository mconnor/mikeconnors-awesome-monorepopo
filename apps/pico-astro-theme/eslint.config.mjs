// @ts-check
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import astroConfig from '@repo/eslint-config/astro';
import reactConfig from '@repo/eslint-config/react';
import tsLint from '@repo/eslint-config/ts-lint';

export default [...tsLint, ...astroConfig, ...reactConfig];

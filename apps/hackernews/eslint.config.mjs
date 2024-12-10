// @ts-check

import astro from '@repo/eslint-config/astroLint';
import tsLint from '@repo/eslint-config/ts-lint-type-check';

const config = [...tsLint, ...astro];

export default config;

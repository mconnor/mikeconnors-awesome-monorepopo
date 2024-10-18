// import tsLint from "@repo/eslint-config/ts-lint";
import tsLint from '@repo/eslint-config/ts-lint-type-check';
import astroConfig from '@repo/eslint-config/astro';
import reactConfig from '@repo/eslint-config/react';

export default [...tsLint, ...astroConfig, ...reactConfig];

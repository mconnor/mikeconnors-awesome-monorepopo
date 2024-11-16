// import tsLint from '@repo/eslint-config/ts-lint';
import astroConfig from '@repo/eslint-config/astro';
// import jsonConfig from '@repo/eslint-config/json';
import litConfig from '@repo/eslint-config/lit-config';
import tsLint from '@repo/eslint-config/ts-lint-type-check';
// import typeCheckingDisable from '@repo/eslint-config/type-disable';

// import { Linter } from 'eslint';

export default [
  ...tsLint,
  ...astroConfig,
  ...typeCheckingDisable,
  ...litConfig,
];

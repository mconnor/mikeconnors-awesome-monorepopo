// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import astro from '@repo/eslint-config/astro';
// import jsonConfig from '@repo/eslint-config/json';
import litConfig from '@repo/eslint-config/lit-config';
import tsLint from '@repo/eslint-config/ts-lint';
import typeCheckingDisable from '@repo/eslint-config/type-disable';

export default [
  ...tsLint,
  ...astro,

  ...litConfig,
  ...typeCheckingDisable,
  // ...jsonConfig,
];

import tsLint from '@repo/eslint-config/ts-lint';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import eslintConfigPrettier from '@repo/eslint-config/prettier';
import astro from '@repo/eslint-config/astro';
// import typeCheckingDisable from '@repo/eslint-config/type-disable';
// import jsonConfig from '@repo/eslint-config/json';
import litConfig from '@repo/eslint-config/lit-config';

export default [
  ...tsLint,
  ...astro,
  // ...typeCheckingDisable,
  ...litConfig,
  // ...jsonConfig,
  eslintConfigPrettier,
];

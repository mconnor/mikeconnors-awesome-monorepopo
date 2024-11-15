// @ts-check
import astro from '@repo/eslint-config/astro';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import tsLint from '@repo/eslint-config/ts-lint';
import typeCheckingDisable from '@repo/eslint-config/type-disable';

export default [...tsLint, ...astro, ...typeCheckingDisable];

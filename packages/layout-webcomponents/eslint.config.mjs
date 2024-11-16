import astro from '@repo/eslint-config/astro';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import tsLint from '@repo/eslint-config/ts-lint';
import typeCheckingDisable from '@repo/eslint-config/type-disable';

/** @type {import('eslint').Linter.Config[]} */
const config = [...tsLint, ...astro, ...typeCheckingDisable];

export default config;

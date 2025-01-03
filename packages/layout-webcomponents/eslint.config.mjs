import astroConfig from '@repo/eslint-config/astroLint';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import tsLint from '@repo/eslint-config/ts-lint';
import typeCheckingDisable from '@repo/eslint-config/type-disable';

/** @type {import("eslint").Linter.Config} */
export default [...tsLint, ...astroConfig, ...typeCheckingDisable];

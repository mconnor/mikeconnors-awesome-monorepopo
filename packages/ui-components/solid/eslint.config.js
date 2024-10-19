import tsLint from '@repo/eslint-config/ts-lint';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import solidConfig from '@repo/eslint-config/solid';

export default [...tsLint, ...solidConfig];

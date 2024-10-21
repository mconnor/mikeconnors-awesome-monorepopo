// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import solidConfig from '@repo/eslint-config/solid';
import tsLint from '@repo/eslint-config/ts-lint';

export default [...tsLint, ...solidConfig];

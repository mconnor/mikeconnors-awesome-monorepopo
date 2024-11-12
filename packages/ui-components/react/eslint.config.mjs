// @ts-check
// // import tsLint from '@repo/eslint-config/ts-lint-type-check';
import reactConfig from '@repo/eslint-config/react';
// import tsLint from '@repo/eslint-config/ts-lint';
import tsLint from '@repo/eslint-config/ts-lint-type-check';

// import { Linter } from 'eslint';

export default [...tsLint, ...reactConfig];

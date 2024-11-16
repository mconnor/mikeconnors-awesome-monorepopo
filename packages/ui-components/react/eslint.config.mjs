// // import tsLint from '@repo/eslint-config/ts-lint-type-check';
import reactConfig from '@repo/eslint-config/react';
// import tsLint from '@repo/eslint-config/ts-lint';
import tsLint from '@repo/eslint-config/ts-lint-type-check';

// import { Linter } from 'eslint';

/** @type {import('eslint').Linter.Config[]} */
const config = [...tsLint, ...reactConfig];

export default config;

//const config: Linter.Config<Linter.RulesRecord>[]

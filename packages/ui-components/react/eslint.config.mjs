// // import tsLint from '@repo/eslint-config/ts.typeChecked.lint.config';
import reactConfig from '@repo/eslint-config/react.lint.config';
import tsLint from '@repo/eslint-config/ts.lint.config';
// import tsLint from '@repo/eslint-config/ts.typeChecked.lint.config';

// import { Linter } from 'eslint';

/** @type {import('eslint').Linter.Config} */
const config = [...tsLint, ...reactConfig];

export default config;

//const config: Linter.Config<Linter.RulesRecord>[]

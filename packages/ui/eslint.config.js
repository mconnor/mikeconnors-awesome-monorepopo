import tsLint from '@repo/eslint-config/ts-lint';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import eslintConfigPrettier from '@repo/eslint-config/prettier';

export default [...tsLint, eslintConfigPrettier];

import tsLint from '@repo/eslint-config/ts-lint';
// import tsLint from '@repo/eslint-config/ts-lint-type-check';
// import preactConfig from '@repo/eslint-config/preact';
import reactConfig from '@repo/eslint-config/react';
import eslintConfigPrettier from '@repo/eslint-config/prettier';

export default [
  ...tsLint,
  // ...preactConfig,
  ...reactConfig,
  eslintConfigPrettier,
  {
    ignores: ['dist', '.turbo'],
  },
];

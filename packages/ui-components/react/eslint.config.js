import reactConfig from '@repo/eslint-config/react';
import eslintConfigPrettier from '@repo/eslint-config/prettier';

export default [
  ...reactConfig,
  eslintConfigPrettier,
  {
    ignores: ['dist', '.turbo'],
  },
];

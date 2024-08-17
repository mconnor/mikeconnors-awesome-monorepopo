import config from '@repo/eslint-config/reactConfig';
import eslintConfigPrettier from '@repo/eslint-config/eslintConfigPrettier';

export default [
  ...config,
  eslintConfigPrettier,
  {
    ignores: ['dist', '.turbo'],
  },
];

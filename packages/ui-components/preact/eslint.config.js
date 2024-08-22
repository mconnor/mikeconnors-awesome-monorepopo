import preactConfig from '@repo/eslint-config/preact';
import eslintConfigPrettier from '@repo/eslint-config/prettier-config';

export default [
  ...preactConfig,
  eslintConfigPrettier,
  {
    ignores: ['dist', '.turbo'],
  },
];

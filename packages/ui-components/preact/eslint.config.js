import config from '@repo/eslint-config/preactConfig';
import eslintConfigPrettier from '@repo/eslint-config/eslintConfigPrettier';

export default [
  ...config,
  eslintConfigPrettier,
  {
    rules: {
      'react/no-unknown-property': 'warn',
    },
  },
];

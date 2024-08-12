import config from '@repo/eslint-config/astroBasicConfig';

export default [
  ...config,
  {
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
];

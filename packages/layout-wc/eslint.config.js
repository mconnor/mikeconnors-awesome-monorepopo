import config from '@repo/eslint-config/astroBasicConfig.mjs';

export default [
  ...config,
  {
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
];

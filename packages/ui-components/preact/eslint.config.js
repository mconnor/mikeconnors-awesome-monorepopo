import config from '@repo/eslint-config/preactConfig';

export default [
  ...config,
  {
    rules: {
      'react/no-unknown-property': 'warn',
    },
  },
];

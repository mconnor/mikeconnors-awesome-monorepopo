import config from '@repo/eslint-config/reactConfig';

export default [
  ...config,
  {
    ignores: ['dist', '.turbo'],
  },
];

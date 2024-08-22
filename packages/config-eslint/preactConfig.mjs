import reactConfig from './reactConfig.mjs';

export default [
  ...reactConfig,
  {
    rules: {
      'react/no-unknown-property': ['error', { ignore: ['class'] }],
    },
  },
];

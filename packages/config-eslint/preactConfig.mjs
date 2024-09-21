import reactConfig from './reactConfig.mjs';

export default [
  ...reactConfig,
  {
    settings: {
      react: {
        pragma: 'h',
      },
    },
  },
  {
    rules: {
      'react/no-unknown-property': ['error', { ignore: ['class'] }],
    },
  },
];

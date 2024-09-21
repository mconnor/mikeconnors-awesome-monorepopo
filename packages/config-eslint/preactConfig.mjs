import reactConfig from './reactConfig.mjs';
import preact from 'eslint-config-preact';

export default [
  {
    extends: ['preact'],
  },
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

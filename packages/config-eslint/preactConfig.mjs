import config from './reactConfig.mjs';

export default [
  ...config,
  {
    files: ['**/*.jsx', '**/*.tsx'],
    rules: {
      'react/react-in-jsx-scope': 'warn',
      'react/no-unknown-property': 'warn',
    },
  },
];

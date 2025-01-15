// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import { ESLint } from 'eslint';

import preactConfig from './eslint-config-preact';

const compat = new FlatCompat({
  baseDirectory: __dirname, // Adjust if your config is in a different directory
});

export default [
  // Convert your old `.eslintrc` configs
  ...compat.config({
    extends: ['eslint:recommended', 'plugin:react/recommended'], // Add your old extends here
    parser: '@babel/eslint-parser', // Example: use the same parser
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn', // Example rule
      'react/react-in-jsx-scope': 'off', // Example rule
    },
  }),

  // Add any new configurations here in the flat config style
  {
    files: ['src/**/*.js'],
    rules: {
      'no-console': 'warn',
    },
  },
];

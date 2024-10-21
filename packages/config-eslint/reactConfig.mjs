// @ts-check
import reactPlugin from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import disableTypeChecking from './typeCheckingDisable.mjs';

export default tseslint.config(
  {
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs['recommended-with-jsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    files: ['**/*.jsx'],
    ...disableTypeChecking,
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
);

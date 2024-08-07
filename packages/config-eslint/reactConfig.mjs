// @ts-check
import path from 'node:path';
import reactPlugin from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

const { configs } = reactPlugin;

const reactConfig = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylistic,
  configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },

      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },

  {
    files: ['**/*.js', '**/*.mjs'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    ignores: [
      '*.config.*',
      '.turbo',
      '**/temp.js',
      '**/*.d.ts',
      '**/_*.*',
      '**/temp.js',
      'dist/',
      'my-custom-cache-directory',
    ],
  },
  eslintConfigPrettier,
);

export default reactConfig;

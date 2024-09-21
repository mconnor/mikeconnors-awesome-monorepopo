// @ts-check

import reactPlugin from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import myTslintConfig from './myTslintConfig.mjs';

// const extraFileExtensions = ['.tsx', '.jsx'];

const reactConfig = tseslint.config(
  ...myTslintConfig,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  {
    languageOptions: {
      parserOptions: {
        parserServices: true,
        // tsconfigRootDir: import.meta.dirname,

        projectFolderIgnoreList: ['**/node_modules/**', '**/dist', '**/.turbo'],
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  // {
  //   settings: {
  //     react: {
  //       version: 'detect',
  //     },
  //   },
  // },
  {
    files: ['**/*.jsx'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    files: ['**/*.jsx', '**/*.tsx'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': ['error', { ignore: ['class'] }],
    },
  },
  { ignores: ['**/*.astro'] },
);

export default [...reactConfig];

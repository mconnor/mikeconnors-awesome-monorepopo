// @ts-check

import reactPlugin from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import myTslintConfig from './myTslintConfig.mjs';

const extraFileExtensions = ['.tsx', '.jsx'];

const reactConfig = tseslint.config(
  ...myTslintConfig,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        projectFolderIgnoreList: ['**/node_modules/**', '**/dist', '**/.turbo'],
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ['**/*.jsx'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    files: ['**/*.jsx', '**/*.tsx'],
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
);

export default reactConfig;
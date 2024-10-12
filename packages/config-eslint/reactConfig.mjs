// @ts-check

import reactPlugin from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
// import tslintConfig from './tslintConfig.mjs';
import globals from 'globals';
import { rules } from 'eslint-plugin-astro';
// const extraFileExtensions = ['.tsx', '.jsx'];

export default [
  {
    files: ['**/*.{jsx,tsx}'],
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs['recommended-with-jsx'],
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      'react-in-jsx-scope': 'off',
    },
  },
];

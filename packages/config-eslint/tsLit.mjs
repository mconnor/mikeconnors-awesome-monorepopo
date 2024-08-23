// @ts-check

import { configs as wcConfigs } from 'eslint-plugin-wc';
// import path from 'path';
// import { fileURLToPath } from 'url';

import { configs as litConfigs } from 'eslint-plugin-lit';
// import globals from 'globals';
import tseslint from 'typescript-eslint';

const tsLitConfig = tseslint.config(
  wcConfigs['flat/recommended'],
  litConfigs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        parserServices: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ['**/*js'],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      'no-unused-expressions': 'off',
      'wc/no-constructor-attributes': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
  {
    settings: {
      wc: {
        elementBaseClasses: ['LitElement'], // Recognize `LitElement` as a Custom Element base class
      },
    },
  },
);

export default tsLitConfig;

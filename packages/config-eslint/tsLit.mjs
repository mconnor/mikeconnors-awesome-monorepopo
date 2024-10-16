// @ts-check

import { configs as wcConfigs } from 'eslint-plugin-wc';
// import path from 'path';
// import { fileURLToPath } from 'url';

import { configs as litConfigs } from 'eslint-plugin-lit';
// import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  wcConfigs['flat/recommended'],
  litConfigs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        // parserServices: true,
        // ecmaFeatures: {
        //   jsx: true,
        // },
      },
      // globals: {
      //   ...globals.browser,
      //   ...globals.node,
      // },
    },
  },
  {
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      'no-unused-expressions': 'off',
      'wc/no-constructor-attributes': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  {
    files: ['**/*.config.mjs'],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
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

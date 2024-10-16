// @ts-check

import wc from 'eslint-plugin-wc';
// import path from 'path';
// import { fileURLToPath } from 'url';

import lit from 'eslint-plugin-lit';
// import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    files: ['**/*.ts'],
    ...wc.configs['flat/recommended'],
    ...lit.configs['flat/recommended'],
    rules: {
      // '@typescript-eslint/unbound-method': 'off',
      // '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },

  // {
  //   files: ['**/*.js', '**/*.mjs'],
  //   extends: [tseslint.configs.disableTypeChecked],
  //   rules: {
  //     'no-unused-expressions': 'off',
  //     'wc/no-constructor-attributes': 'off',
  //     '@typescript-eslint/no-unused-expressions': 'off',
  //   },
  // },
  // {
  //   files: ['**/*.config.mjs'],
  //   extends: [tseslint.configs.disableTypeChecked],
  //   rules: {
  //     '@typescript-eslint/no-unsafe-assignment': 'off',
  //   },
  // },
  {
    settings: {
      wc: {
        elementBaseClasses: ['LitElement'], // Recognize `LitElement` as a Custom Element base class
      },
    },
  },
);

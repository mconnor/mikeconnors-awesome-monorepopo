// @ts-check
// import prettier from 'eslint-config-prettier';
// import js from '@eslint/js';
import * as svelteParser from 'svelte-eslint-parser';
import svelte from 'eslint-plugin-svelte';
// import globals from 'globals';
// import ignoresConfig from './ignores.config.mjs';
import tseslint from 'typescript-eslint';

import extensionInstanceObj from './fileExtensions.mjs';
const extraFileExtensions = extensionInstanceObj.getExtensions();

export default tseslint.config({
  extends: [...svelte.configs.recommended, ...svelte.configs.prettier],
  files: ['**/*.svelte'],

  languageOptions: {
    parser: svelteParser,
    parserOptions: {
      parser: tseslint.parser,
      extraFileExtensions,
    },
  },
  rules: { 'no-undef': 'off' },
});

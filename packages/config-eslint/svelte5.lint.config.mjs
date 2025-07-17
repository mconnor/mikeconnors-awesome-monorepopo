import * as svelteParser from 'svelte-eslint-parser';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
// import ignoresConfig from './ignores.config.mjs';
import tseslint from 'typescript-eslint';

import extensionInstanceObj from './fileExtensions.mjs';
const extraFileExtensions = extensionInstanceObj.getExtensions();

/**
 * A custom ESLint configuration for libraries that use React.
 * Use this and only this script to lint react packages
 *
 * @type {import("eslint").Linter.Config} */
export default tseslint.config({
  extends: [...svelte.configs.recommended, ...svelte.configs.prettier],
  files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],

  languageOptions: {
    parser: svelteParser,
    parserOptions: {
      parser: tseslint.parser,
      extraFileExtensions,
    },
  },
  rules: { 'no-undef': 'off' },
});

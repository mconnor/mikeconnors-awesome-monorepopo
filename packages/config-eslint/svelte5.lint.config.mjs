// @ts-check
import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import * as svelteParser from 'svelte-eslint-parser';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

import tseslint from 'typescript-eslint';
import ignoresConfig from './ignores.config.mjs';
const extraFileExtensions = ['.svelte', '.astro', '.md', '.mdx'];

export default tseslint.config({
  extends: [
    ...svelte.configs['flat/recommended'],
    ...svelte.configs['flat/prettier'],
  ],
  files: ['**/*.svelte'],

  languageOptions: {
    parser: svelteParser,
    parserOptions: {
      parser: tseslint.parser,
      extraFileExtensions,
    },
  },
});

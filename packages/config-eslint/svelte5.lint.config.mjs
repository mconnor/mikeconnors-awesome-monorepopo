// @ts-check

import js from '@eslint/js';

import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

import tseslint from 'typescript-eslint';
import ignoresConfig from './ignores.config.mjs';

export default tseslint.config(
  ignoresConfig,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...svelte.configs['flat/recommended'],

  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.svelte'],

    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
);

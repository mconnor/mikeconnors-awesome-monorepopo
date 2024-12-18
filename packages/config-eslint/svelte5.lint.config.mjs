// @ts-check
import prettier from 'eslint-config-prettier';
import js from '@eslint/js';

import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

import ts from 'typescript-eslint';
import ignoresConfig from './ignores.config.mjs';

export default ts.config(
  ignoresConfig,
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
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
        parser: ts.parser,
      },
    },
  },
);

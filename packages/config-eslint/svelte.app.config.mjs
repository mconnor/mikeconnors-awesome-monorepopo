import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';
import ignoresConfig from './ignores.config.mjs';

export default ts.config(
  ...svelte.configs['flat/recommended'],

  ...svelte.configs['flat/prettier'],

  {
    files: ['**/*.svelte'],

    languageOptions: {
      parserOptions: {
        parser: ts.parser,
        extraFileExtensions: ['.svelte'],
      },
    },
  },
);

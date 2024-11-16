import eslintPluginSvelte from 'eslint-plugin-svelte';
import js from '@eslint/js';
import ts from 'typescript-eslint';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  {
    rules: {
      // override/add rules settings here, such as:
      // 'svelte/rule-name': 'error'
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
  {
    ignores: ['build/', '.svelte-kit/', 'dist/'],
  },
];

// @ts-check

import sveltePlugin from 'eslint-plugin-svelte';

// import js from '@eslint/js';
import ts from 'typescript-eslint';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...sveltePlugin.configs['flat/recommended'],
  {
    files: ['**/*.svelte'],

    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  {
    ignores: ['.turbo', 'build/', '.svelte-kit/', 'dist/'],
  },
];

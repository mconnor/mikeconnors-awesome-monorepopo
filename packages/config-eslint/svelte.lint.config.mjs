import sveltePlugin from 'eslint-plugin-svelte';

// import js from '@eslint/js';
import ts from 'typescript-eslint';
// import preactLintConfig from '#preact.lint.config.mjs';
import prettierConfig from 'eslint-plugin-prettier/recommended';
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
    ignores: ['build/', '.svelte-kit/', 'dist/'],
  },
  prettierConfig,
];

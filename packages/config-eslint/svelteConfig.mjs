import eslintPluginSvelte from 'eslint-plugin-svelte';
// import js from '@eslint/js';
// import tseslint from 'typescript-eslint';

export default [
  {
    files: ['*.svelte'],
    ...eslintPluginSvelte.configs['flat/recommended'],
    rules: {
      // override/add rules settings here, such as:
      // 'svelte/rule-name': 'error'
    },
  },
];

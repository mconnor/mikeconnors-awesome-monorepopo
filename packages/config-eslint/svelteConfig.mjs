import eslintPluginSvelte from 'eslint-plugin-svelte';
// import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],

  {
    files: ['**/*.svelte'],
    extends: [tseslint.configs.disableTypeChecked],
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        projectService: true,
        // extraFileExtensions,
      },
    },
  },
  {
    rules: {
      // override/add rules settings here, such as:
      // 'svelte/rule-name': 'error'
    },
  },
);

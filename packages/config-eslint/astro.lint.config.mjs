// @ts-check
import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import ignoresConfig from './ignores.config.mjs';

export default tseslint.config(
  ignoresConfig,

  // Global config
  // JavaScript
  eslint.configs.recommended,
  // TypeScript
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  // Allow triple-slash references in `*.d.ts` files.
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },

  // Astro
  ...eslintPluginAstro.configs.recommended,

  // Set globals for Node scripts.
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        // ...globals.nodeBuiltin,
        // ...globals.worker,
        // JSX: true,
        // ...globals.node,
      },
    },
  },
);

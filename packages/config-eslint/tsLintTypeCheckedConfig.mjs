// @ts-check
import js from '@eslint/js';
// import wc from 'eslint-plugin-wc';
import tseslint from 'typescript-eslint';

import globals from 'globals';
import ignoresConfig from './ignores.config.mjs';
import prettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
// import turboConfig from './turbo.config.mjs';

const config = tseslint.config(
  { ...ignoresConfig },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: false,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        // ...globals.nodeBuiltin,
        JSX: true,
        // ...globals.node,
      },
    },
  },

  {
    files: ['**/*.d.ts'],
    rules: {
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },

  prettier
);

export default config;

import js from '@eslint/js';
// import wc from 'eslint-plugin-wc';
import tseslint from 'typescript-eslint';

import globals from 'globals';
import ignoresConfig from './ignores.config.mjs';
// import prettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier/recommended';
import simpleImportSort from './simple.imports.config.mjs';

const config = tseslint.config(
  ignoresConfig,
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        projectService: true, //indicates to ask TypeScript's type checking service for each source file's type
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
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true, // Allow short-circuit expressions like `a && a()`
          allowTernary: true, // Allow ternary operations like `a ? b() : c()`
          allowTaggedTemplates: true, // Allow tagged template literals like `taggedTemplate` (optional)
        },
      ],
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  ...simpleImportSort,
  prettier,
);

export default config;

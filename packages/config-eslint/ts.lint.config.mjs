import js from '@eslint/js';
// import wc from 'eslint-plugin-wc';
import tseslint from 'typescript-eslint';

import globals from 'globals';
import ignoresConfig from './ignores.config.mjs';
// import prettier from 'eslint-config-prettier';
import prettierConfig from 'eslint-plugin-prettier/recommended';

import simpleImportSort from './simple.imports.config.mjs';

const config = tseslint.config(
  ignoresConfig,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
        JSX: true,
        // ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true, // Allow short-circuit expressions like `a && a()`
          allowTernary: true, // Allow ternary operations like `a ? b() : c()`
          allowTaggedTemplates: true, // Allow tagged template literals like `taggedTemplate` (optional)
        },
      ],
      '@typescript-eslint/no-empty-function': 'off',
    },
  },

  ...simpleImportSort,
  prettierConfig,
);

export default config;

// @ts-check

import js from '@eslint/js';
// import wc from 'eslint-plugin-wc';
import tseslint from 'typescript-eslint';
// import turboPlugin from 'eslint-plugin-turbo';
// import onlyWarn from 'eslint-plugin-only-warn';
import globals from 'globals';
import ignoresConfig from './ignores.config.mjs';

export default tseslint.config(
  ignoresConfig,
  js.configs.recommended,

  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  // {
  //   plugins: {
  //     turbo: turboPlugin,
  //   },
  //   rules: {
  //     'turbo/no-undeclared-env-vars': 'warn',
  //   },
  // },

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
        ...globals.worker,
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
);

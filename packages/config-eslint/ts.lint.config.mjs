// @ts-check

import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
// import wc from 'eslint-plugin-wc';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';

// import turboPlugin from 'eslint-plugin-turbo';
// import onlyWarn from 'eslint-plugin-only-warn';
import globals from 'globals';
import ignoresConfig from './ignores.config.mjs';
// import extraFileExtensionsSinglton from './fileExtensions.mjs';

const extraFileExtensions = ['.svelte', '.astro', '.md', '.mdx', 'vue'];

export default tseslint.config(
  ignoresConfig,
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintPluginAstro.configs.recommended,

  // Astro

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
      parserOptions: {
        sourceType: 'module',
        parser: tsParser,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions,
      },
      globals: {
        ...globals.browser,
        // ...globals.nodeBuiltin,
        // ...globals.worker,
        // JSX: true,
        // ...globals.node,
      },
    },
    rules: {
      'no-unused-expressions': 'off',
      '@typescript-eslint/triple-slash-reference': 'warn',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true, // Allow short-circuit expressions like `a && a()`
          allowTernary: true, // Allow ternary operations like `a ? b() : c()`
          allowTaggedTemplates: true, // Allow tagged template literals like `taggedTemplate` (optional)
        },
      ],
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      '@typescript-eslint/no-misused-promises': 'warn',
    },
  },

  // {
  //   files: ['**/*.astro'],
  //   extends: [tseslint.configs.disableTypeChecked],

  //   languageOptions: {
  //     parser: eslintPluginAstro.parser,
  //     parserOptions: {
  //       project: false,
  //       tsconfigRootDir: import.meta.dirname,
  //       extraFileExtensions,
  //     },
  //   },
  // },
  // {
  //   files: ['**/*.astro'],
  //   extends: [
  //     tseslint.configs.disableTypeChecked,
  //     ...eslintPluginAstro.configs.recommended,
  //   ],
  // },

  {
    files: ['**/*.astro'],
    extends: [tseslint.configs.disableTypeChecked],

    languageOptions: {
      parserOptions: {
        extraFileExtensions,
        projectService: false,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  // ,
  // {
  //   files: ['**/*.ts'],
  //   extends: [
  //     tseslint.configs.recommendedTypeChecked,
  //     tseslint.configs.stylisticTypeChecked,
  //   ],
  //   rules: {
  //     '@typescript-eslint/triple-slash-reference': 'warn',
  //     '@typescript-eslint/array-type': 'error',
  //     '@typescript-eslint/consistent-type-imports': 'error',
  //     '@typescript-eslint/no-unused-expressions': [
  //       'error',
  //       {
  //         allowShortCircuit: true, // Allow short-circuit expressions like `a && a()`
  //         allowTernary: true, // Allow ternary operations like `a ? b() : c()`
  //         allowTaggedTemplates: true, // Allow tagged template literals like `taggedTemplate` (optional)
  //       },
  //     ],
  //     '@typescript-eslint/no-empty-function': 'warn',
  //   },
  // }
);

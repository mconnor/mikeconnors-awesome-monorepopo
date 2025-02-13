// @ts-check
import js from '@eslint/js';

import eslintPluginAstro from 'eslint-plugin-astro';
// import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
// import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
// import onlyWarn from 'eslint-plugin-only-warn';
import astroParser from 'astro-eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import ignoresConfig from './ignores.config.mjs';

const extraFileExtensions = ['.svelte', '.astro', '.md', '.mdx'];

export default tseslint.config(
  ignoresConfig,
  // ...turboConfig['flat/recommended'],
  // ...turboConfig,
  // Global config
  // JavaScript
  js.configs.recommended,
  // comments.recommended,
  // TypeScript
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,

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
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions,
      },
      globals: {
        ...globals.browser,
        // ...globals.nodeBuiltin,
        // ...globals.worker,
        JSX: true,
        // ...globals.node,
      },
    },
    rules: {
      'capitalized-comments': 'off',
      '@typescript-eslint/no-unsafe-call': 'warn',
      // 'no-unused-expressions': 'off',
      // '@typescript-eslint/array-type': 'error',
      // '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',

      // '@typescript-eslint/no-unused-vars': [
      //   'warn',
      //   {
      //     args: 'all',
      //     argsIgnorePattern: '^_',
      //     caughtErrors: 'all',
      //     caughtErrorsIgnorePattern: '^_',
      //     destructuredArrayIgnorePattern: '^_',
      //     varsIgnorePattern: '^_',
      //     ignoreRestSiblings: true,
      //   },
      // ],
      // '@typescript-eslint/no-unused-expressions': [
      //   'error',
      //   {
      //     allowShortCircuit: true, // Allow short-circuit expressions like `a && a()`
      //     allowTernary: true, // Allow ternary operations like `a ? b() : c()`
      //     allowTaggedTemplates: true, // Allow tagged template literals like `taggedTemplate` (optional)
      //   },
      // ],
      // '@typescript-eslint/no-empty-function': 'warn',
      // '@typescript-eslint/restrict-template-expressions': 'warn',
      // '@typescript-eslint/no-misused-promises': 'warn',
    },
  },

  {
    files: ['**/*.astro'],
    extends: [
      eslintPluginAstro.configs.recommended,
      tseslint.configs.disableTypeChecked,
    ],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        allowDefaultProject: ['*.astro'],
        JSX: false,
        tsconfigRootDir: import.meta.dirname,
        // project: [
        //   '../apps/*/tsconfig.json',
        //   '../packages/*/tsconfig.json',
        //   '../packages/ui-components/*tsconfig.json',
        // ],
        extraFileExtensions,
      },
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['**/actions/*.ts'],
    rules: {
      '@typescript-eslint/no-misused-promises': 'off',
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
  // {
  //   plugins: {
  //     turboPlugin,
  //   },
  //   rules: {
  //     'turbo/no-undeclared-env-vars': 'error',
  //   },
  // },
  eslintConfigPrettier,
);

// export default [
//   turboConfig['flat/recommended'],
//   ...tsConfig,
//   // Other configuration
//   {
//     rules: {
//       'turbo/no-undeclared-env-vars': [
//         'error',
//         {
//           allowList: ['^ENV_[A-Z]+$'],
//         },
//       ],
//     },
//   },
// ];

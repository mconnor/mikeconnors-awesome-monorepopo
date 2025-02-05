// @ts-check
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
// import onlyWarn from 'eslint-plugin-only-warn';
import astroParser from 'astro-eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import ignoresConfig from './ignores.config.mjs';
const extraFileExtensions = ['.astro'];

export default tseslint.config(
  ignoresConfig,
  // Global config
  // JavaScript
  js.configs.recommended,

  // TypeScript
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

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
      parser: tsParser,
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
      // 'no-unused-expressions': 'off',
      // '@typescript-eslint/array-type': 'error',
      // '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true, // Allow short-circuit expressions like `a && a()`
          allowTernary: true, // Allow ternary operations like `a ? b() : c()`
          allowTaggedTemplates: true, // Allow tagged template literals like `taggedTemplate` (optional)
        },
      ],
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
        parser: tsParser,
        allowDefaultProject: ['*.astro'],
        JSX: false,
        // tsconfigRootDir: import.meta.dirname,
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
  eslintConfigPrettier,
);

import 'eslint-plugin-only-warn';
import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import astroParser from 'astro-eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import globals from 'globals';
import ignoresConfig from './ignores.config.mjs';
import extensionInstanceObj from './fileExtensions.mjs';
import * as regexpPlugin from 'eslint-plugin-regexp';

const extraFileExtensions = extensionInstanceObj.getExtensions();

/** @type {import("eslint").Linter.Config} */
export default tseslint.config(
  ignoresConfig,
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  regexpPlugin.configs['flat/recommended'],
  {
    name: '[*] TS Rules',
    languageOptions: {
      ecmaVersion: 'latest',
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
        projectService: {
          allowDefaultProject: ['*.js'],
        },
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'capitalized-comments': 'off',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/consistent-type-definitions': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/array-type': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
    },
  },

  {
    name: '[*] Astro Files',
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
        ecmaFeatures: {
          jsx: false,
        },
        extraFileExtensions,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  {
    name: '[*] Type Definition Files',
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-definitions': 'warn',
    },
  },

  {
    name: '[*] Action Files',
    files: ['**/actions/*.ts'],
    rules: {
      '@typescript-eslint/no-misused-promises': 'warn',
    },
  },

  {
    name: '[*] JavaScript Files',
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  eslintConfigPrettier,
);

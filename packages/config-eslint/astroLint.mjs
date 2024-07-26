// @ts-check
// import astroEslintParser from 'astro-eslint-parser';

import astro from 'eslint-plugin-astro';
import markdown from 'eslint-plugin-markdown';
import regexp from 'eslint-plugin-regexp';
import wc from 'eslint-plugin-wc';
import lit from 'eslint-plugin-lit';

import basic from './index.mjs';
// import jsxA11y from 'eslint-plugin-jsx-a11y';

import eslintConfigPrettier from 'eslint-config-prettier';
import * as globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...basic,
  //   js.configs.recommended,
  //   ...tseslint.configs.recommended,
  //   ...tseslint.configs.stylistic,
  //If your project enables typed linting, we suggest enabling the recommended-type-checked
  // and stylistic-type-checked configurations to start:
  // ...tseslint.configs.recommendedTypeChecked,
  // ...tseslint.configs.stylisticTypeChecked,

  ...astro.configs.recommended,
  // jsxA11y.flatConfigs.recommended,
  // ...markdown.configs.recommended,

  regexp.configs['flat/recommended'],
  wc.configs['flat/recommended'],
  lit.configs['flat/recommended'],

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: true,

        // For example, if you use a specific tsconfig.eslint.json for linting, you'd specify:
        // tsconfigRootDir: import.meta.dirname,

        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        // ...globals.node,
      },
    },
  },
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      'lit/no-invalid-html': 'warn',
    },
  },

  {
    files: ['**/*.js', '**/*.mjs'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    files: [
      'scr/web-components/**/*.js',
      'src/astro-custom-layout-components/**/*.js',
    ],
    ...tseslint.configs.disableTypeChecked,
    rules: {
      'wc/no-constructor-attributes': 'off',
    },
  },

  {
    plugins: {
      markdown,
      // jsxA11y,
    },
  },
  // {
  //   files: ['**/*.md'],
  //   processor: 'markdown/markdown',
  // },
  {
    files: ['**/*.md/*.js'],
    ...tseslint.configs.disableTypeChecked,
    // ...
    rules: {
      'no-console': 'off',
      'import/no-unresolved': 'off',
    },
  },

  {
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
  },

  {
    ignores: [
      '**/_*.*',
      '**/temp.js',
      '*lock.yaml',
      '.astro/',
      'dist/',
      'my-custom-cache-directory',
      'src/env.d.ts',
      '.vercel/',
    ],
  },
  eslintConfigPrettier,
);

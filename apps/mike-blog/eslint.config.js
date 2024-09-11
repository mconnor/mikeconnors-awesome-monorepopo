// @ts-check
import astroParser from 'astro-eslint-parser';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';

import markdown from 'eslint-plugin-markdown';
import regexp from 'eslint-plugin-regexp';
import wc from 'eslint-plugin-wc';
import lit from 'eslint-plugin-lit';

const config = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...astro.configs.recommended,
  regexp.configs['flat/recommended'],
  wc.configs['flat/recommended'],
  lit.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.astro'],

    languageOptions: {
      parser: astroParser,
      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: tseslint.parser,
        project: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
    },
  },

  {
    files: ['**/*js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    files: [
      'src/custom-layout-components/astro-wc/**/*js',
      'src/custom-layout-components/lit-wc/**/*js',
    ],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      'no-unused-expressions': 'off',
      'wc/no-constructor-attributes': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  {
    files: ['src/schemas/**/*.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
    },
  },

  {
    plugins: {
      markdown,
    },
  },
  {
    files: ['**/*.md/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      'no-console': 'warn',
      'import/no-unresolved': 'warn',
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
  },
);

export default [
  {
    ignores: [
      'stylelint.config.mjs',
      'dist',
      '.astro',
      '*.cjs',
      '*rss.xml.js',
      'src/env.d.ts',
      'src/components/_Hamburger.astro',
      'cache-directory/',
      '*.d.ts',
      '**/temp.js',
      '*lock.yaml',
      '.vercel/',
      ' test/',
    ],
  },
  ...config,
  eslintConfigPrettier,
];

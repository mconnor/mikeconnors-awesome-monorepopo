// @ts-check
// import astroEslintParser from 'astro-eslint-parser';
import astroParser from 'astro-eslint-parser';
import astroPlugin from 'eslint-plugin-astro';
import markdown from 'eslint-plugin-markdown';
import regexp from 'eslint-plugin-regexp';
import wc from 'eslint-plugin-wc';
import lit from 'eslint-plugin-lit';
// import jsxA11y from 'eslint-plugin-jsx-a11y';

import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

const astroLintConfig = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylistic,
  //If your project enables typed linting, we suggest enabling the recommended-type-checked
  // and stylistic-type-checked configurations to start:
  // ...tseslint.configs.recommendedTypeChecked,
  // ...tseslint.configs.stylisticTypeChecked,

  ...astroPlugin.configs.recommended,
  // jsxA11y.flatConfigs.recommended,
  // ...markdown.configs.recommended,

  regexp.configs['flat/recommended'],
  wc.configs['flat/recommended'],
  lit.configs['flat/recommended'],

  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        projectFolderIgnoreList: ['**/node_modules/**', '**/dist', '**/.turbo'],
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
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

  // {
  //   files: ['src/**/*.astro'],
  //   ...tseslint.configs.disableTypeChecked,

  //   languageOptions: {
  //     parser: astroParser,
  //   },

  //   rules: {
  //     '@typescript-eslint/no-unused-vars': 'off',
  //   },
  // },

  {
    files: ['**/*.astro'],

    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  // {
  //   files: ['**/*.js'],
  //   ...tseslint.configs.disableTypeChecked,
  //   rules: {
  //     'wc/no-constructor-attributes': 'off',
  //     '@typescript-eslint/no-unused-expressions': 'off',
  //     '@typescript-eslint/no-unsafe-call': 'warn',
  //     '@typescript-eslint/no-unsafe-member-access': 'warn',
  //     '@typescript-eslint/restrict-template-expressions': 'warn',
  //   },
  // },

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
  // {
  //   files: ['**/*.md/*.js'],
  //   ...tseslint.configs.disableTypeChecked,
  //   // ...
  //   rules: {
  //     'no-console': 'off',
  //     'import/no-unresolved': 'off',
  //   },
  // },

  {
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
  },

  {
    ignores: [
      '**/temp.js',
      'dist/',
      '**/*.d.ts',
      '*.config.js',
      '*.config.mjs',
    ],
  },
  eslintConfigPrettier,
);

export default astroLintConfig;

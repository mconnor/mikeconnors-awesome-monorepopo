// @ts-check
import path from 'node:path';

import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

const tsLintConfig = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      parser: tseslint.parser,

      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  {
    files: ['**/*.js', '**/*.mjs'],
    ...tseslint.configs.disableTypeChecked,
    rules: {
      'wc/no-constructor-attributes': 'off',
    },
  },
  {
    ignores: [
      '*.config.*',
      '.turbo',
      '**/temp.js',
      '**/*.d.ts',
      '**/_*.*',
      '**/temp.js',
      'dist/',
      'my-custom-cache-directory',
    ],
  },
  eslintConfigPrettier,
);

export default tsLintConfig;

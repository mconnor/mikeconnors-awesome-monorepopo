// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier';
import * as globals from 'globals';

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

const tsLintConfig = tseslint.config(
  js.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },

      globals: {
        ...globals.browser,
        // ...globals.node,
      },
    },
  },

  {
    files: ['**/*.js', '**/*.mjs'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    ignores: [
      '*.config.*',
      'turbo',
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

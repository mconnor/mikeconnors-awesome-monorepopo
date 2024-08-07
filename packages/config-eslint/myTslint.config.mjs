// @ts-check

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
const myTsLint = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  // ...tseslint.configs.recommendedTypeChecked
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        projectFolderIgnoreList: ['**/node_modules/**', '**/dist', '**/.turbo'],
        // ecmaFeatures: {
        //   jsx: true,
        // },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    ignores: ['dist', '.turbo'],
  },
  eslintConfigPrettier,
);

export default myTsLint;

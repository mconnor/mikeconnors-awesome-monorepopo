// @ts-check

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

const tslintTypeCheckedConfig = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        parserServices: true,
        tsconfigRootDir: import.meta.dirname,
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
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    ignores: ['dist', '.vercel/', 'cache-directory'],
  },
);

export default tslintTypeCheckedConfig;

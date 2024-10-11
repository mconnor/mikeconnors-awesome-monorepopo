// @ts-check

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import ignoresConfig from './ignores.config.mjs';

export default tseslint.config(
  {
    ...ignoresConfig,
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parser: tseslint.parser,

      parserOptions: {
        // parserServices: true,
        projectService: true,
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
);

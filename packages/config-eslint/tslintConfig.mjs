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
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        // parserServices: true,
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

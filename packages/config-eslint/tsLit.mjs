// @ts-check

import wc from 'eslint-plugin-wc';

import lit from 'eslint-plugin-lit';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const tsLitConfig = tseslint.config(
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      wc,
      lit,
    },
  },
  {
    rules: {
      '@typescript-eslint/unbound-method': 'warn',
    },
  },
);

export default tsLitConfig;

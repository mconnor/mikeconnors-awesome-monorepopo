// @ts-check

import tseslint from 'typescript-eslint';
import astroParser from 'astro-eslint-parser';
import astro from 'eslint-plugin-astro';

export default tseslint.config(
  ...astro.configs.recommended,
  {
    files: ['**/*.astro'],
    extends: [tseslint.configs.disableTypeChecked],

    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        projectService: true,

        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  {
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },

  {
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
  },
);

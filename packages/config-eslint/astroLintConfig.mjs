// @ts-check

import tseslint from 'typescript-eslint';
import astroParser from 'astro-eslint-parser';
import astro from 'eslint-plugin-astro';

const extraFileExtensions = ['.astro'];

export default tseslint.config(
  ...astro.configs.recommended,
  {
    files: ['**/*.astro'],

    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        parserServices: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions,
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

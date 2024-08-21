// @ts-check
// import astroEslintParser from 'astro-eslint-parser';
import astroParser from 'astro-eslint-parser';

import tseslint from 'typescript-eslint';

import myTslintConfig from './myTslintConfig.mjs';
const extraFileExtensions = ['.astro'];

const astroConfig = tseslint.config(
  ...myTslintConfig,
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
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
  },

  {
    ignores: ['**/temp.js', 'dist/', '**/*.d.ts'],
  },
);

export default astroConfig;

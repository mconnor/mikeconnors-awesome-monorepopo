// @ts-check
// import astroEslintParser from 'astro-eslint-parser';
import astroParser from 'astro-eslint-parser';
import tseslint from 'typescript-eslint';
import myTslintConfig from './myTslintConfig.mjs';
import astro from 'eslint-plugin-astro';

const extraFileExtensions = ['.astro'];

const astroConfig = tseslint.config(
  ...myTslintConfig,
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
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
  },

  {
    ignores: [
      '**/temp.js',
      'dist/',
      '**/*.d.ts',
      '.vercel/',
      '.astro',
      'cache-directory',
    ],
  },
);

export default astroConfig;

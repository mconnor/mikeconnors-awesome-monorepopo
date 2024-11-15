// @ts-check
import tseslint from 'typescript-eslint';

import astroParser from 'astro-eslint-parser';
import astroPlugin from 'eslint-plugin-astro';

export default tseslint.config({
  files: ['src/**/*.astro'],
  extends: [ ...astroPlugin.configs.recommended],
  // processor: astroPlugin.processors['client-side-ts'],
  languageOptions: {
    parser: astroParser,
    parserOptions: {
      project: true,
      // parser: tseslint.parser,
      ecmaFeatures: {
        globalReturn: false,
        impliedStrict: false,
        jsx: false,
      },
      extraFileExtensions: [".astro"],
    },
  },
});

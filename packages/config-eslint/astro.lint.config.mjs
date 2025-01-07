// @ts-check

import tseslint from 'typescript-eslint';

import * as astroParser from 'astro-eslint-parser';
import astroPlugin from 'eslint-plugin-astro';

export default tseslint.config({
  files: ['**/*.astro'],
  extends: [
    ...astroPlugin.configs['flat/recommended'],
    tseslint.configs.disableTypeChecked,
  ],
  processor: astroPlugin.processors['client-side-ts'],
  languageOptions: {
    parser: astroParser,
    parserOptions: {
      extraFileExtensions: ['.astro'],
      parser: tseslint.parser,
      impliedStrict: false,
      jsx: false,
    },
  },
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
  },
});

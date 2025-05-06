// @ts-check
import { defineConfig } from 'eslint/config';
import css from '@eslint/css';
import { tailwindSyntax } from '@eslint/css/syntax';

export default defineConfig([
  {
    files: ['**/*.css'],
    plugins: {
      css,
    },
    language: 'css/css',
    languageOptions: {
      customSyntax: tailwindSyntax,
      tolerant: true,
    },
    rules: {
      'css/no-empty-blocks': 'error',
      'no-irregular-whitespace': 'off', // <-- disable for CSS
    },
  },
]);

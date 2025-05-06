import { defineConfig } from 'eslint/config';
import css from '@eslint/css';

export default defineConfig([
  // lint CSS files
  {
    files: ['**/*.css'],
    language: 'css/css',
    plugins: { css },
    extends: ['css/recommended'],
  },

  // your other configs here
]);

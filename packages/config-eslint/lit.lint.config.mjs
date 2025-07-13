import { configs as lit } from 'eslint-plugin-lit';
import { configs as wc } from 'eslint-plugin-wc';
import { defineConfig, globalIgnores } from 'eslint/config';

/** @type {import("eslint").Linter.Config} */
export default defineConfig([
  lit['flat/recommended'],
  wc['flat/recommended'],
  {
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  },
]);

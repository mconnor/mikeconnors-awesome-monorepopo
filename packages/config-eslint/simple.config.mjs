// @ts-check
import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import { ignoreList } from './ignores.config.mjs';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  globalIgnores(ignoreList),
  // apply recommended rules to JS files with an override
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
    },
  },
  eslintConfigPrettier,
]);

import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import { ignoreList } from './ignores.config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

@type {import("eslint").Linter.Config}
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

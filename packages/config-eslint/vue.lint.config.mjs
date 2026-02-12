// @ts-check

import pluginVue from 'eslint-plugin-vue';
import ignoresConfig from './ignores.config.mjs';
import vueParser from 'vue-eslint-parser';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import extensionInstanceObj from './fileExtensions.mjs';
const extraFileExtensions = extensionInstanceObj.getExtensions();

export default defineConfig(
  ignoresConfig,
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...pluginVue.configs['flat/recommended'],
    ],
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals['shared-node-browser'],
      },

      parser: vueParser,
      parserOptions: {
        projectService: true,
        parser: tseslint.parser,
        extraFileExtensions,
      },
    },
    rules: {
      // your rules
    },
  },
  eslintConfigPrettier,
);

// @ts-check

import pluginVue from 'eslint-plugin-vue';
import ignoresConfig from './ignores.config.mjs';
import vueParser from 'vue-eslint-parser';

import eslintConfigPrettier from 'eslint-config-prettier';

import globals from 'globals';
import tseslint from 'typescript-eslint';
import extensionInstanceObj from './fileExtensions.mjs';
const extraFileExtensions = extensionInstanceObj.getExtensions();

export default tseslint.config(
  ignoresConfig,
  {
    extends: [
      //   eslint.configs.recommended,
      //   ...typescriptEslint.configs.recommended,
      ...pluginVue.configs['flat/recommended'],
    ],
    files: ['**/*.vue'],
    languageOptions: {
      //   ecmaVersion: 'latest',
      //   sourceType: 'module',
      globals: {
        ...globals.browser,
        // ...globals.nodeBuiltin,
        // ...globals.worker,
        // JSX: false,
        // ...globals.node,
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

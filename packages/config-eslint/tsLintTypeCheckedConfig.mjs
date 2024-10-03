// @ts-check

import url from 'node:url';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import ignoresConfig from './ignores.config.mjs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const tslintTypeCheckedConfig = tseslint.config(
  {
    ...ignoresConfig,
  },
  // extends ...
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      // parser: '@typescript-eslint/parser',
      parserOptions: {
        // The project service will automatically find the closest tsconfig.json for each file (like project: true). It also allows enabling typed linting for files not explicitly included in a tsconfig.json. This should remove the need for custom tsconfig.eslint.json files to lint files like eslint.config.mjs!
        projectService: true,
        tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: false,
        // ecmaFeatures: {
        //   jsx: true,
        // },
      },
      globals: {
        ...globals.es2020,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
);

export default tslintTypeCheckedConfig;

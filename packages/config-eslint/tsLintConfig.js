// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier';
import * as globals from 'globals';

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

const tsLintConfig = tseslint.config(
  js.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,

      globals: {
        ...globals.browser,
        // ...globals.node,
      },
    },
  },

  {
    files: ['**/*.js', '**/*.mjs'],
    ...tseslint.configs.disableTypeChecked,
  },
  eslintConfigPrettier,
);

export default tsLintConfig;

import eslintPluginSvelte from 'eslint-plugin-svelte';

import ts from 'typescript-eslint';
import tsLintConfig from './ts.lint.config.mjs';
// import disable from 'eslint-disable';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */

export default ts.config(
  ...tsLintConfig,

  {
    files: ['**/*.svelte'],

    languageOptions: {
      parserOptions: {
        parser: ts.parser,
        extraFileExtensions: ['.svelte'],
      },
    },
  },
);

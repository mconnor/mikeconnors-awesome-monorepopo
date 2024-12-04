import eslintPluginSvelte from 'eslint-plugin-svelte';

import ts from 'typescript-eslint';
import tsLintConfig from './ts.lint.config.mjs';
// import disable from 'eslint-disable';

export default ts.config(
  ...tsLintConfig,

  {
    files: ['**/*.svelte'],
    ...eslintPluginSvelte.configs['flat/recommended'],
    // ...eslintPluginSvelte.configs['flat/prettier'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
        extraFileExtensions: ['.svelte'],
      },
    },
  },
);

// export default [
//   ...ts,
//   ...svelte.configs['flat/recommended'],
//   ...svelte.configs['flat/prettier'],
// ];

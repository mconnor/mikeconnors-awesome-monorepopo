// @ts-check

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

const tslintConfig = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        parserServices: true,
        tsconfigRootDir: import.meta.dirname,
        // ecmaFeatures: {
        //   jsx: true,
        // },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    ignores: ['dist', '.vercel/', 'cache-directory'],
  },
);

// const myTslintTypeCheckedConfig = tseslint.config(
//   js.configs.recommended,
//   ...recommendedTypeChecked,
//   {
//     languageOptions: {
//       parser: tseslint.parser,
//       parserOptions: {
//         parserServices: true,
//         tsconfigRootDir: import.meta.dirname,
//         // ecmaFeatures: {
//         //   jsx: true,
//         // },
//       },
//       globals: {
//         ...globals.browser,
//         ...globals.node,
//       },
//     },
//   },
//   {
//     files: ['**/*.js'],
//     extends: [tseslint.configs.disableTypeChecked],
//   },
//   {
//     ignores: ['dist', '.vercel/', 'cache-directory'],
//   },
// );

// export  myRecTslintConfig;
// export { myTslintTypeCheckedConfig };

export default tslintConfig;

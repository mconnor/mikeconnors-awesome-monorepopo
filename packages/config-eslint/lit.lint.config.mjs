import lit from 'eslint-plugin-lit';
import wc from 'eslint-plugin-wc';

// const config = tseslint.config(
//   ...wc.configs['flat/recommended'],
//   ...lit.configs['flat/recommended'],

//   {
//     rules: {
//       '@typescript-eslint/no-unused-expressions': 'warn',
//       '@typescript-eslint/unbound-method': 'warn',
//     },
//   },
// );

/** @type {import("eslint").Linter.Config} */
const config = [
  wc.configs['flat/recommended'],
  lit.configs['flat/recommended'],
  {
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  },
];

export default config;

import wc from 'eslint-plugin-wc';
import lit from 'eslint-plugin-lit';
import { rules } from 'eslint-plugin-astro';

export default [
  wc.configs['flat/recommended'],
  lit.configs['flat/recommended'],
  {
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  },
];

// import globals from 'globals';
// import tseslint from 'typescript-eslint';

// export default tseslint.config(
//   {
//     ...wc.configs['flat/recommended'],
//     ...lit.configs['flat/recommended'],

//     rules: {
//       // '@typescript-eslint/unbound-method': 'off',
//       // '@typescript-eslint/triple-slash-reference': 'off',

//       '@typescript-eslint/unbound-method': 'off',
//       'no-unused-expressions': 'off',
//       '@typescript-eslint/no-unused-expressions': 'off',
//     },
//   },

//   // {
//   //   files: ['**/*.js', '**/*.mjs'],
//   //   extends: [tseslint.configs.disableTypeChecked],
//   //   rules: {
//   //     'no-unused-expressions': 'off',
//   //     'wc/no-constructor-attributes': 'off',
//   //     '@typescript-eslint/no-unused-expressions': 'off',
//   //   },
//   // },
//   // {
//   //   files: ['**/*.config.mjs'],
//   //   extends: [tseslint.configs.disableTypeChecked],
//   //   rules: {
//   //     '@typescript-eslint/no-unsafe-assignment': 'off',
//   //   },
//   // },
//   {
//     settings: {
//       wc: {
//         elementBaseClasses: ['LitElement'], // Recognize `LitElement` as a Custom Element base class
//       },
//     },
//   }
// );

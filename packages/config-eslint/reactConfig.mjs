// @ts-check
import react from 'eslint-plugin-react';
// import tseslint from 'typescript-eslint';
// import disableTypeChecking from './typeCheckingDisable.mjs';

// export default tseslint.config(
//   {
//     ...reactPlugin.configs.recommended,
//     ...reactPlugin.configs['recommended-with-jsx'],
//     languageOptions: {
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//     },
//     rules: {
//       'react/react-in-jsx-scope': 'off',
//       'react/no-unescaped-entities': 'off',
//     },
//   },
//   {
//     files: ['**/*.jsx'],
//     ...disableTypeChecking,
//   },
//   {
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//   },
// );

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // ... any rules you want
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
    // ... others are omitted for brevity
  },
];

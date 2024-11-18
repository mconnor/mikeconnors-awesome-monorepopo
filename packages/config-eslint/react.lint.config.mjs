import react from 'eslint-plugin-react';
// import tseslint from 'typescript-eslint';
// import disableTypeChecking from './typeCheckingDisable.mjs';

export default [
  {
    files: ['**/*.{jsx,tsx}'],
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

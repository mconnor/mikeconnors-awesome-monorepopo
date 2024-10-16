const preactPlugin = require('eslint-plugin-preact');
const globals = require('globals');

module.exports = [
  {
    files: ['**/*.{jsx,tsx}'],
    ...preactPlugin.configs.flat.recommended,
    languageOptions: {
      ...preactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
];

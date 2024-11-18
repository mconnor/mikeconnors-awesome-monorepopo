import turbo from 'eslint-plugin-turbo';
/** @type {import('eslint').Linter.Config} */
export default {
  plugins: {
    turbo,
  },
  rules: {
    ...turbo.configs.recommended.rules,
  },
  settings: {
    ...turbo.configs.recommended.settings,
  },
};

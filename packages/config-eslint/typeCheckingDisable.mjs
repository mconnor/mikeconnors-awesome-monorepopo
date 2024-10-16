import tseslint from 'typescript-eslint';

export default tseslint.config({
  files: ['**/*.js', '**/*.mjs', '**/*.jsx'],
  extends: [tseslint.configs.disableTypeChecked],
  rules: {
    '@typescript-eslint/no-unused-expressions': 'off',
  },
});

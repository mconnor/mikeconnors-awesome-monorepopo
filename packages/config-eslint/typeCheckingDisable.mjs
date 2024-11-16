import tseslint from 'typescript-eslint';

export default tseslint.config({
  files: ['**/*.js', '**/*.mjs', '**/*.jsx'],
  ...tseslint.configs.disableTypeChecked,
  rules: {
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
  },
});

import tseslint from 'typescript-eslint';

export default tseslint.config({
  files: ['**/*.js', '**/*.mjs', '**/*.jsx'],
  extends: [tseslint.configs.disableTypeChecked],
  rules: {
    // turn off other type-aware rules
    'deprecation/deprecation': 'off',
    '@typescript-eslint/internal/no-poorly-typed-ts-props': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',

    // turn off rules that don't apply to JS code
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
});

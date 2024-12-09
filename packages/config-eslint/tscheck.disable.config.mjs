// @ts-check
import tseslint from 'typescript-eslint';

export default tseslint.config({
  files: ['**/*.js', '**/*.mjs', '**/*.jsx'],
  ...tseslint.configs.disableTypeChecked,
  rules: {
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true, // Allow short-circuit expressions like `a && a()`
        allowTernary: true, // Allow ternary operations like `a ? b() : c()`
        allowTaggedTemplates: true, // Allow tagged template literals like `taggedTemplate` (optional)
      },
    ],
  },
});

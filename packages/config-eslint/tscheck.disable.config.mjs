import tseslint from 'typescript-eslint';

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config}
 * */

export default tseslint.config({
  files: ['**/*.js', '**/*.mjs', '**/*.jsx'],
  ...tseslint.configs.disableTypeChecked,
  rules: {
    // '@typescript-eslint/no-unused-expressions': [
    //   'error',
    //   {
    //     allowShortCircuit: true, // Allow short-circuit expressions like `a && a()`
    //     allowTernary: true, // Allow ternary operations like `a ? b() : c()`
    //     allowTaggedTemplates: true, // Allow tagged template literals like `taggedTemplate` (optional)
    //   },
    // ],
  },
});

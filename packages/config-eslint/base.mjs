import js from '@eslint/js';

// import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import onlyWarn from 'eslint-plugin-only-warn';
import ignoresConfig from './ignores.config.mjs';
/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  ignoresConfig,
  js.configs.recommended,

  ...tseslint.configs.recommended,
  // {
  //   plugins: {
  //     turbo: turboPlugin,
  //   },
  //   rules: {
  //     'turbo/no-undeclared-env-vars': 'warn',
  //   },
  // },
  {
    plugins: {
      onlyWarn,
    },
  },
];
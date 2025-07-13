import js from '@eslint/js';

// import turboPlugin from 'eslint-plugin-turbo';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import onlyWarn from 'eslint-plugin-only-warn';
import tseslint from 'typescript-eslint';
import ignoresConfig from './ignores.config.mjs';
/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */

export default defineConfig([
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
  eslintConfigPrettier,
]);

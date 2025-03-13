import * as regexpPlugin from 'eslint-plugin-regexp';

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default [regexpPlugin.configs['flat/recommended']];

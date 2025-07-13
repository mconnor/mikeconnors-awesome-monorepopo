import * as regexpPlugin from 'eslint-plugin-regexp';
import { defineConfig, globalIgnores } from 'eslint/config';
/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default defineConfig([regexpPlugin.configs['flat/recommended']]);

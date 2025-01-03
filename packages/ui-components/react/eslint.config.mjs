import { config } from '@repo/eslint-config/react-internal';
import eslintConfigPrettier from '@repo/eslint-config/prettier';

/** @type {import("eslint").Linter.Config} */
export default [...config, eslintConfigPrettier];

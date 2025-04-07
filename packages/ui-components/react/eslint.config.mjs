import reactConfig from '@repo/eslint-config/react-internal';
import tsLint from '@repo/eslint-config/ts-lint';
/** @type {import("eslint").Linter.Config} */
export default [...tsLint, ...reactConfig];

import nextConfig from "@repo/eslint-config/next-config";

import tsLint from "@repo/eslint-config/ts-lint-type-check";

/** @type {import('eslint').Linter.Config[]} */
const config = [...tsLint, ...nextConfig];

export default config;

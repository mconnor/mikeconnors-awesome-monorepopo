// @ts-check
import astroConfig from "@repo/eslint-config/astro";
import tsLint from "@repo/eslint-config/ts-lint-type-check";

export default [
  ...tsLint,
  ...astroConfig,

  {
    rules: {
      "no-useless-escape": "warn",
    },
  },
];

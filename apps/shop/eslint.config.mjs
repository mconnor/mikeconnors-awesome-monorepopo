import tsLint from "@repo/eslint-config/ts-lint-type-check";
import astroConfig from "@repo/eslint-config/astro";

export default [
  ...tsLint,
  ...astroConfig,

  {
    rules: {
      "no-useless-escape": "warn",
    },
  },
];

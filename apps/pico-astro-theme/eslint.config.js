// import tsLint from "@repo/eslint-config/ts-lint";
import tsLint from "@repo/eslint-config/ts-lint-type-check";
import astroConfig from "@repo/eslint-config/astro";
import reactConfig from "@repo/eslint-config/react";
import prettierConfig from "@repo/eslint-config/prettier";

export default [...tsLint, ...astroConfig, ...reactConfig, prettierConfig];

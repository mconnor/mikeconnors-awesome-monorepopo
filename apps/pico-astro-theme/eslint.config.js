import astroConfig from "@repo/eslint-config/astro";
import reactConfig from "@repo/eslint-config/react";

import eslintConfigPrettier from "@repo/eslint-config/prettier";

export default [
  ...astroConfig,
  ...reactConfig,
  eslintConfigPrettier,
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  {
    ignores: [".prettierrc", ".vercel/"],
  },
];

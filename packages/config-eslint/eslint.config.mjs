// @ts-check
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
// import turbo from "eslint-config-turbo";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  // ...turbo,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        project: true,
      },
      globals: {
        ...globals.browser,
        // ...globals.node,
      },
    },
  },

  {
    files: ["**/*.js", "**/*.mjs"],
    ...tseslint.configs.disableTypeChecked,
  },
  eslintConfigPrettier
);

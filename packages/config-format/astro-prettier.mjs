import astro from "prettier-plugin-astro";
import MyPrettier from "index.mjs";

export default {
  plugins: [astro],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  ...MyPrettier,
};

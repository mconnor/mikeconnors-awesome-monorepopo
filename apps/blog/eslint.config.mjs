import repoEslint from "@repo/config-astro-eslint";

export default [
  ...repoEslint,
  {
    ignores: [
      "**/_*.*",
      "**/temp.js",
      "*lock.yaml",
      ".turbo/",
      ".astro/",
      "dist/",
      "my-custom-cache-directory",
      "src/env.d.ts",
      ".vercel/",
    ],
  },
];

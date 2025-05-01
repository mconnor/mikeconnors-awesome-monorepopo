// .prettierrc.mjs
/** @type {import("prettier").Config} */
const config = {
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-toml',
  ],
  tailwindStylesheet: './src/styles/global.css',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  singleQuote: true,
  experimentalTernaries: true,
};

export default config;

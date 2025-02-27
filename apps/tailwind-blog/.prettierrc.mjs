// .prettierrc.mjs
/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],

  tailwindFunctions: ['tw'],

  singleQuote: true,
  experimentalTernaries: true,
};

export default config;

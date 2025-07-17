/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  plugins: [
    '@prettier/plugin-oxc',
    'prettier-plugin-toml',
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: '**/*.{js,mjs,cjs,jsx}',
      options: {
        parser: 'oxc',
      },
    },
    {
      files: '**/*.{ts,mts,cts,tsx}',
      options: {
        parser: 'oxc-ts',
      },
    },
    {
      files: '**/*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tailwindStylesheet: './src/styles/global.css',
  singleQuote: true,
  experimentalTernaries: true,
};
export default config;

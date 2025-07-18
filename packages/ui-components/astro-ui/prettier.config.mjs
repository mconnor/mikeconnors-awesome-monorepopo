// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: [
    '@prettier/plugin-oxc',
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
  tailwindStylesheet: './src/styles.css',
  singleQuote: true,
  experimentalTernaries: true,
};

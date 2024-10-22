import tseslint from 'typescript-eslint';

import astroParser from 'astro-eslint-parser';
import astro from 'eslint-plugin-astro';

export default tseslint.config({
  files: ['**/*.astro'],
  extends: [tseslint.configs.disableTypeChecked,...astro.configs.recommended],

  languageOptions: {
    parser: astroParser,
    parserOptions: {
      parser: tseslint.parser,
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});

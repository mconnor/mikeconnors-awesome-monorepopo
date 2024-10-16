import tseslint from 'typescript-eslint';
import globals from 'globals';
import astroParser from 'astro-eslint-parser';
import astro from 'eslint-plugin-astro';

export default tseslint.config({
  files: ['src/**/*.astro'],
  extends: [...astro.configs.recommended, tseslint.configs.disableTypeChecked],

  languageOptions: {
    parser: astroParser,
    parserOptions: {
      // allowDefaultProject: ['*.js'],

      extraFileExtensions: ['.astro'],
      parser: tseslint.parser,
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});

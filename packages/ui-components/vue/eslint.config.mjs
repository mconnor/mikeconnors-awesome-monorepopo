import eslintConfigPrettier from '@repo/eslint-config/prettier';
import vue from '@repo/eslint-config/vue';

export default [
  // ...tsLint,
  ...vue,
  // ...jsonConfig,
  eslintConfigPrettier,
];

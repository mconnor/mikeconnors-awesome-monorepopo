import eslintConfigPrettier from '@repo/eslint-config/prettier';
import vue from '@repo/eslint-config/vue.lint.config';

export default [
  // ...tsLint,
  ...vue,
  // ...jsonConfig,
  eslintConfigPrettier,
];

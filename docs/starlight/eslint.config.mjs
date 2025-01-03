import astroConfig from '@repo/eslint-config/astroLint';
import markdownConfig from '@repo/eslint-config/md.lint.config';
import tsLint from '@repo/eslint-config/ts.typeChecked.lint.config';
// import jsonConfig from '@repo/eslint-config/json';
// import regexConfig from '@repo/eslint-config/regex';
import eslintConfigPrettier from '@repo/eslint-config/prettier';


export default [...tsLint, ...astroConfig, ...markdownConfig,eslintConfigPrettier];

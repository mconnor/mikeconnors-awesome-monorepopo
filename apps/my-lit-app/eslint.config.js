import astroConfig from '@repo/eslint-config/astroLintConfig';
import tsLit from '@repo/eslint-config/tsLit';
import eslintConfigPrettier from '@repo/eslint-config/eslintConfigPrettier';

export default [...astroConfig, ...tsLit, eslintConfigPrettier];

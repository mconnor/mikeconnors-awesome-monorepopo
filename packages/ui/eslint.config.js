import myTslintConfig from '@repo/eslint-config/ts-lint';
import eslintConfigPrettier from '@repo/eslint-config/prettier';

export default [...myTslintConfig, eslintConfigPrettier, { ignores: ['dist'] }];

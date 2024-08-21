import config from '@repo/eslint-config/ts-lint';
import eslintConfigPrettier from '@repo/eslint-config/prettier-config';

export default [...config, eslintConfigPrettier];

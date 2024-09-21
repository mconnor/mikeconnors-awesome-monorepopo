// @ts-check

import config from '@repo/eslint-config/astro';
import prettierConfig from '@repo/eslint-config/prettier';
import regexConfig from '@repo/eslint-config/regex-config';

export default [...config, ...regexConfig, prettierConfig];

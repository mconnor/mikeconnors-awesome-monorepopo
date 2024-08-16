import myTslintConfig from '@repo/eslint-config/myTslintConfig';

export default [...myTslintConfig, { ignores: ['dist'] }];

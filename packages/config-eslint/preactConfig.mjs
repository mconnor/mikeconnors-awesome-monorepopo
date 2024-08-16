import config from './reactConfig.mjs';
import tseslint from 'typescript-eslint';

const preactConfig = tseslint.config(...config, {
  files: ['**/*.jsx', '**/*.tsx'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': 'warn',
  },
});

export default preactConfig;

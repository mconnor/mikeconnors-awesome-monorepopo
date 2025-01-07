import preact from 'eslint-config-preact';
import ignores from '@repo/eslint-config/ignores';
// import tsLint from '@repo/eslint-config/ts-lint';
// import reactConfig from '@repo/eslint-config/react';

export default [...preact, ...ignores];

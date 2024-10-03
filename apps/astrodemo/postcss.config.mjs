import postcssJitProps from 'postcss-jit-props';
import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';
import postcssPow from 'postcss-pow';
import postcssImport from 'postcss-import';
import OpenProps from 'open-props';

export default {
  plugins: [
    postcssImport,
    postcssJitProps(OpenProps),
    postcssNesting,
    postcssPow,
    autoprefixer({ overrideBrowserslist: ['last 2 versions'] }),
  ],
};
// Use process.env.NODE_ENV to check if the environment is production

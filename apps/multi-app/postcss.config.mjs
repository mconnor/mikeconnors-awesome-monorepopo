import autoprefixer from 'autoprefixer';
import nano from 'cssnano';
import OpenProps from 'open-props';
// import postcssCustomMedia from 'postcss-custom-media';
import postcssImport from 'postcss-import';
import postcssJitProps from 'postcss-jit-props';
import postcssNesting from 'postcss-nesting';
import postcssPow from 'postcss-pow';

// const isProd = import.meta.env.PROD;

export default {
  plugins: [
    postcssImport,
    postcssJitProps(OpenProps),
    postcssNesting,
    postcssPow,
    nano,
    autoprefixer({ overrideBrowserslist: ['last 2 versions'] }),
  ],
};

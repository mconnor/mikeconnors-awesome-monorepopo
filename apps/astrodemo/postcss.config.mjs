import postcssJitProps from 'postcss-jit-props';
import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';
import postcssPow from 'postcss-pow';
import postcssImport from 'postcss-import';
import OpenProps from 'open-props';
import nano from 'cssnano';
import process from 'process';
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

const devConfig = {
  plugins: [postcssImport, postcssNesting, postcssPow],
};

const prodConfig = {
  plugins: [
    postcssImport,
    postcssJitProps(OpenProps),
    postcssNesting,
    postcssPow,
    nano,
    autoprefixer({ overrideBrowserslist: ['last 2 versions'] }),
  ],
};

const config = isDev || isTest ? devConfig : prodConfig;

export default config;

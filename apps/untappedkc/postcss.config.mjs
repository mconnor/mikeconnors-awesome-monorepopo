import postcssJitProps from 'postcss-jit-props';
import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';
import postcssPow from 'postcss-pow';
import postcssImport from 'postcss-import';
import OpenProps from 'open-props';
import postcssCustomMedia from 'postcss-custom-media';
import nano from 'cssnano';
import process from 'process';

// const isProd = import.meta.env.PROD;
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

const devConfig = {
  plugins: [
    postcssImport,

    autoprefixer,
    postcssNesting,
    postcssPow,
    postcssCustomMedia,
    nano,
  ],
};

const prodConfig = {
  plugins: [
    postcssImport,
    postcssJitProps(OpenProps),
    autoprefixer,
    postcssNesting,
    postcssPow,
    postcssCustomMedia,
    nano,
  ],
};

const config = isDev || isTest ? devConfig : prodConfig;

export default config;

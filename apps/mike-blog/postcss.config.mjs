import autoprefixer from 'autoprefixer';
import nano from 'cssnano';
import OpenProps from 'open-props';
import postcssCustomMedia from 'postcss-custom-media';
import postcssImport from 'postcss-import';
import postcssJitProps from 'postcss-jit-props';
import postcssNesting from 'postcss-nesting';
import postcssPow from 'postcss-pow';
import process from 'process';

// const isProd = import.meta.env.PROD;
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

const devConfig = {
  plugins: [postcssImport, postcssNesting, postcssPow, postcssCustomMedia],
};

const prodConfig = {
  plugins: [
    postcssImport,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    postcssJitProps(OpenProps),
    postcssNesting,
    postcssPow,
    nano,
    autoprefixer({ overrideBrowserslist: ['last 2 versions'] }),
  ],
};

const config = isDev || isTest ? devConfig : prodConfig;

export default config;

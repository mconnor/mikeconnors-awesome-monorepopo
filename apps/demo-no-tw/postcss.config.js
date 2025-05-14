// import config from '@repo/styles/postcss';
// // const config = isDev || isTest ? devConfig : prodConfig;

// export default config;

import nano from 'cssnano';
// import OpenProps from 'open-props';
import postcssCustomMedia from 'postcss-custom-media';

// import postcssJitProps from 'postcss-jit-props';
import postcssNesting from 'postcss-nesting';
import postcssPow from 'postcss-pow';
// import MyStyles from '@repo/styles';

// const isProd = import.meta.env.PROD;
// const isDev = process.env.NODE_ENV === 'development';
// const isTest = process.env.NODE_ENV === 'test';

// const devConfig = {
//   plugins: [postcssImport, postcssNesting, postcssPow, postcssCustomMedia],
// };

const prodConfig = {
  plugins: [
    // postcssJitProps(OpenProps),
    postcssNesting,
    postcssPow,
    postcssCustomMedia,
    nano,
  ],
};

// const config = isDev || isTest ? devConfig : prodConfig;

export default prodConfig;

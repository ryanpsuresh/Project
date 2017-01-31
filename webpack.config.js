const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client/app');

 module.exports = {
     entry: [ 
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      `${APP_DIR}/index.jsx`,
     ],
     output: {
         path: BUILD_DIR,
         filename: 'bundle.js'
     },
     module: {
         loaders: [
          {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel-loader'
          }
         ],
     },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
 };
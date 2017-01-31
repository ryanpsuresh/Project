const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client/app');

 module.exports = {
     entry: './client/app/index.jsx',
     output: {
         path: BUILD_DIR,
         filename: 'bundle.js'
     },
     module: {
         loaders : [
            {
              test : /\.jsx?/,
              include : APP_DIR,
              loader : 'babel-loader'
            }
         ],
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
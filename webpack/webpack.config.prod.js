const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfiguration = require('./webpack.config.base.js');

const options = {
  entry: path.resolve(process.cwd(), 'src/app.js'),
  output: {
   path: path.resolve(process.cwd(), 'build'),
   publicPath: '/',
   filename: 'bundle.js'
  },
};

module.exports = Object.assign(
  {},
  baseConfiguration(options),
  {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
        inject: true,
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ],
  }
);

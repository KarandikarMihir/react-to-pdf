const webpack = require('webpack');
const path = require('path');
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
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ],
  }
);

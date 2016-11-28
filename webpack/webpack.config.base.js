const path = require('path');
const loaders = require('./webpack.loaders');

module.exports = (options) => ({
  entry: options.entry,
  output: options.output,
  module: {
    loaders: loaders
  },
  resolve: {
    root: [path.resolve(process.cwd(), 'src'), path.resolve(process.cwd(), 'node_modules')],
    extensions: [
      '',
      '.js',
      '.jsx',
      '.react.js',
    ],
  }
});

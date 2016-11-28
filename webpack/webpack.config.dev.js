const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfiguration = require('./webpack.config.base.js');

const options = {
  entry: path.resolve(process.cwd(), 'example/app.js'),
};

module.exports = Object.assign(
  {},
  baseConfiguration(options),
  {
    plugins: [
      new HtmlWebpackPlugin({
        template: './example/index.html',
        inject: true,
      }),
    ],
    devServer: {
      stats: 'errors-only',
      inline: true,
    },
  }
);

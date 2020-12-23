const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    overlay: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
});

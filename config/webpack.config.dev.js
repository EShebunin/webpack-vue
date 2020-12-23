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
    compress: true,
    hot: true,
    open: true,
    host: '0.0.0.0',
    port: 8080,
    useLocalIp: true,
    overlay: true,
    stats: 'errors-warnings',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
});

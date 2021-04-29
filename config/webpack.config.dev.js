/* eslint-disable import/no-extraneous-dependencies */
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const path = require('path');
const paths = require('./paths');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  target: 'web',
  resolve: {
    alias: {
      '@': paths.src,
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  entry: {
    main: path.resolve(path.join(paths.src, 'main.js')),
  },
  output: {
    path: paths.build,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: paths.build,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(path.join(paths.src, 'index.html')),
    }),
  ],
};

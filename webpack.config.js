var webpack = require('webpack');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

var DIST__DIR = path.resolve(__dirname, 'dist');
var SRC__DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: DIST__DIR,
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: SRC__DIR,
        use: extractTextPlugin.extract({
          use: [ 'css-loader', 'sass-loader' ],
          fallback: "style-loader",
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: SRC__DIR,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000000,
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          },
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: '[name].[ext]',
          //     outputPath: 'images/'
          //   }
          // }
        ]
      },
      {
        test: /\.js$/,
        include: SRC__DIR,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', {modules: false}]]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Webpack is cool!',
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'src/favicon.png',
      inject: true,
    }),
    new cleanWebpackPlugin('dist'),
    new extractTextPlugin('styles.css'),

  ],
  devServer: {
    port: 9000,
    stats: 'errors-only',
    clientLogLevel: 'warning',
    compress: true,
    open: true,
  }
}
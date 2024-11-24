"use strict";

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const buildPath = path.resolve(__dirname, 'build');

const htmlPageNames = ['credits', 'download', 'features', 'updates'];
const multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`,
    filename: `${name}.html`,
    inject: true,
    chunks: [`${name}`]
  })
});
const handler = (percentage, message, ...args) => {
  console.info(percentage, message, ...args);
};

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: buildPath
    },
    port: 3000,
    open: true,
    compress: true
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  entry: './src/js/main.js',

  output: {
    filename: 'main.js',
    path: buildPath,
    clean: true,
    assetModuleFilename: 'img/[name][ext]'
  },

  plugins: [
    new webpack.ProgressPlugin(handler),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/favicon.ico",
      inject: true,
      chunks: ['index'],
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/img/'),
        to: path.resolve(__dirname, 'build/img/')
      }]
    })
  ].concat(multipleHtmlPlugins),

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js$/i,
      }),
    ]
  },

  module: {
    rules: [
      {
        test: /\.(png|webp|jpe?g|gif|svg)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        generator : {
          filename : 'font/[name][ext]',
        }
      },
      {
        test: /\.(s?css)$/i,
        exclude: /node_modules/,
        use: ['css-loader', 'sass-loader']
      },
    ],
  },
};

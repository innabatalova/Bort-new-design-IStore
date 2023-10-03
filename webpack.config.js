const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js"
  },
  devtool: "source-map",
  stats: {
    children: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader", "resolve-url-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset/resource',
      },
      { test: /\.(jsx)?$/, use: "babel-loader" },
      { test: /\.(js)?$/, use: "babel-loader" },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/static/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new CopyPlugin({
      patterns: [{ from: "src", to: "dist" }],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].scss",
    }),
  ],
};
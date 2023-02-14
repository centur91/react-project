const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/i,
        exclude: /node_modules/i,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", 
          "postcss-loader"
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      favicon: path.resolve(__dirname, 'dist', 'site-favicon.png'),
      xhtml: true
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    watchFiles: path.resolve(__dirname, 'src'),
    port: 9000
  }
};
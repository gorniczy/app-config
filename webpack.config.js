const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "development",
  devtool: 'eval',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isProduction
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isProduction
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isProduction
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App Config'
    }),
    new MiniCssExtractPlugin(),
    'postcss-preset-env': {},
  ],
}

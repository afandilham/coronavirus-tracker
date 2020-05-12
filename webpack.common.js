const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: ['@babel/polyfill', './src/js/index.js'],
    others: ['@babel/polyfill/noConflict', './src/js/others.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: true,
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: 'src/html/resources.html',
      filename: 'resources.html',
      inject: true,
      chunks: ['others']
    }),
    new HtmlWebpackPlugin({
      template: 'src/html/about.html',
      filename: 'about.html',
      inject: true,
      chunks: ['others']
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jp?g|svg|gif)$/i,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'url-loader',
            options: {
              encoding: true
            }
          }
        ]
      }
    ]
  },
  performance: {
    hints: false
  }
}
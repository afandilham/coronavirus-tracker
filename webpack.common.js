const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: ['@babel/polyfill', './src/js/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    })
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
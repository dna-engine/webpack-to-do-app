// dnajs-webpack-to-do-app

const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: ['./src/index.html', './src/js/app.js'],
   output: {
      filename: 'bundle.js',
      path:     path.resolve(__dirname, 'dist')
      },
   module: {
      rules: [
         { test: /\.css$/, use: ExtractTextPlugin.extract({ use: 'css-loader' }) },
         { test: /\.html$/, loader: 'raw-loader' }
         ]
      },
   plugins: [
      new ExtractTextPlugin('bundle.css'),
      new HtmlWebpackPlugin({ template: 'src/index.html' })
      ]
   };

// dnajs-webpack-to-do-app

const path =                 require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin =    require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: ['./src/index.html', './src/js/app.js'],
   output: {
      filename: 'bundle.js',
      path:     path.resolve(__dirname, 'dist')
      },
   module: {
      rules: [
         { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
         { test: /\.html$/, loader: 'raw-loader' }
         ]
      },
   plugins: [
      new MiniCssExtractPlugin({ filename: 'bundle.css' }),
      new HtmlWebpackPlugin({ template: 'src/index.html' })
      ]
   };

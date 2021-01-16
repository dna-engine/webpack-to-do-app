// dnajs-webpack-to-do-app

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
   mode: 'development',
   entry: './src/js/app.js',
   module: {
      rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
      },
   plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' }),
      ],
   output: { filename: 'main.js', path: path.resolve(__dirname, 'dist') },
   };

module.exports = webpackConfig;

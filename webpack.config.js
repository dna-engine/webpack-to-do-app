// webpack-to-do-app

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const webpackConfig = {
   mode:    'development',
   devtool: false,
   entry:   './src/js/app.js',
   module:  { rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }] },
   plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
   output:  { filename: 'bundle.js', path: path.resolve('docs') },
   };

export default webpackConfig;

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app/index.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'webpack Boilerplate',
        template: path.resolve(__dirname, './src/public/index.html'), // шаблон
        filename: 'index2.html', // название выходного файла
    })
  ],
  module: {
    rules: [
        // JavaScript
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
    ],
}
}
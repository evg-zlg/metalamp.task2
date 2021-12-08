const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",
    entry: {
        main: path.resolve(__dirname, './src/app/index.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
        title: 'webpack Boilerplate',
        template: path.resolve(__dirname, './src/public/index.html'), // шаблон
        filename: 'index.html', // название выходного файла
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
        //css
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                "postcss-preset-env",
                                {
                                    //Options
                                },
                            ],
                        },
                    },
                },
                "sass-loader",
            ],            
        },
    ],
}
}
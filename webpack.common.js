const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const imgPath = './assets/img/';
const jsPath = './assets/js/';
const cssPath = './assets/css/';

module.exports = {
    entry : './src/js/index.js',
    devServer: {
        contentBase: 'dist/',
        publicPath: '/',
        inline: true,
        port: process.env.PORT || 3000,
        host: '127.0.0.1',
        historyApiFallback: true,
        open: 'chrome'
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: imgPath
                        },
                    },
                ]
            },
            {
                test: /\.gitkeep$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '.gitkeep',
                        },
                    },
                ]
            },
        ]
    },
    plugins: [
    
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          })
    ],
    

}
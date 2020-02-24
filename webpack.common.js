const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const imgPath = './assets/img/';
const jsPath = './js/';
const cssPath = './css/';
const fontsPath = './assets/fonts/';

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
                        options: {
                            interpolate: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: [/(fonts)/, /(icons)/],
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
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(images)/,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: fontsPath
                        }
                    }
                ]
            },
            {
                test: /\.ttf$/,
                use: [
                  {
                    loader: 'ttf-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: fontsPath
                        }
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
            {
                test: /\.htaccess$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '.htaccess',
                        },
                    },
                ]
            },
            // Favicon
            {
                test: /\.(ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/'
                        },
                    },
                ]
            },
            {
                test: /icon\.png$/,
                exclude: /(images)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/'
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

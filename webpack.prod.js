const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const globImporter = require('node-sass-glob-importer');

const common = require('./webpack.common');
const merge = require('webpack-merge');

const imgPath = './img/';
const jsPath = './js/';
const cssPath = './css/';

module.exports = merge(common, {

    mode : 'production',
    output : {
        filename: '' + jsPath + 'bundle.[contentHash].js',
        path : path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: '../',
                        },
                    },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    {
                        loader: 'postcss-loader',
                        options: {
                          ident: 'postcss',
                          plugins: [
                            require('autoprefixer')({}),
                            require('cssnano')({ preset: 'default' })
                          ],
                          minimize: true
                        }
                      },
                    { loader: 'sass-loader', options: { sourceMap: true, importer: globImporter() } }

                ],
            },

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '' + cssPath + '[name].[hash].css',
            chunkFilename: '' + cssPath + '[id].[hash].css',
        }),
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: './about.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/404.html',
            filename: './404.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
    ],

});

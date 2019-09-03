const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common');
const merge = require('webpack-merge');

const imgPath = './img/';
const jsPath = './js/';
const cssPath = './css/';


module.exports = merge(common, {
    mode : 'development',
    output : {
        filename: '' + jsPath + 'bundle.js',
        path : path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: 'dist/', // Relative directory for base of server
        publicPath: '/',
        inline: true,
        port: process.env.PORT || 3000, // Port Number
        host: '127.0.0.1',
        historyApiFallback: true,
      },
    module: {
        rules: [

            {
                test: /\.scss$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    { loader: 'style-loader', options: { sourceMap: true } },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                    
                ],
            },

        ]
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: '' + cssPath + '[name].css',
        //     chunkFilename: '' + cssPath + '[id].css',
        // }),
 
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: './about.html'
        }),
 
    ],
    

});
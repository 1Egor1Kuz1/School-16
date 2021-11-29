const path = require('path');

const webpack = require('webpack');
const buildConfig = require('./build.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const publicPath = (buildConfig.dir || '/build');
const resultPath = path.resolve(__dirname, '.' + publicPath);
const fs = require('fs');

const config = {
    entry: {
        app: './src/index.js',
    },

    devtool: null,

    experiments: {
        asset: true
    },
    output: {
        filename: 'app.js',
        path: null,
        // assetModuleFilename: 'fonts/[name][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    //"style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /fonts.+\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]'
                }
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext][query]'
                }
            },
            {
                test: /icons.+\.(svg)$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                    },

                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new MiniCssExtractPlugin(),
    ],
};

module.exports = (env, argv) => {
    const dev = argv.mode === 'development';
    const prod = argv.mode === 'production';

    if (dev) config.devtool = 'source-map';
    else if (prod) config.devtool = false;

    config.output.path = prod ? resultPath : '/build';

    return config;
};
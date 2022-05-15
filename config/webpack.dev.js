const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            // directory: path.resolve(__dirname, "dist"),
            directory: "./dist",
        },
        // historyApiFallback: true,
        hot: true,
        port: 8080,
        open: true,
    },
    plugins: [
           new MiniCssExtractPlugin(),
    ],
    output: {
      filename: 'main.js',
    },
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                            esModule: true,
                            },
                        },
                    'css-loader',
                ], 
            }
        ]
    }
  };
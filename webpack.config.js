const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    // output: {
    //     filename: 'main.js'
    // },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },

    mode: 'production',
    // mode: 'development',
    // mode: 'none',
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            filename: "index.html"
        }),
    ],
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
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {pretty: true}
            }
        ]
    }
}

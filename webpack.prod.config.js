const path=require('path')
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");
module.exports={
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/[name][ext]"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader",'postcss-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",'postcss-loader'],
            },
            {
                test: /\.(png|svg|jpe?g|json)/,
                type: 'asset/resource',
                generator: {
                    filename: "assets/[name][ext]"
                }
            },
            {
                test: /\.json/,
                type: 'asset/resource',
                generator: {
                    filename: './data/[name][ext]'
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)/,
                type: 'asset/inline'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(),new JsonMinimizerPlugin(),],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename:"css/[name].css"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
            // publicPath:"./dist/"
        })
    ]
}
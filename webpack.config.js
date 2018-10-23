const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin('style.css');


module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')

    },

    module:{
        rules:[
            {
                test: /\.css$/,
                loader: extractSass.extract({
	                loader: ["css-loader", "sass-loader"]
	               })
            }
       ]
    },

    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            template: "./src/client/index.html"
        }),
         new CleanWebpackPlugin(["dist"], {
             exclude: ["./src/client/index.html"]
         })

    ],
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            "/api": "http://localhost:8080"
        }
    },
}

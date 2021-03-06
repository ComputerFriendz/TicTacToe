const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')

    },
    module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                  ]
            }
       ]
    },

    plugins: [
        new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: "./src/client/index.html"
        }),
        new CleanWebpackPlugin(["dist"], {
             exclude: ["./index.html"]
        })
    ],
    resolve: {
    alias: {
      jquery: "jquery/src/jquery"
    }
    },
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            "/api": "http://localhost:8080"
        }
    },
}

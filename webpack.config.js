const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src', 'components'),
            Services: path.resolve(__dirname, 'src', 'services'),
            Redux: path.resolve(__dirname, 'src', 'redux'),
            Forms: path.resolve(__dirname, 'src', 'forms')
        },
        extensions: [ '.jsx', '.js', '.json' ]
    },
    entry: './entry',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[hash].bundle.js'
    },
    resolveLoader: {
        moduleExtensions: [ '-loader' ]
    },
    devServer: {
        contentBase: './public',
        inline: true,
        hot: true,
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new HtmlPlugin({
            template: path.resolve(__dirname, 'public', 'template.html')
        })
    ]
}

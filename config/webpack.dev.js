const webpack = require('webpack')
const path = require('path')
const paths = require('../config/paths')
const ruleJs = require('./rules/ruleJS')
const ruleCSS = require('./rules/ruleCSS')
const ruleStatic = require('./rules/ruleStatic')

module.exports = {
    entry: {
        main: [
            require.resolve('./polyfills-clients.js'),
            path.resolve(paths.src, 'index.js')
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(paths.root, 'public', 'build'),
        publicPath: 'http://localhost:8001/',
    },
    module: {
        rules: [
            ruleJs.dev,
            ruleCSS.global.dev,
            ruleCSS.cssModule.dev,
            ruleStatic,
      ]  
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        port: 8001,
        inline: true,
        hotOnly: true,
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:8000' },
        noInfo: true,
        historyApiFallback: true,
        compress: true,
    }
}
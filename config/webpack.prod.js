const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const paths = require('../config/paths')
const ruleJs = require('./rules/ruleJS')
const ruleCSS = require('./rules/ruleCSS')
const ruleStatic = require('./rules/ruleStatic')
const vendors = require('./vendors')

module.exports = {
    entry: {
        main: path.resolve(paths.src, 'index.js'),
        vendor: [require.resolve('./polyfills-clients.js')].concat(vendors)
    },
    output: {
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].chunk.js',
        path: paths.build,
        publicPath: '/build/',
    },
    recordsPath: path.resolve(paths.root, 'webpack-records.json'),
    module: {
        rules: [
            ruleJs.prod,
            ruleCSS.global.prod,
            ruleCSS.cssModule.prod,
            ruleStatic,
        ]
    },
    plugins: [
        // webpack.DefinePlugin
        // จุดนี้สำคัญเพราะเป็นการบอก react ว่า env เป็นแบบ production ซึ่งreact จะทำการตัดตัวช่วยต่างๆ และ optimize code ให้
        // พร้อมเป็นเวอร์ชัน Production
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new AssetsPlugin({
            filename: 'webpack-assets.json',
            path: paths.root,
            prettyPrint: true,
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
            minChunks: 10
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css',
            allChunks: true,
        }),
        new webpack.SourceMapDevToolPlugin({
            test: /.js$/,
            filename: '[file].map',
            exclude: [/vendor/, /manifest/]
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true
        }),
        //ทำการ Minifile source ให้มันเล็กลง
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false,
                unused: true,
                dead_code: true
            },
            output: {
                comments: false
            },
            sourceMap: true
        })
    ],
    //บอก node ให้ทำเป็น module เหล่านี้ว่างๆ ไว้เนื่องจากจะ  build code เป็นแบบ client 
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        crypto: 'empty'
    }
}
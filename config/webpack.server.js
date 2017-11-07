const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const paths = require('./paths')
const ruleJS = require('./rules/ruleJS')
const ruleCSS = require('./rules/ruleCSS')
const ruleStatic = require('./rules/ruleStatic')

module.exports = {
    bail: true,
    target: 'node',
    entry: {
        main: [
            require.resolve('./polyfills-server.js'),
            path.resolve(paths.root, 'server', 'matchRoute.js')
        ],
    },
    output: {
        filename: 'js/matchRoute.js',
        path: paths.build,
        publicPath: '/build/',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        modules: [paths.src, 'node_modules']
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            ruleJS.server,
            ruleCSS.global.server,
            ruleCSS.cssModule.server,
            ruleStatic,
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true
        }),
    ]
}
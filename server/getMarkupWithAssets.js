const fs = require('fs')
const path = require('path')
const paths = require('../config/paths')
const stats = require('../webpack-assets.json')

const webpackManifest = fs.readFileSync(
    path.join(paths.public, stats.manifest.js),
    'utf-8'
)
module.exports = function getMarkupWithAssets(filepath) {
    return fs.readFileSync(filepath, 'utf-8')
        .replace('___CSS___', stats.main.css)
        .replace('___VENDOR___', stats.vendor.js)
        .replace('___MAIN___', stats.main.js)
        .replace('___INLINED_WEBPACK_MANIFEST___', webpackManifest)
}
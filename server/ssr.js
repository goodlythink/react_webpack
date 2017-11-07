const path = require('path')
const paths = require('../config/paths')
const responder = require('./responder')

const matchRoute = require(
    path.resolve(paths.build, 'js/matchRoute.js'),
    'utf-8'
).default

module.exports = (req, res) => {
    return matchRoute(req)
        .then(responder(res))
}
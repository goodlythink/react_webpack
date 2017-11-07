const path = require('path')
const serialize = require('serialize-javascript')
const paths = require('../config/paths')
const getMarkupWithAssets = require('./getMarkupWithAssets')

const filepath = path.resolve(paths.public, 'ssr.html')
const markup = getMarkupWithAssets(filepath)

module.exports = function responder(res) {
    return ({ error, redirect, content, data }) => {
        if (error) {
            return res.status(500).send(error.message)
        }

        if (redirect) {
            return res.redirect(302, redirect.url)
        }

        const html = markup
            .replace('___CONTENT___', content)
            .replace('___REDUXDATA___', serialize(data, { isJSON: true }))
        
        res.send(html)
    }
}
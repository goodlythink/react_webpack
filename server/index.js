const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const proxy = require('http-proxy-middleware')
const renderer = require('./renderer')
const path = require('path')
const paths = require('../config/paths')


const app = express()
if (process.env.NODE_ENV === 'production') {
    app.use(compression())
}

app.use(favicon(path.resolve(paths.public, 'favicon.ico')))
app.use(express.static(paths.public))

app.use('/api', proxy({
    target: 'http://localhost:3000',
    changeorigin: true
}))

app.use(renderer)
app.listen(8000, () => {
    console.log('ready on http://localhost:8000')
})
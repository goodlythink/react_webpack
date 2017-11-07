if (typeof Promise === 'undefined') {
    require('promise/lib/rejection-tracking').enable()
    window.Promise = require('promise/lib/es6-extensions.js')
}

require('isomorphic-fetch')

Object.assign = require('object-assign')
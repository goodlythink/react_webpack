const path = require('path')
const root = path.resolve(__dirname, '..')

module.exports = {
    root: root, 
    public: path.resolve(root, 'public'),
    src: path.resolve(root, 'web'),
    build: path.resolve(root, 'public', 'build'),
}
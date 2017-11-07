import App from './App/App'

function loadRoute(cb) {
    return (module) => {
        cb(null, module.default)
    }
}
const routes = {
    path: '/',
    component: App,
    indexRoute: {
        getComponent(nextState, cb) {
            import('./Home/Home.js').then(loadRoute(cb))
        }
    },
    childRoutes: [
        {
            path: 'thor',
            getComponent(nextState, cb) {
                import('./Thor/Thor.js').then(loadRoute(cb))
            }
        },
        {
            path: '*',
            getComponent(nextState, cb) {
                import('./ErrorPage.js').then(loadRoute(cb))
            }
        }
    ]
}

export default routes
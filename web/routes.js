import App from './App/App'
import Home from './Home/Home'
import Thor from './Thor/Thor'
import ErrorPage from './ErrorPage'

const routes = {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
        { path: 'thor', component: Thor },
        { path: '*', component: ErrorPage }
    ]
}

export default routes
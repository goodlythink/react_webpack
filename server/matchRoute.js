import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from '../web/routes'
import { Provider } from 'react-redux'
import configureStore from '../web/configureStore'


function matchRoute(req) {
    const store = configureStore()
    return new Promise((resolve, reject) => {
        match(
            { routes, location: req.url },
            (error, redirectLocation, renderProps) => {
                if (error) {
                    resolve({ error })
                } else if (redirectLocation) {
                    resolve({
                        redirect: {
                            url: redirectLocation.pathname + redirectLocation.search,
                        }
                    })
                } else if (renderProps) {
                    const element = (
                        <Provider store={store}>
                            <RouterContext {...renderProps} />
                        </Provider>
                    )
                    const content = ReactDOMServer.renderToString(element)
                    resolve({ content })
                } else {
                    console.warn('error SSR')
                }
            }
        )
    })
}

export default matchRoute
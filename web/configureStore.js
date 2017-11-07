import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

export default function configureStore({ preloadState } = {}) {
    const store = createStore(
        reducers,
        preloadState,
        composeEnhancers(
            applyMiddleware(thunk, promiseMiddleware())
        )
    )
    return store
}

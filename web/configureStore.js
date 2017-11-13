// import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import promiseMiddleware from 'redux-promise-middleware'
// import * as reducers from './reducers'
// import thunk from 'redux-thunk'

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import * as reducers from './reducers.js'
import thunk from 'redux-thunk'


const composeEnhancers = (
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

/*
export default function configureStore({ preloadState,client } = {}) {
    const store = createStore(
        combineReducers({
            ...reducers,
            apollo: client.reducer()
        }),
        preloadState,
        composeEnhancers(
            applyMiddleware(client.middleware(), thunk, promiseMiddleware())
        )
    )
    return store
}
*/

export default function configureStore({ preloadState, client } = {}) {
    const store = createStore(
        combineReducers({
            ...reducers,
            apollo: client.reducer()
        }),
        preloadState,
        composeEnhancers(
            applyMiddleware(client.middleware(), thunk, promiseMiddleware()),
        )
    )
    return store
}

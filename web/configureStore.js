import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'
import thunk from 'redux-thunk'

export default function configureStore() {
    const store = createStore(
        reducers,
        applyMiddleware(thunk, promiseMiddleware())
    )
    return store
}

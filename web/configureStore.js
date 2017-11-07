import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'

export default function configureStore() {
    const store = createStore(
        reducers,
        applyMiddleware(promiseMiddleware())
    )
    return store
}

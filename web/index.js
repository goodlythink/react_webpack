import './index.scss';
import React from 'react'
import ReactDOM from 'react-dom'
import { match, Router, browserHistory } from 'react-router'
import { createStore } from 'redux'
import routes from './routes'

// (state, action) => state
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMETN':
            return state - 1
        default:
            return state
    }
}

const store = createStore(counter)
store.subscribe(() => { console.log(store.getState()) })
console.log(store.getState())
store.dispatch({ type: 'INCREMENT' })

match(
    { history: browserHistory, routes },
    (error, redirectLocation, renderProps) => {
        ReactDOM.render(
            <Router {...renderProps} />,
            document.getElementById('app')
        )
    }
)
import { combineReducers } from 'redux'

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

function posts(state = {}, action) {
    switch (action.type) {
        case 'LOAD_POSTS':
            return action.payload
        default:
            return state
    }
}

const reducers = combineReducers({
    counter,
    posts
})

export default reducers
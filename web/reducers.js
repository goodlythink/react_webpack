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

const reducers = combineReducers({
    counter,
})

export default reducers
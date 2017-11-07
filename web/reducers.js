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
        case 'LOAD_POSTS_PENDING':
            return {
                isRejected: false,
                data: null
            }
        case 'LOAD_POSTS_FULFILLED':
            return {
                isRejected: false,
                data: action.payload
            }
            return
        case 'LOAD_POSTS_REJECTED':    
            return {
                isRejected: true,
                data: 'Now Error'
            } 
        default:
            return state
    }
}

const reducers = combineReducers({
    counter,
    posts
})

export default reducers
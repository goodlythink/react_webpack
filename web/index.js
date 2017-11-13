import './index.scss';
import React from 'react'
import ReactDOM from 'react-dom'
import { match, Router, browserHistory } from 'react-router'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'

// import { Provider } from 'react-redux'
import routes from './routes'
import configureStore from './configureStore'


//const store = configureStore({preloadState: window.__REDUXDATA__})
//ไม่ได้ใช้ store ของ redux เนื่องจาก Apollo สร้าง Store ของมันเอง




const networkInterface = createNetworkInterface({
    uri: 'http://localhost:8000/api/graphql',
})

const client = new ApolloClient({
    networkInterface
})

const store = configureStore({ preloadState: window.__REDUXDATA__, client })

match(
    { history: browserHistory, routes },
    (error, redirectLocation, renderProps) => {
        ReactDOM.render(
            <ApolloProvider client={client} store={store}>
                <Router {...renderProps} />
            </ApolloProvider>,
            document.getElementById('app')
        )
    }
)
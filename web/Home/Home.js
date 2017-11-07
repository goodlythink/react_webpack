import React from 'react'
import PostList from '../Posts/PostList'

class Home extends React.Component {
    state = { data: null, isLoading: false }
    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(d => d.json())
            .then(response => this.setState({ data: response, isLoading: false }))
    }

    render() {
        const { isLoading, data } = this.state
        return (
            <div>
                <h1>Lastes Posts</h1>
                {isLoading && <div>Loading...</div>}
                <PostList data={data}/>
            </div>
        )
    }
}

export default Home
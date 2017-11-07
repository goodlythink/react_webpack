import React from 'react'
import { connect } from 'react-redux'
import PostList from '../Posts/PostList'

class Home extends React.Component {
    state = { data: null, isLoading: false }
    componentDidMount() {
        this.props.loadPosts()
    }

    render() {
        const { posts } = this.props
        return (
            <div>
                <h1>Lastes Posts</h1>
                <PostList data={posts.data} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadPosts: () => {
            dispatch({
                type: 'LOAD_POSTS',
                payload: fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
                    .then(d => d.json())
            })
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
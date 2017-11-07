import React from 'react'
import { connect } from 'react-redux'
import PostList from '../Posts/PostList'
import { loadPosts } from '../actions'

class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch(loadPosts())
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

const Connected = connect(
    mapStateToProps,
)(Home)

Connected.fetchData = (store) => {
    return store.dispatch(loadPosts())
}
export default Connected
import React from 'react'
//import { connect } from 'react-redux'
import { gql, graphql } from 'react-apollo'
import PostList from '../Posts/PostList'
// import { loadPosts } from '../actions'

class Home extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(loadPosts())
    // }

    render() {
        //const { posts } = this.props
        const { data: { viewer, error, loading } } = this.props
        if (error) {
            return (
                <div>Error</div>
            )
        }
        return (
            <div>
                <h1>Lastes Posts</h1>
                {loading && <div>Loading...</div>}
                {viewer && <PostList data={viewer.posts} />}
            </div>
        )
    }
}

/*
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
*/

const Container = graphql(gql`
    query {
        viewer{
            posts{
                title
                description
            }
        }
    }
`)(Home)
export default Container
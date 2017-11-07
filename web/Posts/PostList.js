import React from 'react'
import Post from './Post'

class PostList extends React.Component {
    render() {
        const { data } = this.props
        return (
            <div>
                {data && data.map(e => {
                    return (
                        <Post data={e} key={`post.${e.id}`}/>
                    )
                })}
            </div>
        )
    }
}

export default PostList
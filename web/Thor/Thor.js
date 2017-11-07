import React from 'react'

class Thor extends React.Component{
    state = { count: 0 }
    render() {
        return (
            <div>
                <h1>THOR</h1>
                <div>As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate. He's self-assured, and he would never, ever stop fighting for a worthwhile cause</div>
                <button onClick={this.handleClick}>count {this.state.count}</button>
            </div>
        )
    }

    handleClick = () => {
        this.setState(s => {
            return {
                count: s.count + 1
            }    
        })
    }
}

export default Thor
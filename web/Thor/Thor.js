import React from 'react'
import { connect } from 'react-redux'

class Thor extends React.Component{
    render() {
        return (
            <div>
                <h1>THOR</h1>
                <div>As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate. He's self-assured, and he would never, ever stop fighting for a worthwhile cause</div>
                <button onClick={this.handleClick}>count {this.props.count}</button>
            </div>
        )
    }

    handleClick = () => {
       this.props.handleClick()
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch({ type: 'INCREMENT' })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Thor)
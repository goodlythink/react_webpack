import React from 'react'
import Header from '../Header/Header'
import css from './App.module.scss'
import { Link }from 'react-router'

class App extends React.Component {
    render() {
        return (
            <div className={css.container}>
                <Header />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/thor">Thor</Link></li>
                    </ul>
                <div className={css.content}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App
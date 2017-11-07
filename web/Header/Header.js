import React from 'react'
import css from './Header.module.scss'

class Header extends React.Component {
    render() {
        return (
            <div className={css.container}>
                <div className={css.bannerHeading}>Thor Ragnarok</div>
            </div>
        )
    }
}

export default Header
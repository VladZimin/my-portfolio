import React from 'react'
import styles from './Header.module.css'
import {Nav} from '../Navigation/Nav'
import containerStyle from '../common/styles/Container.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={`${containerStyle.container} ${styles.container}`}>
                <Nav/>
            </div>
        </div>
    )
}


import React from 'react'
import styles from './MainBlock.module.css'
import containerStyle from '../common/styles/Container.module.css'

export const MainBLock = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={`${containerStyle.container} ${styles.container}`}>
                <div className={styles.textBlock}>
                    <span>Hi, there</span>
                    <h1>I am, Zimin Vladislav</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.photoBlock}>Photo</div>
            </div>
        </div>
    )
}


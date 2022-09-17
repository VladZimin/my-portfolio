import React from 'react'
import styles from './Footer.module.css'
import containerStyle from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={`${containerStyle.container} ${styles.container}`}>
                <h2 className={styles.title}>Zimin Vladislav</h2>
                <div className={styles.socialContainer}>
                    <div className={styles.socialNetwork}></div>
                    <div className={styles.socialNetwork}></div>
                    <div className={styles.socialNetwork}></div>
                    <div className={styles.socialNetwork}></div>
                </div>
                <span className={styles.copyright}>© 2022 Все права защищены</span>
            </div>
        </div>
    )
}


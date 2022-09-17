import React from 'react'
import styles from './ContactsBlock.module.css'
import containerStyle from '../common/styles/Container.module.css'

export const ContactsBlock = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${containerStyle.container} ${styles.container}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form className={styles.contactsForm}>
                    <input type="text" className={styles.formElement}/>
                    <input type="text" className={styles.formElement}/>
                    <textarea className={styles.formElement}/>
                </form>
                <a href={'#'} className={styles.sendBtn}>Отправить</a>
            </div>
        </div>
    )
}


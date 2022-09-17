import React, {FC} from 'react'
import styles from './Project.module.css'

type SkillPropsType = {
    title: string
    description: string
}

export const Project: FC<SkillPropsType> = ({title, description}) => {
    return (
        <div className={styles.project}>
            <div className={styles.imgContainer}>
                <a href="#">Посмотреть</a>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    )
}


import React, {FC} from 'react'
import styles from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}

export const Skill: FC<SkillPropsType> = ({title, description}) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3>{title}</h3>
            <span>{description}</span>
        </div>
    )
}


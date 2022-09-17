import React, {FC} from 'react'
import styles from './SkillsBlock.module.css'
import containerStyle from '../common/styles/Container.module.css'
import {SkillType} from '../../App'
import {Skill} from './Skill/Skill'

export const SkillsBlock: FC<{skills: SkillType[]}> = ({skills}) => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${containerStyle.container} ${styles.container}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    {
                        skills.map( s => <Skill key={s.id} title={s.title} description={s.description}/>)
                    }
                </div>
            </div>
        </div>
    )
}


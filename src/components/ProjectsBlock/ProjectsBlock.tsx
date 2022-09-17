import React, {FC} from 'react'
import styles from './ProjectsBlock.module.css'
import containerStyle from '../common/styles/Container.module.css'
import {ProjectType} from '../../App'
import {Project} from './Project/Project'

export const ProjectsBlock: FC<{projects: ProjectType[]}> = ({projects}) => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${containerStyle.container} ${styles.container}`}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    {
                        projects.map( p => <Project key={p.id} title={p.title} description={p.description}/>)
                    }
                </div>
            </div>
        </div>
    )
}


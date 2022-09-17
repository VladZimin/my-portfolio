import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {MainBLock} from './components/MainBlock/MainBLock'
import {SkillsBlock} from './components/SkillsBlock/SkillsBlock'
import {ProjectsBlock} from './components/ProjectsBlock/ProjectsBlock'
import {ContactsBlock} from './components/ContactsBlock/ContactsBlock'
import {Footer} from './components/Footer/Footer'

export type SkillType = {
    id: number
    title: string
    description: string
    skillIcon: string
}
export type ProjectType = {
    id: number
    title: string
    description: string
    projectImg: string
}

const App = () => {

    const skills: SkillType[] = [
        {id: 1, title: 'JavaScript', description: 'Lorem ipsum dolor sit amet, cons adipiscing elit, ut aliquip ex ea commodo consequat.', skillIcon: '...'},
        {id: 2, title: 'CSS/HTML', description: 'Lorem  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', skillIcon: '...'},
        {id: 3, title: 'React JS', description: 'Lorem ipsum dolor sit amet, cons adipiscing elit, sed do eiusmod', skillIcon: '...'},
        {id: 4, title: 'TypeScript', description: 'Lorem ipsum dolor sit amet, cons adipiscing elit, sed do eiusmod', skillIcon: '...'},
        {id: 5, title: 'Redux', description: 'Lorem ipsum dolor sit amet, cons adipiscing elit, sed do eiusmod', skillIcon: '...'},
        {id: 6, title: 'MUI/Ant Design', description: 'Lorem ipsum dolor sit amet, cons adipiscing elit, sed do eiusmod', skillIcon: '...'}
    ]

    const projects: ProjectType[] = [
        {id: 1, title: 'Social Network', description: 'Lorem ipsum dolor sit amet, cons adipiscing elit, ut aliquip ex ea commodo consequat.', projectImg: '...'},
        {id: 2, title: 'ToDo List', description: 'Lorem  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', projectImg: '...'},
    ]
    return (
        <div className="App">
            <Header/>
            <MainBLock/>
            <SkillsBlock skills={skills}/>
            <ProjectsBlock projects={projects}/>
            <ContactsBlock/>
            <Footer/>
        </div>
    )
}

export default App

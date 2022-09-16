import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {MainBLock} from './components/MainBlock/MainBLock'
import {SkillsBlock} from './components/SkillsBlock/SkillsBlock'

export type SkillType = {
    id: number
    title: string
    description: string
}

function App() {

    const skills: SkillType[] = [
        {id: 0, title: 'js', description: 'Lorem ipsum dolor sit amet, cons adipiscing elit, ut aliquip ex ea commodo consequat.'},
        {id: 0, title: 'js', description: 'Lorem  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 0, title: 'js', description: 'Lorem ipsum dolor sit amet, cons adipiscing elit, sed do eiusmod'}
    ]
    return (
        <div className="App">
            <Header/>
            <MainBLock/>
            <SkillsBlock skills={skills}/>
        </div>
    )
}

export default App

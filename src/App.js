import React from 'react'
import s from './App.modules.scss'
import './custom.css'
import cn from 'classnames'

const App = () => {
    return (
        <div className={cn(s.header, 'color')}>
            <h1 >App? Hello</h1>
        </div>
    )
}
export default App
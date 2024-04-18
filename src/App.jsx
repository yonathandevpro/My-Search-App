import React, { useState } from 'react'
import { Footer }  from './components/Footer';
import { Navbar }  from './components/Navbar';
import { Routes } from './components/Routes'; 

const App = () => {
    const [ darkTheme, setDarkTheme ] = useState(false);
    return (
        <div className={ darkTheme ? 'dark' : '' }>
            <h1>App</h1>
        </div>
    )
}

export default App;
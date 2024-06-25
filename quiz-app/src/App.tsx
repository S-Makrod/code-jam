import './App.css'
import { ThemeProvider } from '@emotion/react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Router from './navigation/Router'
import { getTheme } from './theme'
import { CssBaseline, Theme } from '@mui/material'
import { useState } from 'react'

function App() {
    const [theme, setTheme] = useState<Theme>(getTheme(true))
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar setTheme={setTheme}/>
            <Router />
            <Footer />
        </ThemeProvider>
    )
}

export default App

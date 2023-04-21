import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { ThemeProvider } from '@contexts/themeContext'
import App from '@components/app/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
)

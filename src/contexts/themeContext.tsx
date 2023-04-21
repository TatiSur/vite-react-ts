import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react'
import { Theme, ThemeOption } from '@/types/index'
import { defaultTheme } from '@constants/defaultTheme'
import { getAppliedMode } from '@helpers/getAppliedMode'

interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: defaultTheme,
    setTheme: () => {
    },
})

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [ theme, setTheme ] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem('theme') as Theme
        return storedTheme || defaultTheme
    })
    const [ isDarkTheme, setIsDarkTheme ] = useState(false)

    useEffect(() => {
        document.documentElement.dataset.appliedMode = getAppliedMode(theme, isDarkTheme)
    }, [ theme, isDarkTheme ])

    useEffect(() => {
        if (theme === ThemeOption.System) {
            const handleThemeChange = (event: MediaQueryListEvent) => {
                setIsDarkTheme(event.matches)
            }

            const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
            darkThemeMq.addEventListener('change', handleThemeChange)
            return () => darkThemeMq.removeEventListener('change', handleThemeChange)
        }
    }, [ theme ])

    const handleSetTheme = (theme: Theme) => {
        setTheme(theme)
        localStorage.setItem('theme', theme)
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, useTheme }

import './ThemeSwitcher.scss'
import { MonitorIcon, MoonIcon, SunIcon } from '@assets/index'
import { useTheme } from '@contexts/themeContext'
import { ThemeOption } from '@/types/themes'

const icons = [
    { themeMode: ThemeOption.System, Icon: MonitorIcon },
    { themeMode: ThemeOption.Light, Icon: SunIcon },
    { themeMode: ThemeOption.Dark, Icon: MoonIcon },
]

function ThemeSwitcher(): JSX.Element {
    const { theme, setTheme } = useTheme()

    const handleClick = () => {
        if (theme === ThemeOption.System) {
            setTheme(ThemeOption.Light)
        } else if (theme === ThemeOption.Light) {
            setTheme(ThemeOption.Dark)
        } else {
            setTheme(ThemeOption.System)
        }
    }

    return (
        <div className="theme-switcher">
            {icons.map(({ themeMode, Icon }) => (
                <Icon
                    key={themeMode}
                    onClick={handleClick}
                    className={`theme-switcher__icon--${theme === themeMode ? 'show' : 'hide'}`}
                />
            ))}
        </div>
    )
}

export default ThemeSwitcher

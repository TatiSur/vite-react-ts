import { Theme, ThemeOption } from '@/types/themes'

export function getAppliedMode(theme: Theme, isDarkTheme: boolean): ThemeOption {
    if (theme === ThemeOption.Dark) {
        return ThemeOption.Dark
    } else if (theme === ThemeOption.Light) {
        return ThemeOption.Light
    } else {
        return isDarkTheme ? ThemeOption.Dark : ThemeOption.Light
    }
}

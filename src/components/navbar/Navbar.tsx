import './Navbar.scss'
import Logo from '@components/ui/logo/Logo'
import Button from '@components/ui/button/Button'
import { navLinks } from '@constants/index'
import ThemeSwitcher from '@components/ui/themeSwitcher/ThemeSwitcher'

function Navbar(): JSX.Element {

    return (
        <div className="navbar">
            <Logo/>
            <nav>
                <ul className="navbar__list">
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a href={link.href}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className='navbar__buttons'>
                <ThemeSwitcher/>
                <Button size="small">
                    Sign in
                </Button>
            </div>
        </div>
    )
}

export default Navbar

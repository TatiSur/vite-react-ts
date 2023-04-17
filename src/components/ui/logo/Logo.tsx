import './Logo.scss'
import { LogoIcon } from '@assets/index'

function Logo(): JSX.Element {
    return (
        <div className='logo'>
            <LogoIcon className='logo__icon'/>
            <span className="logo__text">
                ThriveTech
            </span>

        </div>
    )
}

export default Logo

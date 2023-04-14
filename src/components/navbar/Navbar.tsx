import './Navbar.scss'
import Logo from '@components/logo/Logo'
import Button from '@components/button/Button'

function Navbar(): JSX.Element {

    return (
        <div className="navbar">
            <Logo/>

            <nav>
                <ul className='navbar__list'>
                    <li>
                        <a>
                            Features
                        </a>
                    </li>
                    <li>
                        <a>
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a>
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>

            <Button size='small'>
                Sign in
            </Button>
        </div>
    )
}

export default Navbar

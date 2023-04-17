import './Navbar.scss'
import Logo from '@components/ui/logo/Logo'
import Button from '@components/ui/button/Button'

function Navbar(): JSX.Element {

    return (
        <div className="navbar">
            <Logo/>

            <nav>
                <ul className="navbar__list">
                    <li>
                        <a href="#features">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#pricing">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#testimonials">
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

            <Button size="small">
                Sign in
            </Button>
        </div>
    )
}

export default Navbar

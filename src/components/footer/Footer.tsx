import './Footer.scss'
import Logo from '@components/ui/logo/Logo'

function Footer(): JSX.Element {

    return (
        <footer className="footer">
            <div className="footer__container">
                <Logo/>

                {/*Social media links or icons to connect with us on popular platforms*/}
                <ul className="footer__nav">
                    <li>
                        <a>About Us</a>
                    </li>
                    <li>
                        <a>Terms of Service</a>
                    </li>
                    <li>
                        <a>Privacy Policy</a>
                    </li>
                </ul>
            </div>
            <p className="copy">&copy; 2023 Web App Name. All rights reserved.</p>
        </footer>
    )
}

export default Footer

import Navbar from '@components/navbar/Navbar'
import MainTitle from '@components/ui/mainTitle/MainTitle'
import Button from '@components/ui/button/Button'
import './MainScreen.scss'

function MainScreen(): JSX.Element {

    return (
        <header className="header">
            <Navbar/>
            <div className="header__title-wrapper">
                <MainTitle>
                    Organize. Streamline. Thrive.
                </MainTitle>
            </div>
            <p className="header__description">
                Transform the chaos of managing customer relationships into streamlined and organized processes,
                leading to thriving business growth.
            </p>
            <div className="header__buttons-wrapper">
                <Button>Get started</Button>
                <Button variant="outline">Learn more</Button>
            </div>
        </header>
    )
}

export default MainScreen

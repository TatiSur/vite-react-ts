import './App.scss'
import MainTitle from '@components/mainTitle/MainTitle'
import Button from '@components/button/Button'
import Navbar from '@components/navbar/Navbar'
import { LogoIcon } from '@assets/index'
import { features } from '@data/index'

function App() {

    return (
        <div>
            <main className="main">
                <Navbar/>
                <div className="main__title-wrapper">
                    <MainTitle>
                        Organize. Streamline. Thrive.
                    </MainTitle>
                </div>
                <p className="main__description">
                    Transform the chaos of managing customer relationships into streamlined and organized processes,
                    leading to thriving business growth.
                </p>
                <div className="main__buttons-wrapper">
                    <Button>Get started</Button>
                    <Button variant="outline">Learn more</Button>
                </div>
            </main>

            <section className="features">
                <h2 className="features__heading">
                    Discover our powerful features
                    <br/>
                    for streamlined and efficient CRM management
                </h2>

                <div className="features__content">
                    <div className='features__img'>
                        <LogoIcon className="features__logo"/>
                    </div>
                    <div className='features__list'>
                        {features.map(feature => (
                            <div key={feature.id} className='features__item'>
                                <h3 className='features__item-title'>
                                    {feature.title}
                                </h3>
                                <p className='features__item-desc'>
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App

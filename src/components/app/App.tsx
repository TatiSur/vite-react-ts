import './App.scss'
import MainScreen from '@components/mainScreen/MainScreen'
import FeaturesSection from '@components/section/featuresSection/FeaturesSection'
import PricingScreen from '@components/section/pricingSection/PricingScreen'
import TestimonialsSection from '@components/section/testimonialsSection/TestimonialsSection'
import Footer from '@components/footer/Footer'

function App() {

    return (
        <>
            <MainScreen/>
            <main>
                <FeaturesSection/>
                <PricingScreen/>
                <TestimonialsSection/>
            </main>
            <Footer/>
        </>
    )
}

export default App

import './App.scss'
import MainScreen from '@components/section/mainScreen/MainScreen'
import FeaturesSection from '@components/section/featuresSection/FeaturesSection'
import PricingScreen from '@components/section/pricingSection/PricingScreen'
import TestimonialsSection from '@components/section/testimonialsSection/TestimonialsSection'
import ContactUsSection from '@components/section/contactUsSection/ContactUsSection'
import Footer from '@components/footer/Footer'

function App() {

    return (
        <>
            <MainScreen/>
            <main>
                <FeaturesSection/>
                <PricingScreen/>
                <TestimonialsSection/>
                <ContactUsSection/>
            </main>
            <Footer/>
        </>
    )
}

export default App

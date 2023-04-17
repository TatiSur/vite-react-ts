import { pricing } from '@data/index'
import './PricingSection.scss'
import SectionTitle from '@components/ui/sectionTitle/SectionTitle'

function PricingSection(): JSX.Element {

    return (
        <section className='pricing-section' id='pricing'>
            <SectionTitle colors={{ text: '#aa9eb5', first: '#FF0080', second: '#7928CA' }}>
                Pricing
            </SectionTitle>
            <h3 className='pricing-section__subtitle'>
                Choose the plan that fits your needs
                <br/>
                Our plans are designed to help your business grow
            </h3>
            <p className='pricing-section__desc'>
                We offer flexible pricing plans that cater to businesses of all sizes. Whether you're a small startup or a large corporation, we have a plan that fits your needs.
            </p>

            <div className='pricing-section__price-cards'>
                {pricing.map(item => (
                    <div key={item.id} className='pricing-section__price-card'>
                        <h5 className='pricing-section__price-card-name'>
                            {item.name}
                        </h5>
                        <p className='pricing-section__price-card-desc'>
                            {item.desc}
                        </p>
                        <div className='pricing-section__price-card-included'>
                            Features include <span>{item.included}</span>
                        </div>
                        <div className='pricing-section__price-card-price'>
                            Price: <span>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>

            <p className='pricing-section__desc'>
                All plans come with a 14-day free trial. Upgrade or downgrade at any time.
            </p>
            <p className='pricing-section__call-to-action'>
                Choose your plan now and start growing your business with our powerful CRM.
            </p>
        </section>
    )
}

export default PricingSection

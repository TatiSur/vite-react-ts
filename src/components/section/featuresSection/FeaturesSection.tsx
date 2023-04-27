import { features } from '@data/index'
import './FeaturesSection.scss'
import SectionTitle from '@components/ui/sectionTitle/SectionTitle'

function FeaturesSection(): JSX.Element {

    return (
        <section className="features" id="features">
            <SectionTitle>
                Features
            </SectionTitle>
            <h3 className="features__subtitle">
                Discover our powerful features
                for streamlined and efficient CRM management
            </h3>

            <div className="features__content">
                <div className="features__list">
                    {features.map(feature => (
                        <div key={feature.id} className="features__item">
                            <h3 className="features__item-title">
                                {feature.title}
                            </h3>
                            <p className="features__item-desc">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection

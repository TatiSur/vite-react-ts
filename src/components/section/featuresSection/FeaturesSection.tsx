import { features } from '@data/index'
import './FeaturesSection.scss'
import SectionTitle from '@components/ui/sectionTitle/SectionTitle'
import FeatureCard from '@components/ui/featureCard/FeatureCard'

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
                        <FeatureCard
                            key={feature.id}
                            title={feature.title}
                            desc={feature.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection

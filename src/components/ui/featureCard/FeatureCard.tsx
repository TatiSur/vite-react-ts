import './FeatureCard.scss'
import { FC } from 'react'

interface FeatureCardProps {
    title: string
    desc: string
}

const FeatureCard: FC<FeatureCardProps> = ({ title, desc }) => {

    return (
        <div className="feature-card">
            <h4 className='feature-card__title'>
                {title}
            </h4>
            <p className='feature-card__desc'>
                {desc}
            </p>
        </div>
    )
}

export default FeatureCard

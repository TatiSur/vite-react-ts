import './TestimonialsSection.scss'
import { testimonials } from '@data/index'
import SectionTitle from '@components/ui/sectionTitle/SectionTitle'


function TestimonialsSection(): JSX.Element {

    return (
        <section className="testimonials-section" id="testimonials">
            <SectionTitle colors={{ text: '#d5bbbb', first: '#F9CB28', second: '#FF4D4D' }}>
                Testimonials
            </SectionTitle>
            <h3 className='testimonials-section__subtitle'>
                Don't just take our word for it - hear what our customers have to say!
            </h3>
            <div className='testimonials-section__cards'>
                {testimonials.map(({ id, text, author, position }) => (
                    <div key={id} className='testimonials-section__card'>
                        <div className='testimonials-section__card-text'>{text}</div>
                        <div className='testimonials-section__card-author'>{author}</div>
                        <div className='testimonials-section__card-position'>{position}</div>
                    </div>
                ))}
            </div>
            <h4 className='testimonials-section__call-to-action'>
                Join these satisfied customers and start using our CRM today!
            </h4>
        </section>
    )
}

export default TestimonialsSection

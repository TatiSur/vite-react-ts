import './ContactUsSection.scss'
import SectionTitle from '@components/ui/sectionTitle/SectionTitle'

function ContactUsSection(): JSX.Element {

    return (
        <section className="contact-us-section" id="contact-us">
            <SectionTitle>
                Contact us
            </SectionTitle>
            <h3 className="contact-us-section__subtitle">
                We'd love to hear from you!
                <br/>
                If you have any questions or comments about our CRM, feel free to get in touch with us.
            </h3>

            <div>

            </div>
        </section>
    )
}

export default ContactUsSection

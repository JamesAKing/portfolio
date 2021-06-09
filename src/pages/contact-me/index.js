import './index.scss';
import SectionHeader from '../../components/section-header/SectionHeader';
import ContacrtMeForm from '../../components/contact-me-form/ContactMeForm';

function ContactMePage() {
    return (
        <main className="contact-pg">
            <section className="contact-pg__content">
                <SectionHeader heading="get in touch!"/>
                <ContacrtMeForm />
                {/* <address className="address"> 
                    <span></span>
                    <a className="address__email" href="mailto:james_andrew_king@hotmail.co.uk">james_andrew_king@hotmail.co.uk</a>
                </address> */}

            </section>
            
            
            
        </main>
    );
}

export default ContactMePage;
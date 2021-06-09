import './index.scss';
import { emailAddress, myGithubURL, myLinkedinURL } from '../../utilities/URLS';
import SectionHeader from '../../components/section-header/SectionHeader';
// import ContacrtMeForm from '../../components/contact-me-form/ContactMeForm';
import ContactAddress from '../../components/contact-me-address/ContactAddress';
import GithubIconAlt from '../../assets/icons/github-alt.svg';
import LinkedinIconAlt from '../../assets/icons/linkedin-alt.svg';
import EmailAlt from '../../assets/icons/email-alt.svg';


function ContactMePage() {

    return (
        <main className="contact-pg">
            <section className="contact-pg__content">
                <SectionHeader heading="get in touch!"/>
                {/* <ContacrtMeForm /> */}
                <ContactAddress 
                    addressIcon={EmailAlt}
                    addressURL={`mailto:${emailAddress}`}
                    addressText={emailAddress}
                />
                <ContactAddress 
                    addressIcon={GithubIconAlt}
                    addressURL={myGithubURL}
                    addressText={myGithubURL}
                />
                <ContactAddress 
                    addressIcon={LinkedinIconAlt}
                    addressURL={myLinkedinURL}
                    addressText={myLinkedinURL}
                />
            </section>
        </main>
    );
}

export default ContactMePage;
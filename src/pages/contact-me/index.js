import './index.scss';
import { emailAddress, myGithubURL, myLinkedinURL } from '../../utilities/URLS';
import SectionHeader from '../../components/section-header/SectionHeader';
// import ContacrtMeForm from '../../components/contact-me-form/ContactMeForm';
import ContactAddress from "../../components/contact-me-address/ContactAddress";

function ContactMePage() {

    return (
        <main className="contact-pg">
            <section className="contact-pg__content">
                <SectionHeader heading="get in touch!"/>
                {/* <ContacrtMeForm /> */}
                <ContactAddress 
                    addressTitle="EMAIL"
                    addressURL={`mailto:${emailAddress}`}
                    addressText={emailAddress}
                />
                <ContactAddress 
                    addressTitle="GITHUB"
                    addressURL={myGithubURL}
                    addressText={myGithubURL}
                />
                <ContactAddress 
                    addressTitle="LINKEDIN"
                    addressURL={myLinkedinURL}
                    addressText={myLinkedinURL}
                />
            </section>
        </main>
    );
}

export default ContactMePage;
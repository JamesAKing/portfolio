import "./index.scss";
import { myGithubURL, myLinkedinURL } from "../../utilities/URLS";
import SectionHeader from "../../components/section-header/SectionHeader";
import ContactAddress from "../../components/contact-me-address/ContactAddress";
import GithubIconAlt from "../../assets/icons/github-alt.svg";
import LinkedinIconAlt from "../../assets/icons/linkedin-alt.svg";

function ContactMePage() {
  return (
    <main className="contact-pg">
      <section className="contact-pg__content">
        <SectionHeader heading="get in touch!" />
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

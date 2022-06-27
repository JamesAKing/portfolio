import './Footer.scss';
import ThankYou from '../thank-you/ThankYou';
import Logo from '../logo/Logo';
import SocialsNav from '../socials-nav/SocialsNav';
import CopyrightBar from '../copyright-bar/CopyrightBar';

function Footer() {

    return (
        <>
            <ThankYou />
            <footer id="contactMe" className="footer">
                <div className="footer__content">
                    <div className="footer__logo">
                        <Logo alt={true}/>
                    </div>
                    <SocialsNav />
                </div>
                <CopyrightBar />
            </footer>
        </>
    );

}

export default Footer;
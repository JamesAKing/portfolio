import './Footer.scss';
import ThankYou from '../thank-you/ThankYou';
import Logo from '../logo/Logo';
import SocialsNav from '../socials-nav/SocialsNav';

function Footer() {

    return (
        <>
            <ThankYou />
            <footer className="footer">
                <div className="footer__content">
                    <div className="footer__logo">
                        <Logo alt={true}/>
                    </div>
                    <SocialsNav />
                </div>
            </footer>
        </>
    );

}

export default Footer;
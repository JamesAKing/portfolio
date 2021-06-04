import './Footer.scss';
import Logo from '../logo/Logo';
import SocialsNav from '../socials-nav/SocialsNav';

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__logo">
                    <Logo alt={true}/>
                </div>
                <SocialsNav />
            </div>
        </footer>
    );

}

export default Footer;
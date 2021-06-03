import './Footer.scss';
import Logo from '../logo/Logo';

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__content">
                <Logo alt={true}/>

            </div>
        </footer>
    );

}

export default Footer;
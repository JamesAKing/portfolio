import './SocialsNav.scss';
import { mailtoEmailAddress, myGithubURL, myLinkedinURL } from '../../utilities/URLS';
import GithubIcon from '../../assets/icons/github.svg';
import linkedInIcon from '../../assets/icons/linkedin.svg';
import EmailIcon from '../../assets/icons/email.svg';

function SocialsNav() {

    return (
        <nav className="socials">
            <ul className="socials__items">
                <li className="socials__item">
                    <a href={myGithubURL} target="_blank" rel="noreferrer">
                        <img className="icon" src={GithubIcon} alt="github link" />
                    </a>
                </li>
                <li className="socials__item">
                    <a href={myLinkedinURL} target="_blank" rel="noreferrer">
                        <img className="icon" src={linkedInIcon} alt="linkedin link" />
                    </a>
                </li>
                <li className="socials__item">
                    <a href={mailtoEmailAddress} target="_blank" rel="noreferrer">
                        <img className="icon" src={EmailIcon} alt="email" />
                    </a>
                </li>
            </ul>
        </nav>
    );
    
}

export default SocialsNav;
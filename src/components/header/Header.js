import './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import { homeURL, projectsURL, aboutURL, contactMeURL, resumeURL} from '../../utilities/URLS'
import HamburgerMenu from '../hamburger-menu/HamburgerMenu';
// import GithubIcon from '../../assets/icons/github.svg';
// import LinkedInIcon from '../../assets/icons/linkedin.svg';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <Link className="header__logo-link" to={homeURL}>
                    <h1>JK</h1>
                </Link>
            </div>
            <HamburgerMenu />
        </header>
    );
}

export default Header;
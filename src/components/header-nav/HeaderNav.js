import './HeaderNav.scss';
import { NavLink } from 'react-router-dom';
import { homeURL, aboutURL, contactMeURL } from '../../utilities/URLS';
// import GithubIcon from '../../assets/icons/github.svg';
// import LinkedInIcon from '../../assets/icons/linkedin.svg';

function HeaderNav() {

    return (
        <nav className="header-nav">
            <ul className="header-nav__items">
                <li className="header-nav__item">
                    <NavLink exact to={homeURL} className="header-nav__link" activeClassName="header-nav__link--active">HOME</NavLink>
                </li>
                {/* <li className="header-nav__item">
                    <NavLink exact to={projectsURL} className="header-nav__link" activeClassName="header-nav__link--active">PROJECTS</NavLink>
                </li> */}
                <li className="header-nav__item">
                    <NavLink exact to={aboutURL} className="header-nav__link" activeClassName="header-nav__link--active">ABOUT ME</NavLink>
                </li>
                <li className="header-nav__item">
                    <NavLink exact to={contactMeURL} className="header-nav__link" activeClassName="header-nav__link--active">CONTACT ME</NavLink>
                </li>
            </ul>
        </nav>
    );

}

export default HeaderNav;
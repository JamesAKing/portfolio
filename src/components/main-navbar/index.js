import './index.scss';
import { NavLink } from 'react-router-dom';
import { homeURL, aboutURL, resumeURL, projectsURL, contactMeURL } from '../../utilities/URLS';


function MainNavbar() {
    return (
        <nav className="main-nav">
            <ul className="main-nav__items">
                <li className="main-nav__item">
                    <NavLink className="main-nav__link" to={homeURL} activeClassName="">
                        HOME
                    </NavLink>
                </li>
                <li className="main-nav__item">
                    <NavLink className="main-nav__link" to={aboutURL} activeClassName="">
                        ABOUT
                    </NavLink>
                </li>
                <li className="main-nav__item">
                    <NavLink className="main-nav__link" to={projectsURL} activeClassName="">
                        PROJECTS
                    </NavLink>
                </li>
                <li className="main-nav__item">
                    <NavLink className="main-nav__link" to={contactMeURL} activeClassName="">
                        CONTACT ME
                    </NavLink>
                </li>
                <li className="main-nav__item">
                    <NavLink className="main-nav__link" to={resumeURL} activeClassName="">
                        RESUME
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default MainNavbar;
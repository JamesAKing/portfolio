import './HiddenMenu.scss';
import { NavLink } from 'react-router-dom';
import { homeURL, aboutURL, contactMeURL } from '../../utilities/URLS';

function HiddenMenu({ setMenuActive }) {

    return (
        <div className="hidden-menu">
            <button className="hidden-menu__btn" type="button" onClick={() => setMenuActive(false)}>X</button>
            <nav className="hidden-menu__nav">
                <ul className="hidden-menu__items">
                    <li className="hidden-menu__item">
                        <NavLink exact to={homeURL} className="hidden-menu__link" activeClassName="hidden-menu__link--active" onClick={() => setMenuActive(false)}>HOME</NavLink>
                    </li>
                    {/* <li className="hidden-menu__item">
                        <NavLink exact to={projectsURL} className="hidden-menu__link" activeClassName="hidden-menu__link--active" onClick={() => setMenuActive(false)}>PROJECTS</NavLink>
                    </li> */}
                    <li className="hidden-menu__item">
                        <NavLink exact to={aboutURL} className="hidden-menu__link" activeClassName="hidden-menu__link--active" onClick={() => setMenuActive(false)}>ABOUT ME</NavLink>
                    </li>
                    <li className="hidden-menu__item">
                        <NavLink exact to={contactMeURL} className="hidden-menu__link" activeClassName="hidden-menu__link--active" onClick={() => setMenuActive(false)}>CONTACT ME</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default HiddenMenu;
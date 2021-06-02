import './HeaderNav.scss';
import { NavLink } from 'react-router-dom';
// import GithubIcon from '../../assets/icons/github.svg';
// import LinkedInIcon from '../../assets/icons/linkedin.svg';

function HeaderNav() {

    return (
        <nav className="header-nav">
            <ul className="header-nav__items">
                <li className="header-nav__item">
                    <NavLink exact to="/" className="header-nav__link" activeClassName="header-nav__link--active">HOME</NavLink>
                </li>
                <li className="header-nav__item">
                    <NavLink exact to="/link2" className="header-nav__link" activeClassName="header-nav__link--active">LINK 2</NavLink>
                </li>
                <li className="header-nav__item">
                    <NavLink exact to="/link3" className="header-nav__link" activeClassName="header-nav__link--active">LINK 3</NavLink>
                </li>
            </ul>
        </nav>
    );

}

export default HeaderNav;
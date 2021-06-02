import './Header.scss';
import Logo from '../logo/Logo';
import HamburgerMenu from '../hamburger-menu/HamburgerMenu';
import HeaderNav from '../header-nav/HeaderNav';

function Header() {
    return (
        <header className="header">
            <div className="header__content">
                <Logo />
                <HamburgerMenu />
                <HeaderNav />
            </div>
        </header>
    );
}

export default Header;
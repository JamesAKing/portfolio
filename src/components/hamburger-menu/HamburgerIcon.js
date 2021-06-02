import './HamburgerIcon.scss';

function HamburgerIcon({ setMenuActive }) {

    return (
        <div className="hamburger-icon" onClick={() => setMenuActive(true)}>
            <div className="hamburger-icon__line"></div>
            <div className="hamburger-icon__line"></div>
            <div className="hamburger-icon__line"></div>
        </div>
    );

}

export default HamburgerIcon;
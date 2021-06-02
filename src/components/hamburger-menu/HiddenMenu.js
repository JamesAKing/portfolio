import './HiddenMenu.scss';
// import { NavLink } from 'react';

function HiddenMenu({ setMenuActive }) {

    return (
        <div className="hidden-menu">
            <button className="hidden-menu__btn" type="button" onClick={() => setMenuActive(false)}>X</button>
        </div>
    );

}

export default HiddenMenu;
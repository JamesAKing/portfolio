import './HamburgerMenu.scss';
import { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import HiddenMenu from './HiddenMenu';

function HamburgerMenu() {

    const [ menuActive, setMenuActive ] = useState(false);

    return (
        <div className="hamburger-menu">
            <HamburgerIcon setMenuActive={setMenuActive}/>
            {menuActive && <HiddenMenu setMenuActive={setMenuActive}/>}
        </div>
    );

}

export default HamburgerMenu;
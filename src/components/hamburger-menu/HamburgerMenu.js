import './HamburgerMenu.scss';
import { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import HiddenMenu from './HiddenMenu';

function HamburgerMenu() {

    const [ menuActive, setMenuActive ] = useState(true);

    return (
        <div className="hamburger-menu">
            <HamburgerIcon setMenuActive={setMenuActive}/>
            {menuActive && <HiddenMenu setMenuActive={setMenuActive}/>}
        </div>
    );

}

export default HamburgerMenu;
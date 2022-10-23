import "./HamburgerMenu.scss";
import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import HiddenMenu from "./HiddenMenu";

function HamburgerMenu() {
  const [menuActive, setMenuActive] = useState(true);

  return (
    <div className="hamburger-menu">
      <HamburgerIcon menuActive={menuActive} setMenuActive={setMenuActive} />
      <HiddenMenu menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>
  );
}

export default HamburgerMenu;

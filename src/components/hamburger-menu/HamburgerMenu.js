import "./HamburgerMenu.scss";
import { useEffect, useState } from "react";
import HiddenMenu from "./HiddenMenu";

import { IoIosMenu } from "react-icons/io";

function HamburgerMenu() {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    /** Prevent body from scrolling when modal is open */
    const body = document.body;

    if (menuActive) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "unset";
    }
  }, [menuActive]);

  return (
    <div className="hamburger-menu">
      <button
        className={`hamburger-menu__open-btn ${
          menuActive ? "rotate90" : "rotate0"
        }`}
        onClick={() => setMenuActive(true)}
      >
        <IoIosMenu />
      </button>
      <HiddenMenu menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>
  );
}

export default HamburgerMenu;

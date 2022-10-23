import "./HamburgerIcon.scss";

function HamburgerIcon({ menuActive, setMenuActive }) {
  return (
    <div
      className={`hamburger-icon ${menuActive ? "rotate90" : "rotate0"}`}
      onClick={() => setMenuActive(true)}
    >
      <div className="hamburger-icon__line"></div>
      <div className="hamburger-icon__line"></div>
      <div className="hamburger-icon__line"></div>
    </div>
  );
}

export default HamburgerIcon;

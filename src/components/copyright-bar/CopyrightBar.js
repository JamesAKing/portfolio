import "./CopyrightBar.scss";
import CopyrightIcon from "../../assets/icons/Copyright.svg";

function CopyrightBar() {
  return (
    <div className="copyright-bar">
      <div className="copyright-bar__text-icon-container">
        <img
          className="copyright-bar__icon"
          src={CopyrightIcon}
          alt="copyright"
        />
        <p className="copyright-bar__text">
          {new Date().getFullYear() || 2022} JAMES KING
        </p>
      </div>
      <p className="copyright-bar__text">All rights reserved</p>
    </div>
  );
}

export default CopyrightBar;

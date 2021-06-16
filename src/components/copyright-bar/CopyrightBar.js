import './CopyrightBar.scss';
import CopyrightIcon from '../../assets/icons/Copyright.svg';

function CopyrightBar() {
    return (
        <div className="copyright-bar">
            <p className="copyright-bar__text"><img className="copyright-bar__icon" src={CopyrightIcon} alt="copyright" />2021 JAMES KING</p>
            <p className="copyright-bar__text">All rights reserved</p>
            
        </div>
    );
}

export default CopyrightBar;
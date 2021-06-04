import './SocialsNav.scss';
import GithubIcon from '../../assets/icons/github.svg';
import linkedInIcon from '../../assets/icons/linkedin.svg';

function SocialsNav() {
    return (
        <nav className="socials">
            <ul className="socials__items">
                <li className="socials__item">
                    <a href="https://github.com/JamesAKing">
                        <img className="icon socials__icon" src={GithubIcon} alt="github link" />
                    </a>
                </li>
                <li className="socials__item">
                    <a href="#">
                        <img className="icon socials__icon" src={linkedInIcon} alt="linkedin link" />
                    </a>
                </li>
                <li className="socials__item">
                    <a href="#">
                        <img className="icon socials__icon" src="#" alt="third link" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default SocialsNav;
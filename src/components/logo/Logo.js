import "./Logo.scss";
import { Link } from 'react-router-dom';
import { homeURL } from '../../utilities/URLS';

function Logo({ alt }) {

    return (
        <div className={`logo${alt ? " logo--alt" : ""}`}>
            <Link className={`logo__link${alt ? " logo__link--alt" : ""}`} to={homeURL}>
                <h1>JK</h1>
            </Link>
        </div>
    );

}

export default Logo;
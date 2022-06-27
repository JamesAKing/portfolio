import './ThankYou.scss';
import { Link } from 'react-router-dom';
import { contactMeURL } from '../../utilities/URLS';

function ThankYou() {
    return (
        <section className="thank-you">
            <div className="thank-you__content">
                <div>
                    <h2 className="thank-you__text">
                        <Link to={contactMeURL} className="thank-you__text thank-you__text--highlight">DROP ME A LINE,</Link> I'D LIKE TO HEAR FROM YOU
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default ThankYou;
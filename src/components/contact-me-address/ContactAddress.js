import './ContactAddress.scss';
import HexagonGraphic from '../hexagon-graphic/HexagonGraphic';

function ContactAddress({ addressIcon, addressURL, addressText }) {

    return (
        <address className="address"> 
            <img className="icon address__icon" src={addressIcon} alt={addressText} />
            <a className="address__url" href={addressURL} target="_blank" rel="noreferrer">{addressText}</a>
            <div className="address__hexagon-graphic">
                <HexagonGraphic />
            </div>
        </address>
    );
    
}

export default ContactAddress;
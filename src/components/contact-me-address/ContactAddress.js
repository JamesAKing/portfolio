import './ContactAddress.scss';
import HexagonGraphic from '../hexagon-graphic/HexagonGraphic';

function ContactAddress({ addressTitle, addressURL, addressText }) {

    return (
        <address className="address"> 
            <h2 className="address__title">{`${addressTitle}:`}</h2>
            <a className="address__url" href={addressURL}>{addressText}</a>
            <div className="address__hexagon-graphic">
                <HexagonGraphic />
            </div>
        </address>
    );
    
}

export default ContactAddress;
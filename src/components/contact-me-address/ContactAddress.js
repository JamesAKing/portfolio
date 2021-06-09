import './ContactAddress.scss';

function ContactAddress({ addressTitle, addressURL, addressText }) {
    return (
        <address className="address"> 
            <h2 className="address__title">{`${addressTitle}:`}</h2>
            <a className="address__url" href={addressURL}>{addressText}</a>
        </address>
    );
}

export default ContactAddress;
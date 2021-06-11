import './ContactBubble.scss';
import { useState } from 'react';
import SocialsNav from '../socials-nav/SocialsNav';


function ContactBubble() {

    const [ toggleBubble, setToggleBubble ] = useState(false);

    return (
        <aside className={`bubble${toggleBubble ? " bubble--expand" : ""}`} onClick={() => setToggleBubble(!toggleBubble)}>
            <header className={`bubble__canvas${toggleBubble ? " bubble__canvas--expand" : ""}`}>
                <h2 className={`bubble__title${toggleBubble ? " bubble__title--expand" : ""}`}>Get in Touch!</h2>
            </header>
            <div className={`bubble__socials${toggleBubble ? " bubble__socials--expand" : ""}`}>
                <SocialsNav />
            </div>
            
            
        </aside>
    );

}

export default ContactBubble;
import './ContactBubble.scss';
import { useState } from 'react';


function ContactBubble() {

    const [ toggleBubble, setToggleBubble ] = useState(false);

    return (
        <aside className={`bubble${toggleBubble ? " bubble--expand" : ""}`} onClick={() => setToggleBubble(!toggleBubble)}>
            <div className={`bubble__canvas${toggleBubble ? " bubble__canvas--expand" : ""}`}>
                <h2>Contact Me</h2>
            </div>
            
        </aside>
    );

}

export default ContactBubble;
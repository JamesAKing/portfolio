import './ThankYou.scss';

function ThankYou() {
    return (
        <section className="thank-you">
            <div className="thank-you__content">
                <div>
                    <h2 className="thank-you__text">
                        <span className="thank-you__text--highlight">DROP ME A LINE,</span> I'D LIKE TO HEAR FROM YOU
                    </h2>
                </div>
                {/* <div className="thank-you__text thank-you__msg-container">
                    <img src="#" alt="random" />
                    <p className="thank-you__msg">...and thank you for scrolling to the bottom!</p>
                </div> */}
            </div>
        </section>
    );
}

export default ThankYou;
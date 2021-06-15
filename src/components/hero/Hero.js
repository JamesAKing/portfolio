import './Hero.scss';

function Hero() {

    return (
        <section className="hero">
            <div className="hero__content">
                <div className="hero__heading">
                    <h1 className="hero__text">FULL STACK DEVELOPER</h1>
                    <p>MY NAME IS</p>
                    <p className="hero__name hero__text">JAMES KING</p>
                    <div className="hero__line"></div>
                </div>
            </div>
        </section>
    );
    
}

export default Hero;
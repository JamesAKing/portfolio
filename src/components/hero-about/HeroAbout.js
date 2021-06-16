import './HeroAbout.scss';
import profilePic from '../../assets/images/profile-small.png';

function HeroAbout() {
    return (
        <section className="about-hero">
            <div className="about-hero__content">
                <div className="about-hero__column">
                    <img className="about-hero__profile-pic" src={profilePic}  alt="This is me" />
                </div>
                <div className="about-hero__column">
                    <h1>I'm James,</h1>
                    <p>Thank you for stopping by...</p>
                </div>
            </div>
        </section>
    );
}

export default HeroAbout;
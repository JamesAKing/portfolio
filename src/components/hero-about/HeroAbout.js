import './HeroAbout.scss';
import profilePic from '../../assets/images/temp-profile-img.jpg';

function HeroAbout() {
    return (
        <section className="about-hero">
            <div className="about-hero__column">
                <img className="about-hero__profile-pic" src={profilePic}  alt="This is me" />
            </div>
            <div className="about-hero__column">
                <h1>I'm James</h1>
            </div>
        </section>
    );
}

export default HeroAbout;
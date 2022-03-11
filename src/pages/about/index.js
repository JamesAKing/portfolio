import './index.scss';
import HeroAbout from '../../components/hero-about/HeroAbout';
import Skills from '../../components/skills/Skills';
import { CatalystVRWebsiteLink } from '../../utilities/URLS'

function AboutPage() {
    return (
        <main className="about-pg">
            <HeroAbout />
            <section className="bio">
                <p className="bio__text">I'm a Full Stack Web Developer  located in the UK...</p>
                <p className="bio__text">as a tech lover with an analytic mind, I have always been interested in knowing how things work...</p>
                <p className="bio__text">and with close to 8 years experience in Real Estate, Sales, and Customer Success, I always enjoyed thinking outside the box to find creative and interesting ways to solve problems...</p>
                <p className="bio__text">I decided to start teaching myself Python in 2018 and was instantly hooked...</p>
                <p className="bio__text">I recently graduated with a diploma in Full Stack Web Development through which I further developed my skills and understanding of key principles and concepts whilst simultaneously applying this knowledge to projects both personal and collaboratively with professionals across multiple disciplines and companies including Google...</p>
                <p className="bio__text">
                    <div>Currently, I am working as a Front End Developer for <a className='bio__link' href={CatalystVRWebsiteLink}>Catalyst VR</a> creating exciting Augmented and Virtual Reality web based experiences for customers across the world...</div>
                </p>
                <p className="bio__text">I am now focusing on combining my years of sales and customer success experience with my developer skill set to build exciting and innovative creations that help solve our everyday problems.</p>
            </section>
            <Skills />
        </main>
    );
}

export default AboutPage;
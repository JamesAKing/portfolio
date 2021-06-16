import './index.scss';
import HeroAbout from '../../components/hero-about/HeroAbout';

function AboutPage() {
    return (
        <main className="about-pg">
            <HeroAbout />
            <section className="bio">
                <p className="bio__text">I'm a Full Stack Web Developer located in Kelowna, British Columbia...</p>
                <p className="bio__text">as a tech lover with an analytic mind, I have always been interested in knowing how things work...</p>
                <p className="bio__text">and with close to 8 years experience in Real Estate, Sales, and Customer Success, I always enjoyed thinking outside the box to find creative and interesting ways to solve problems...</p>
                <p className="bio__text">I started teaching myself Python in 2018 and was instantly hooked...</p>
                <p className="bio__text">I am now focusing on combining my years of sales and customer success experience with my developer skill set to build exciting and innovative creations that help solve our everyday problems.</p>
            </section>
        </main>
    );
}

export default AboutPage;
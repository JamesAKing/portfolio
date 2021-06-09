import './index.scss';
import HeroAbout from '../../components/hero-about/HeroAbout';

function AboutPage() {
    return (
        <main className="about-pg">
            <HeroAbout />
            <section className="bio">
                <p className="bio__text">Hi! Thank you for visiting my site. I'm a Full Stack Web Developer located in Kelowna, British Columbia.</p>
                <p className="bio__text">With close to 8 years experince in Sales and Customer Success, I always enjoyed thinking outside the box to find new and interesting ways to solve problems</p>
                <p className="bio__text">After being introduced to Python in 2018 I was instantly hooked. I am now focusing on Web Development to pursue my passion building things</p>
            </section>
        </main>
    );
}

export default AboutPage;
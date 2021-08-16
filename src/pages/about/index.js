import './index.scss';
import HeroAbout from '../../components/hero-about/HeroAbout';
import Skills from '../../components/skills/Skills';

function AboutPage() {
    return (
        <main className="about-pg">
            <HeroAbout />
            <section className="bio">
                <p className="bio__text">I'm a Full Stack Web Developer located in Kelowna, British Columbia and relocating back to the UK in September...</p>
                <p className="bio__text">as a tech lover with an analytic mind, I have always been interested in knowing how things work...</p>
                <p className="bio__text">and with close to 8 years experience in Real Estate, Sales, and Customer Success, I always enjoyed thinking outside the box to find creative and interesting ways to solve problems...</p>
                <p className="bio__text">I decided to start teaching myself Python in 2018 and was instantly hooked...</p>
                <p className="bio__text">I recently graduated with a diploma in Full Stack Web Development through which I further developed my skills and understanding of key principles and concepts whilst simultaneously applying this knowledge to projects both personal and collaboratively with professionals across multiple disciplines and companies including Google...</p>
                <p className="bio__text">Currently, I am working as a Full Stack Developer on several projects including Climate Mind, an open source, Stanford University backed project that facilitates constructive conversations on Climate Change through education and connection based on personal values...</p>
                <p className="bio__text">I am now focusing on combining my years of sales and customer success experience with my developer skill set to build exciting and innovative creations that help solve our everyday problems.</p>
            </section>
            <Skills />
        </main>
    );
}

export default AboutPage;
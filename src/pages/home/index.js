import './index.scss';
import Hero from '../../components/hero/Hero';
import ProjectsHome from '../../components/projects-home/ProjectsHome';
import Skills from '../../components/skills/Skills';

function HomePage() {

    return (
        <main className="home-pg">
            <Hero />
            <ProjectsHome />
            <Skills />
        </main>
    );

}

export default HomePage;
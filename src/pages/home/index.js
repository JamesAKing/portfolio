import './index.scss';
import Hero from '../../components/hero/Hero';
import ProjectsHome from '../../components/projects-home/ProjectsHome';

function HomePage() {

    return (
        <main className="home-pg">
            <Hero />
            <ProjectsHome />
        </main>
    );

}

export default HomePage;
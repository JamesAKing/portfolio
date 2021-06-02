import './ProjectsHome.scss';
import SectionHeader from '../section-header/SectionHeader';
import ProjectCards from '../project-cards/ProjectCards';

function ProjectsHome() {
    return (
        <section className="projects-home">
            <SectionHeader heading="PROJECTS" alt={true}/>
            <div>
                <p>WONDERING WHAT I DO WITH MY TIME?</p>
            </div>
            <ProjectCards />
        </section>
    );
}

export default ProjectsHome;
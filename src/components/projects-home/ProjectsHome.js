import './ProjectsHome.scss';
import { Link } from 'react-router-dom';
import SectionHeader from '../section-header/SectionHeader';
import ProjectCards from '../project-cards/ProjectCards';
import { contactMeURL } from '../../utilities/URLS';

function ProjectsHome() {
    return (
        <section className="projects-home">
            <SectionHeader heading="PROJECTS" alt={true}/>
            <p className="projects-home__text">WONDERING WHAT I DO WITH MY TIME?</p>
            <ProjectCards />
            <p className="projects-home__text">Due to the nature of the work, I am not able to show the code for all projects. If you have any questions regarding the above projects, please feel free to <Link to={contactMeURL} className="thank-you__text thank-you__text--highlight">react out!</Link></p>
        </section>
    );
}

export default ProjectsHome;
import './ProjectCards.scss';
import ProjectCard from '../project-card/ProjectCard';

function ProjectCards() {
    return (
        <ul className="project-cards">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </ul>
    );
}

export default ProjectCards;
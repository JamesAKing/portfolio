import './ProjectCards.scss';
import ProjectCard from '../project-card/ProjectCard';

import { projectsArr } from '../../assets/data/projects';

function ProjectCards() {

    return (
        <ul className="project-cards">
            {projectsArr.map((project, i) => {
                return (
                    <ProjectCard
                        key={i}
                        // projectTitle={project.projectTitle}
                        // projectIcon={project.projectLogo}
                        // githubURL={project.githubURL}
                        // websiteURL={project.websiteURL}
                        project={project}
                    />
                )
            })}
        </ul>
    );
    
}

export default ProjectCards;
import './ProjectCards.scss';
import { myGithubURL } from '../../utilities/URLS';
import ProjectCard from '../project-card/ProjectCard';

import { projectsArr } from '../../assets/data/projects';

function ProjectCards() {

    return (
        <ul className="project-cards">
            {projectsArr.map((project, i) => {
                return (
                    <ProjectCard
                        key={i}
                        projectTitle={project.projectTitle}
                        githubURL={project.githubURL}
                        websiteURL={project.websiteURL}
                    />
                )
            })}
        </ul>
    );
    
}

export default ProjectCards;
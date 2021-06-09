import './ProjectCards.scss';
import { myGithubURL } from '../../utilities/URLS';
import ProjectCard from '../project-card/ProjectCard';

function ProjectCards() {

    return (
        <ul className="project-cards">
            <ProjectCard 
                projectName="cuby-Fi" 
                // websiteURL={null} 
                githubURL={`${myGithubURL}/cuby-Fi`}
            />
            <ProjectCard 
                projectName="Climate Mind" 
                websiteURL={"https://climatemind.org/"} 
                // githubURL={null}
            />
            <ProjectCard 
                projectName="Portfolio" 
                // websiteURL={null} 
                githubURL={`${myGithubURL}/portfolio`}
            />
        </ul>
    );
    
}

export default ProjectCards;
import './ProjectCards.scss';
import ProjectCard from '../project-card/ProjectCard';

function ProjectCards() {

    return (
        <ul className="project-cards">
            <ProjectCard 
                projectName="cuby-Fi" 
                websiteURL={null} 
                githubURL={"https://github.com/JamesAKing/cuby-Fi"}
            />
            <ProjectCard 
                projectName="Climate Mind" 
                websiteURL={"https://climatemind.org/"} 
                githubURL={null}
            />
            <ProjectCard 
                projectName="Portfolio" 
                websiteURL={null} 
                githubURL={"https://github.com/JamesAKing/portfolio"}
            />
        </ul>
    );

}

export default ProjectCards;
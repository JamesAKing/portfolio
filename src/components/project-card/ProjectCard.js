import './ProjectCard.scss';
import GithubIcon from '../../assets/icons/github.svg'
import DefaultWebsiteIcon from '../../assets/icons/default-website.svg'; 

function ProjectCard({ projectTitle, projectIcon, websiteURL , githubURL }) {

    if (websiteURL && !projectIcon) projectIcon = DefaultWebsiteIcon;

    return (
        <li className="project-card">
            <h3 className="project-card__title">{projectTitle}</h3>           
            <div className="project-card__links">
                {websiteURL && 
                <a className="project-card__link" href={websiteURL} target="_blank" rel="noreferrer">
                    <img className="project-card__icon" src={projectIcon} alt="see my code at GitHub" />
                    <p className>View Site</p>
                </a>}
                {githubURL &&
                <a className="project-card__link" href={githubURL} target="_blank" rel="noreferrer">
                    <img className="project-card__icon" src={GithubIcon} alt="see my code at GitHub" />
                    <p className>View Code @ GitHub</p>
                </a>}
            </div>
        </li>

    );

}

export default ProjectCard;
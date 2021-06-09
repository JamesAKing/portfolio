import './ProjectCard.scss';
// import { Link } from 'react-router-dom';
import GithubIcon from '../../assets/icons/github.svg'

function ProjectCard({ projectName, websiteURL , githubURL }) {

    return (
        <li className="project-card">
            <h3 className="project-card__title">{projectName}</h3>
            <div className="project-card__links">
                {websiteURL && 
                <a className="project-card__link" href={websiteURL} target="_blank">
                    <img className="project-card__icon" src={GithubIcon} alt="see my code at GitHub" />
                    <p className>View Site</p>
                </a>}
                <a className="project-card__link" href={githubURL} target="_blank">
                    <img className="project-card__icon" src={GithubIcon} alt="see my code at GitHub" />
                    <p className>View Code @ GitHub</p>
                </a>
            </div>
        </li>

    );

}

export default ProjectCard;
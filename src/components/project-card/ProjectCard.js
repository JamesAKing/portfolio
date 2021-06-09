import './ProjectCard.scss';
// import { Link } from 'react-router-dom';
import GithubIcon from '../../assets/icons/github.svg'

function ProjectCard() {

    return (
        <li className="project-card">
            <h3 className="project-card__title">Project</h3>
            <div className="project-card__links">
                <a className="project-card__link" href="#">
                    <img className="project-card__icon" src={GithubIcon} alt="see my code at GitHub" />
                    <p className>Check out my Code at GitHub</p>
                </a>
                <a className="project-card__link" href="#">
                    <img className="project-card__icon" src={GithubIcon} alt="see my code at GitHub" />
                    <p className>Check out my Code at GitHub</p>
                </a>
            </div>
        </li>

    );

}

export default ProjectCard;
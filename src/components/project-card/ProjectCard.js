import './ProjectCard.scss';
import { Link } from 'react-router-dom';

function ProjectCard() {

    return (
        <li className="project-card">
            <Link className="project-card__link" to="/">
                cuby-Fi
            </Link>
        </li>
    );

}

export default ProjectCard;
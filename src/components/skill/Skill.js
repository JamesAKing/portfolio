import './Skill.scss';
import HexagonGraphic from '../hexagon-graphic/HexagonGraphic';

function Skill({ skill }) {
    return (
        <li className="skill">
            <p className="skill__name">{skill.toUpperCase()}</p>
            <HexagonGraphic />
        </li>
    );
}

export default Skill;
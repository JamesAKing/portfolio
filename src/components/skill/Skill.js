import './Skill.scss';
import HexagonGraphic from '../hexagon-graphic/HexagonGraphic';

function Skill({ skill, icon }) {

    return (
        <li className="skill">
            <div className="skill__graphic">
                <img className="icon skill__icon" src={icon} alt={skill} />
                <HexagonGraphic />
            </div>
            <p>{skill.toUpperCase()}</p>
        </li>
    );
}

export default Skill;
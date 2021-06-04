import './Skill.scss';

function Skill({ skill }) {
    return (
        <li className="skill">
            <p className="skill__name">{skill.toUpperCase()}</p>
            <div className="skill__graphics">
                <div className="skill__line"></div>
                <div className="skill__hexagons">
                    <div className="skill__hexagon skill__hexagon--outer"></div>
                    <div className="skill__hexagon skill__hexagon--inner"></div>
                </div>
            </div>
                        
        </li>
    );
}

export default Skill;
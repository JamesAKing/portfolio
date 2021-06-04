import './Skill.scss';

function Skill() {
    return (
        <li className="skill">
            <p className="skill__name">React.JS</p>
            {/* Swap to image */}
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
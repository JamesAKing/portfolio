import './SkillsList.scss';
import Skill from '../skill/Skill';

function SkillsList({ listName }) {
    return (
        <>
            <h3>{listName}</h3>
            <ul className="skills-list">
                <Skill />
                <Skill />
                <Skill />
            </ul>
        </>

    );
}

export default SkillsList;
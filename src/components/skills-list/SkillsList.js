import './SkillsList.scss';
import Skill from '../skill/Skill';

function SkillsList({ listName, skillsArr }) {

    return (
        <>
            <h3>{listName}</h3>
            <ul className="skills-list">
                {skillsArr.map((skill, i) => <Skill key={i} skill={skill}/>)}
            </ul>
        </>
    );

}

export default SkillsList;
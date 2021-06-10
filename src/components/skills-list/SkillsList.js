import './SkillsList.scss';
import Skill from '../skill/Skill';

function SkillsList({ listName, skillsArr }) {

    return (
        <>
            <h3 className="skills-list__title">{listName}</h3>
            <ul className="skills-list">
                {skillsArr.map((skill, i) => {
                    return <Skill key={i} skill={skill.skill} icon={skill.icon} />
                })}
            </ul>
        </>
    );

}

export default SkillsList;
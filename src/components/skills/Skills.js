import './Skills.scss';
import { useState } from 'react';
import SectionHeader from '../section-header/SectionHeader';
import SkillsToggle from '../skills-toggle/SkillsToggle';
import SkillsList from '../skills-list/SkillsList';
import { skillsObjFrontend, skillsObjBackend, skillsObjIndustry } from '../../assets/data/skills';

function Skills() {

    const [ selectedSkillsObj, setSelectedSkillsObj ] = useState(skillsObjFrontend);

    const onRadioSelect = e => {
        // setEmptySkillsObj();
        if (e.target.value === 'frontend') return setSelectedSkillsObj(skillsObjFrontend);
        if (e.target.value === 'backend') return setSelectedSkillsObj(skillsObjBackend);
        if (e.target.value === 'industry') return setSelectedSkillsObj(skillsObjIndustry);
    };

    // const setEmptySkillsObj = () => {
    //     setSelectedSkillsObj({
    //         skillsArrName : "", 
    //         skillsArr : []
    //     });
    // }

    return (
        <section className="skills">
            <div className="skills__content">
                <SectionHeader heading="MY SKILLS" />
                <SkillsToggle onRadioSelect={onRadioSelect} selectedSkillsObj={selectedSkillsObj}/>
                <SkillsList selectedSkillsObj={selectedSkillsObj} />
            </div>
        </section>
    );
    
}

export default Skills;
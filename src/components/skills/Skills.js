import './Skills.scss';
import { useState } from 'react';
import SectionHeader from '../section-header/SectionHeader';
import SkillsToggle from '../skills-toggle/SkillsToggle';
import SkillsList from '../skills-list/SkillsList';
import { skillsArrFrontend, skillsArrBackend } from '../../assets/data/skills';

function Skills() {

    const [ selectedSkill, setSelectedSkill ] = useState('frontend');

    const onRadioSelect = e => setSelectedSkill(e.target.value);

    return (
        <section className="skills">
            <div className="skills__content">
                <SectionHeader heading="MY SKILLS" />
                <SkillsToggle onRadioSelect={onRadioSelect} selectedSkill={selectedSkill}/>
                {selectedSkill === 'frontend' ? 
                <SkillsList listName="Front End Skills" skillsArr={skillsArrFrontend}/> : 
                <SkillsList listName="Back End Skills" skillsArr={skillsArrBackend}/>}
            </div>
        </section>
    );
    
}

export default Skills;
import './SkillsToggle.scss';
import { useState } from 'react';
import SkillsToggleForm from '../skills-toggle-form/SkillsToggleForm';

function SkillsToggle() {

    const [ selectedSkill, setSelectedSkill ] = useState('frontend');

    const onRadioSelect = e => {
        setSelectedSkill(e.target.value);
    }

    console.log(selectedSkill)

    return (
        <SkillsToggleForm onRadioSelect={onRadioSelect} selectedSkill={selectedSkill} />
    );

}

export default SkillsToggle;
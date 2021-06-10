import './SkillsToggle.scss';
import SkillsToggleForm from '../skills-toggle-form/SkillsToggleForm';

function SkillsToggle({ onRadioSelect, selectedSkill }) {

    return (
        <div className="skills-toggle">
            <SkillsToggleForm onRadioSelect={onRadioSelect} selectedSkill={selectedSkill} />
        </div>
    );

}

export default SkillsToggle;
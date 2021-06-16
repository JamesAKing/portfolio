import './SkillsToggle.scss';
import SkillsToggleForm from '../skills-toggle-form/SkillsToggleForm';

function SkillsToggle({ onRadioSelect, selectedSkillsObj }) {

    return (
        <div className="skills-toggle">
            <SkillsToggleForm onRadioSelect={onRadioSelect} selectedSkillsObj={selectedSkillsObj} />
        </div>
    );

}

export default SkillsToggle;
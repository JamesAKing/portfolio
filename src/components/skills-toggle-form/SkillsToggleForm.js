import './SkillsToggleForm.scss';

function SkillsToggleForm({ onRadioSelect, selectedSkill }) {

    return (
        <form className="skills-form" name="skillsToggle">
            <label className="skills-form__label" htmlFor="frontend">
                Front End
                <input className="skills-form__radio" type="radio" id="frontend" name="skillsToggle" value="frontend" onChange={onRadioSelect}/>
            </label>
            
            <label className="skills-form__label" htmlFor="backend">
                Back End
                <input className="skills-form__radio" type="radio" id="backend" name="skillsToggle" value="backend" onChange={onRadioSelect}/>
            </label>
        </form>
    );
    
}

export default SkillsToggleForm;
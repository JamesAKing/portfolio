import './SkillsToggleForm.scss';

function SkillsToggleForm({ onRadioSelect, selectedSkillsObj }) {

    return (
        <form className="skills-form" name="skillsToggle">
            <label className={`skills-form__label ${selectedSkillsObj === "frontend" ? "skills-form__label--selected" : ""}`} htmlFor="frontend">
                Front End
                <input className="skills-form__radio" type="radio" id="frontend" name="skillsToggle" value="frontend" onChange={onRadioSelect}/>
            </label>
            <label className={`skills-form__label ${selectedSkillsObj === "backend" ? "skills-form__label--selected" : ""}`} htmlFor="backend">
                Back End
                <input className="skills-form__radio" type="radio" id="backend" name="skillsToggle" value="backend" onChange={onRadioSelect}/>
            </label>
            <label className={`skills-form__label ${selectedSkillsObj === "industry" ? "skills-form__label--selected" : ""}`} htmlFor="industry">
                Industry Best Practices
                <input className="skills-form__radio" type="radio" id="industry" name="skillsToggle" value="industry" onChange={onRadioSelect}/>
            </label>
        </form>
    );

}

export default SkillsToggleForm;
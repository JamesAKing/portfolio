import './SkillsToggleForm.scss';

function SkillsToggleForm({ onRadioSelect, selectedSkillsObj }) {

    const { skillsArrName } = selectedSkillsObj;

    return (
        <form className="skills-form" name="skillsToggle">
            <label className={`skills-form__label ${skillsArrName === "Front End Skills" ? "skills-form__label--selected" : ""}`} htmlFor="frontend">
                Front End
                <input className="skills-form__radio" type="radio" id="frontend" name="skillsToggle" value="frontend" onChange={onRadioSelect}/>
            </label>
            <label className={`skills-form__label ${skillsArrName === "Back End Skills" ? "skills-form__label--selected" : ""}`} htmlFor="backend">
                Back End
                <input className="skills-form__radio" type="radio" id="backend" name="skillsToggle" value="backend" onChange={onRadioSelect}/>
            </label>
            <label className={`skills-form__label ${skillsArrName === "Industry Best Practices" ? "skills-form__label--selected" : ""}`} htmlFor="industry">
                Industry
                <input className="skills-form__radio" type="radio" id="industry" name="skillsToggle" value="industry" onChange={onRadioSelect}/>
            </label>
        </form>
    );

}

export default SkillsToggleForm;
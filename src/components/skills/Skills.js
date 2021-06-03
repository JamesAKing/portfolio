import './Skills.scss';
import SectionHeader from '../section-header/SectionHeader';
import SkillsToggle from '../skills-toggle/SkillsToggle';

function Skills() {
    return (
        <section className="skills">
            <SectionHeader heading="MY SKILLS" />
            <SkillsToggle />
        </section>
    );
}

export default Skills;
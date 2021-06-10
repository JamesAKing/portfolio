import './Skills.scss';
import { useState } from 'react';
import SectionHeader from '../section-header/SectionHeader';
import SkillsToggle from '../skills-toggle/SkillsToggle';
import SkillsList from '../skills-list/SkillsList';
import ReactIcon from '../../assets/icons/react.svg';
import HTMLIcon from '../../assets/icons/html5.svg';
import CSSIcon from '../../assets/icons/css3.svg';
import ExpressIcon from '../../assets/icons/express.svg';
import JavaScriptIcon from '../../assets/icons/javascript.svg';
import NodeIcon from '../../assets/icons/nodedotjs.svg';
import PythonIcon from '../../assets/icons/python.svg';
import reduxIcon from '../../assets/icons/redux.svg';
import TensorFlowIcon from '../../assets/icons/tensorflow.svg';
import { skillsArrFrontend, skillsArrBackend } from '../../assets/data/skills';

function Skills() {

    const [ selectedSkill, setSelectedSkill ] = useState('frontend');

    const onRadioSelect = e => setSelectedSkill(e.target.value);

    // const skillsArrFrontend = ["HTML", "CSS", "JavaScript", "Tensorflow.js", "React.js", "Redux"];
    // const skillsArrBackend = ["Node.js", "Express.js", "Python"];

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
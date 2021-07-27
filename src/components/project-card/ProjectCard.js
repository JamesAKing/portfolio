import './ProjectCard.scss';
import React, { useState } from 'react';
import GithubIcon from '../../assets/icons/github.svg'
import DefaultWebsiteIcon from '../../assets/icons/default-website.svg'; 
import WatchVideoIcon from '../../assets/icons/video-icon.svg';
import ProjectVideo from '../project-video/ProjectVideo';

function ProjectCard({ project }) {
    const { projectTitle, projectLogo, githubURL, websiteURL, projectVideo } = project;

    const [ toggleVideoModel, setToggleVideoModel ] = useState(true);

    const projectIcon = websiteURL && !projectLogo ? DefaultWebsiteIcon : projectLogo;

    return (
        <li className="project-card">
            { toggleVideoModel && <ProjectVideo />}
            <h3 className="project-card__title">{projectTitle}</h3>           
            <div className="project-card__links">
                {websiteURL && 
                <a className="project-card__link" href={websiteURL} target="_blank" rel="noreferrer">
                    <img className="project-card__icon" src={projectIcon} alt={`view ${projectTitle} as a deployed website`} />
                    <p>View Site</p>
                </a>}
                {githubURL &&
                <a className="project-card__link" href={githubURL} target="_blank" rel="noreferrer">
                    <img className="project-card__icon" src={GithubIcon} alt={`see code for ${projectTitle} at GitHub`} />
                    <p>View Code @ GitHub</p>
                </a>}
                {/* {projectVideo &&
                <div className="project-card__link" onClick={() => setToggleVideoModel(!toggleVideoModel)}>
                    <img className="project-card__icon" src={WatchVideoIcon} alt={`watch demo of ${projectTitle}`} />
                    <p>Watch Project Demo</p>
                </div>} */}
            </div>
        </li>
    );

}

export default ProjectCard;
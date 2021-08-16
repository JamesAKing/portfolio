import './ProjectCards.scss';
import React, { useState } from 'react';
import Modal from '../modal/Modal';
import ProjectCard from '../project-card/ProjectCard';
import cubyFiVideo from '../../assets/video/cubiFy.mp4';

import { projectsArr } from '../../assets/data/projects';

function ProjectCards() {
    const [ displayModal, setDisplayModal ] = useState(false);
    // const [ projectVideo, setProjectVideo ] = useState();

    const handleDisplayModal = e => {
        // const { id } = e.target;

        // projectsArr.forEach(project => {
        //     if (project.projectTitle === id) return setProjectVideo(project.projectVideo)
        // })

        setDisplayModal(true);
    };

    return (
        <ul className="project-cards">
            {displayModal &&
                <Modal>
                    <video className="video" controls>
                        <source src={cubyFiVideo} />

                    </video>
                </Modal>
            }
            {projectsArr.map((project, i) => <ProjectCard key={i} project={project} handleDisplayModal={handleDisplayModal} />)}
        </ul>
    );
    
}

export default ProjectCards;
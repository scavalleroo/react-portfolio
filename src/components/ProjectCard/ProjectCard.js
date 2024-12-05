import React, { useState } from 'react';
import './ProjectCard.css';
import ProjectModal from './ProjectModal';
import { sendEventProjectCard, sendEventCloseProjectCard } from '../../utils/analytics';

const ProjectCard = ({ project }) => {
    const [showModal, setShowModal] = useState(false); // Modal visibility state

    const handleOpenModal = () => {
        setShowModal(true);
        sendEventProjectCard(project.title.name);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        sendEventCloseProjectCard(project.title.name);
    };

    return (
        <div>
            <div className="project-card" onClick={handleOpenModal}>
                <img src={require(`../../${project.image}`)} alt={project.title.name} className="project-image" />
                <div className='blueFilter'></div>
                <div className='group'>
                    <div className='title'>{project.title.name}</div>
                    <div className='text'>{project.location}</div>
                </div>
            </div>
            <ProjectModal project={project} show={showModal} onClose={handleCloseModal} />
        </div>
    );
};

export default ProjectCard;

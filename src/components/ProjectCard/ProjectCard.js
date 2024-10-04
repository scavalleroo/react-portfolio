import React, { useState } from 'react';
import './ProjectCard.css';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project }) => {
    const [showModal, setShowModal] = useState(false); // Modal visibility state

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className="project-card" onClick={handleOpenModal}>
                <img src={require(`../../${project.image}`)} alt={project.title.name} className="project-image" />
                <div className='title'>{project.title.name}</div>
                <p>{project.location}</p>
            </div>
            <ProjectModal project={project} show={showModal} onClose={handleCloseModal} />
        </div>
    );
};

export default ProjectCard;

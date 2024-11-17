import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import AppFunctions from '../../utils/AppFunctions';
import externalLink from '../../assets/icons/external-link.png';
import './ProjectCard.css';

const ProjectModal = ({ show, onClose, project }) => {
    const appFunctionsRef = useRef(null);

    const backgroundImage = require(`../../${project.coverImage}`);

    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    const handleEmailClick = () => {
        appFunctionsRef.current.handleEmailClick();
    };

    return ReactDOM.createPortal(
        <div className={`modal-overlay ${show ? 'show' : ''}`}>
            <AppFunctions ref={appFunctionsRef} />
            <div className="modal-content">
                <span className="modal-close" onClick={onClose}>&times;</span>
                <div className='center'>
                    <div className='header' style={divStyle}>
                        <div className='blueFilter'></div>
                        <div className='projTitle'>{project.title.name}</div>
                        <div className='group'>
                            <div className='title'>When</div>
                            <div className='text'>{project.timeframe}</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Where</div>
                            <div className='text'>{project.location}</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Design Concept</div>
                            <div className='text'>{project.designConcept}</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Tags</div>
                            <div className='text'>{project.tags}</div>
                        </div>
                        {project.title.href ? (<div className='playButton' onClick={() => window.open(project.title.href, '_blank')}>{project.title.name} <img src={externalLink} /></div>) : ''}
                    </div>
                    <div className='information'>
                        <div className='details'>
                            <div className='titleDetails'>{project.titleDetails}</div>
                            {project.leftBubbleDescriptions.map((data) => (
                                <div className='project-box' key={data.title}>
                                    <div className='title'>{data.title}</div>
                                    <div className='text'>{data.description}</div>
                                </div>
                            ))}
                            {project.rightBubbleDescriptions.map((data) => (
                                <div className='project-box' key={data.title}>
                                    <div className="title">{data.title}</div>
                                    <div className="text">{data.description}</div>
                                </div>
                            ))}
                        </div>
                        {(
                            project.centralVideo && project.centralVideo !== "" ?
                                <video id="centralVideo" src={require(`../../${project.centralVideo}`)} alt="" className="centralVideo" controls autoPlay muted></video>
                                : project.centralImage && project.centralImage !== "" ?
                                    <img id="centralImage" src={require(`../../${project.centralImage}`)} alt="" className="centralImage" /> : ""
                        )}
                    </div>
                    <div className='callToAction'>
                        <div className='title'>
                            Do you want to know more about {project.title.name}?
                        </div>
                        <div className='buttons'>
                            <div className='rightButton' onClick={handleEmailClick}>
                                Contact Me
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >,
        document.body // Render the modal into the body element
    );
};

export default ProjectModal;

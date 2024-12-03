import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import AppFunctions from '../../utils/AppFunctions';
import externalLink from '../../assets/icons/external-link.png';
import Lottie from "lottie-react";
import scrollAnimation from "../../assets/icons/scroll.json";
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

    console.log(project.descriptions);

    return ReactDOM.createPortal(
        <div className={`modal-overlay ${show ? 'show' : ''}`}>
            <AppFunctions ref={appFunctionsRef} />
            <div className="modal-content">
                <span className="modal-close" onClick={onClose}>&times;</span>
                <div className='center'>
                    <div className='header' style={divStyle}>
                        <div className='text-header'>
                            <div className='blueFilter'></div>
                            {/* <h1 className='case-study-warning'>This case study will be released soon!</h1> */}
                            <div className='projTitle'>{project.title.name}</div>
                            <div className='group'>
                                <div className='title'>Summary</div>
                                <div className='text'>{project.designConcept}</div>
                            </div>
                            <div className='group'>
                                <div className='title'>When</div>
                                <div className='text'>{project.timeframe}</div>
                            </div>
                            <div className='group'>
                                <div className='title'>Where</div>
                                <div className='text'>{project.location}</div>
                            </div>
                            {project.title.href ? (<div className='playButton' onClick={() => window.open(project.title.href, '_blank')}>{project.title.name} <img alt='Project Link' src={externalLink} /></div>) : ''}
                        </div>
                        <div className='scroll'>
                            <div className='scroll-icon'>
                                <Lottie style={{ height: "80px", width: "80px" }} animationData={scrollAnimation} loop={true} autoPlay={true} />
                            </div>
                            <div className='scroll-text'>Scroll to read</div>
                        </div>
                    </div>
                    <div className='information'>
                        {project.descriptions?.length > 0 ? (
                            project.descriptions.map((data, index) => (
                                <div className="project-description" key={index}>
                                    {data.image && <img src={require(`../../${data.image}`)} alt={data.title} />}
                                    <div className="div-description">
                                        <div className="title">{data.title}</div>
                                        <div className="description-text">
                                            {data.description && <div className="text">{data.description}</div>}
                                            {data.list?.points?.length > 0 &&
                                                (data.list.type === 'bullet' ? (
                                                    <ul className="points-list">
                                                        {data.list.points.map((point, index) => (
                                                            <li key={index} className="point">
                                                                {point}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <ol className="points-list">
                                                        {data.list.points.map((point, index) => (
                                                            <li key={index} className="point">
                                                                {point}
                                                            </li>
                                                        ))}
                                                    </ol>
                                                ))}
                                        </div>
                                    </div>
                                    {data.video && <video controls autoPlay={true} muted={true} loop={true}>
                                        <source src={require(`../../${data.video}`)} type="video/mp4" />
                                    </video>}
                                </div>
                            ))
                        ) : (
                            <div>No descriptions available</div>
                        )}

                        {/* <div className='details'>
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
                                    <img alt='Project Demo' id="centralImage" src={require(`../../${project.centralImage}`)} className="centralImage" /> : ""
                        )} */}
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

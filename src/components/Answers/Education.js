import saclay from '../../assets/icons/saclay.png';
import upm from '../../assets/icons/upm.png'
import wut from '../../assets/icons/WUT.jpg'
import AppFunctions from '../../utils/AppFunctions';
import React, { useEffect, useState, useRef } from 'react';
import './Answers.css';

const Education = ({ refObj }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 400);
        return () => clearTimeout(timer);
    }, []);

    const appFunctionsRef = useRef(null);

    const handleDownloadCV = () => {
        appFunctionsRef.current.downloadCV();
    };

    const handleEmailClick = () => {
        appFunctionsRef.current.handleEmailClick();
    };

    return (
        <div className={`bubbleCustom ${isVisible ? 'visible' : ''}`} ref={refObj}>
            <AppFunctions ref={appFunctionsRef} />
            <div className='line'>
                Most Recent
                <div className='verticalLine'></div>
            </div>
            <div className='content'>
                <div className='master'>
                    <div className='details eit'>
                        <div className='blueFilter'></div>
                        <div className='spainFlag'>
                            <span className="red stripe top"></span>
                            <span className="yellow stripe"></span>
                            <span className="red stripe"></span>
                        </div>
                        <div className='franceFlag'></div>
                        <div className='title'>
                            EIT Digital Master in Human Computer Interaction and Design
                        </div>
                        <div className='group'>
                            <div className='title'>Year</div>
                            <div className='text'>2022 - 2024</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Master Thesis Title</div>
                            <div className='text'>Design of Generative AI Applications for knowledge management</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Entry University</div>
                            <div className='text'>Universidad Politecnica de Madrid, Spain</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Exit University</div>
                            <div className='text'>Université Paris-Saclay, France</div>
                        </div>
                        {/* <div className='group'>
                            <div className='title'>Best Memory</div>
                            <div className='text'>Rappresenting the Padreada football club</div>
                        </div> */}
                    </div>
                    {/* <h2 className='orange m-0'>Projects</h2>
                    <div className='projects'>
                        <div className='box'>
                            <div className='title'>Tune Crafter</div>
                            <div className='text'>Make music with hands gestures</div>
                            <div className='button' onClick={() => window.open('https://scavalleroo.github.io/Tune-Crafter/', '_blank')} >PLAY <span className="arrow">→</span></div>
                        </div>
                        <div className='upm'>
                            <img src={upm} />
                            <div className='description'>
                                <div className='title'>Digital Nomads App</div>
                                <div className='text'>Meeting app for Digital Nomads</div>
                            </div>
                            <div className='button' onClick={() => window.open('https://drive.google.com/file/d/14_3_hvNoJlfGaYkFP5xTt4yyiSEgtxzy/view?usp=sharing', '_blank')}>READ REPORT <span className="arrow">→</span></div>
                        </div>
                    </div> */}
                </div>
                <div className='spacer'></div>
                <div className='master'>
                    <div className='details non-eit'>
                        <div className='blueFilter'></div>
                        <div className='italyFlag'>
                        </div>
                        <div className='polandFlag'></div>
                        <div className='title'>
                            Bachelor degree in Computer Science
                        </div>
                        <div className='group'>
                            <div className='title'>Year</div>
                            <div className='text'>2019 - 2022</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Bachelor Thesis Title</div>
                            <div className='text'>Development of a dashboard for online order management</div>
                        </div>
                        <div className='group'>
                            <div className='title'>University</div>
                            <div className='text'>Università di Modena e Reggio Emilia, Italy</div>
                        </div>
                        <div className='group'>
                            <div className='title'>1 Year Erasmsus University</div>
                            <div className='text'>Warsaw University of Technology</div>
                        </div>
                        {/* <div className='group'>
                            <div className='title'>Best Memory</div>
                            <div className='text'>Meeting and sharing experiences with people from all over the world</div>
                        </div> */}
                    </div>
                    {/* <div className='projects'>
                        <div className='wut'>
                            <img src={wut} />
                            <div className='description'>
                                <div className='title'>ECLAT</div>
                                <div className='text'>ML Algorithm</div>
                            </div>
                            <div className='button' onClick={() => window.open('https://github.com/scavalleroo/eclat', '_blank')}>GITHUB PROJECT <span className="arrow">→</span></div>
                        </div>
                        <div className='wut'>
                            <img src={wut} />
                            <div className='description'>
                                <div className='title'>Direct DFA to RegEx</div>
                                <div className='text'>DFA to RegEx algorithm</div>
                            </div>
                            <div className='button' onClick={() => window.open('https://github.com/scavalleroo/direct-dfa', '_blank')}>GITHUB PROJECT <span className="arrow">→</span></div>
                        </div>
                    </div> */}
                </div>
                <div className='callToAction'>
                    <div className='title'>
                        Do you want to know more about my education?
                    </div>
                    <div className='buttons'>
                        <div className='rightButton' onClick={handleDownloadCV}>
                            Download my Resume
                        </div>
                        {/* <div className='rightButton' onClick={handleEmailClick}>
                            Contact me
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
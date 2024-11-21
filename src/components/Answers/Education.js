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

    return (
        <div className={`bubbleCustom ${isVisible ? 'visible' : ''}`} ref={refObj}>
            <AppFunctions ref={appFunctionsRef} />
            <div className='line'>
                Most Recent
                <div className='verticalLine'></div>
            </div>
            <div className='content'>
                <div className='master'>
                    <div className='detailsMaster eit'>
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
                    </div>
                </div>
                <div className='spacer'></div>
                <div className='master'>
                    <div className='detailsMaster non-eit'>
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
                    </div>
                </div>
                <div className='callToAction'>
                    <div className='title'>
                        Do you want to know more about my education?
                    </div>
                    <div className='buttons'>
                        <div className='rightButton' onClick={handleDownloadCV}>
                            Download my Resume
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
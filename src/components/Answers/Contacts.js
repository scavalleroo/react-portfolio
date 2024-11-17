import AppFunctions from '../../utils/AppFunctions';
import React, { useEffect, useState, useRef } from 'react';
import './Answers.css';

const Contacts = ({ refObj }) => {
    const [isVisible, setIsVisible] = useState(false);
    const appFunctionsRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 400);
        return () => clearTimeout(timer);
    }, []);

    const handleEmailClick = () => {
        appFunctionsRef.current.handleEmailClick();
    };

    return (
        <div className={`bubbleCustom ${isVisible ? 'visible' : ''}`} ref={refObj}>
            <AppFunctions ref={appFunctionsRef} />
            <div className='content contentContact'>
                <div className='filterContacts'></div>
                <div className='contacts'>
                    <div className='work'>
                        <div className='groupContact'>
                            <div className='data'>
                                <div className='description'>Email</div>
                                <div className='link' onClick={handleEmailClick}>cavallotti.alessandro00@gmail.com</div>
                            </div>
                        </div>
                        <div className='groupContact'>
                            <div className='data'>
                                <div className='description'>Linkedin</div>
                                <div className='link' onClick={() => window.open('https://www.linkedin.com/in/alecava/', '_blank')}>https://www.linkedin.com/in/alecava/</div>
                            </div>
                        </div>
                        <div className='groupContact'>
                            <div className='data'>
                                <div className='description'>Github</div>
                                <div className='link' onClick={() => window.open('https://github.com/scavalleroo', '_blank')}>https://github.com/scavalleroo</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='callToAction'>
                    <div className='title white'>
                        Don't hesitate to drop me a message and share my profile
                    </div>
                    <div className='buttons'>
                        <div className='rightButton' onClick={handleEmailClick}>
                            Send a message
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
import externalLink from '../../assets/icons/external-link.png';
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
        <div className={`bubbleCustom w-100 ${isVisible ? 'visible' : ''}`} ref={refObj}>
            <AppFunctions ref={appFunctionsRef} />
            <div className='content contentContact'>
                <div className='filterContacts'></div>
                <div className='contacts'>
                    <div className='work'>
                        <h1 className='white-text'>Contacts</h1>
                        <div className='box'>
                            <div className='title'>Email</div>
                            <div className='playButton playContact' onClick={handleEmailClick}>cavallotti.alessandro00@gmail.com <img src={externalLink} /></div>
                        </div>
                        <div className='box'>
                            <div className='title'>Linkedin</div>
                            <div className='playButton playContact' onClick={() => window.open('https://www.linkedin.com/in/alecava/', '_blank')}>Visit the profile <img src={externalLink} /></div>
                        </div>
                        <div className='box'>
                            <div className='title'>Github</div>
                            <div className='playButton playContact' onClick={() => window.open('https://github.com/scavalleroo', '_blank')}>Visit the profile <img src={externalLink} /></div>
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
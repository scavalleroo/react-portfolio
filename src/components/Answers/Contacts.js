import { Link } from 'react-router-dom';
import externalLink from '../../assets/icons/external-link.png';
import AppFunctions from '../../utils/AppFunctions';
import React, { useEffect, useState, useRef } from 'react';
import './Answers.css';
import { sendEventContactMe, sendEventSocialMedia } from '../../utils/analytics';

const Contacts = ({ refObj }) => {
    const [isVisible, setIsVisible] = useState(false);
    const appFunctionsRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 400);
        return () => clearTimeout(timer);
    }, []);

    const handleEmailClick = () => {
        appFunctionsRef.current.handleEmailClick();
        sendEventContactMe('contacts_question');
    };

    const goToSocial = (url) => {
        window.open(url, '_blank');
        sendEventSocialMedia(url);
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
                            <div className='playButton playContact' onClick={handleEmailClick}>cavallotti.alessandro00@gmail.com <img alt="Link email" src={externalLink} /></div>
                        </div>
                        <div className='box'>
                            <div className='title'>Linkedin</div>
                            <div className='playButton playContact' onClick={() => goToSocial('https://www.linkedin.com/in/alecava/')}>Visit the profile <img alt='Link LinkedIn' src={externalLink} /></div>
                        </div>
                        <div className='box'>
                            <div className='title'>Github</div>
                            <div className='playButton playContact' onClick={() => goToSocial('https://github.com/scavalleroo')}>Visit the profile <img alt='Link Github' src={externalLink} /></div>
                        </div>
                    </div>
                </div>
                <div className='callToAction'>
                    <div className='title white'>
                        Don't hesitate to drop me a message and share my profile
                    </div>
                    <div className='buttons'>
                        <Link to="/contactme" className='rightButton'>
                            Send a message
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
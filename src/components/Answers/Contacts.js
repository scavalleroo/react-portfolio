import linkedin from '../../assets/icons/linkedin.png';
import email from '../../assets/icons/email.png';
import instagram from '../../assets/icons/instagram.png';
import github from '../../assets/icons/github.png';
import AppFunctions from '../../utils/AppFunctions';
import React, { useEffect, useState, useRef } from 'react';
import './Answers.css';

const Education = () => {
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
        <div className={`bubbleCustom ${isVisible ? 'visible' : ''}`}>
            <AppFunctions ref={appFunctionsRef} />
            <div className='content'>
                <div className='contacts'>
                    <div className='work'>
                        <div className='title'>
                            Work Contacts
                        </div>
                        <div className='groupContact'>
                            <div className='icon'>
                                <img src={email} />
                            </div>
                            <div className='data'>
                                <div className='description'>Send me an email at:</div>
                                <div className='link' onClick={handleEmailClick}>cavallotti.alessandro00@gmail.com</div>
                            </div>
                        </div>
                        <div className='groupContact'>
                            <div className='icon'>
                                <img src={linkedin} />
                            </div>
                            <div className='data'>
                                <div className='description'>Connect on Linkedin</div>
                                <div className='link' onClick={() => window.open('https://www.linkedin.com/in/alecava/', '_blank')}>https://www.linkedin.com/in/alecava/</div>
                            </div>
                        </div>
                    </div>
                    <div className='other'>
                        <div className='title'>
                            Other Contacts
                        </div>
                        <div className='groupContact'>
                            <div className='icon'>
                                <img src={instagram} />
                            </div>
                            <div className='data'>
                                <div className='description'>Follow me on Instagram</div>
                                <div className='link' onClick={() => window.open('https://www.instagram.com/scavalleroo/', '_blank')}>https://www.instagram.com/scavalleroo/</div>
                            </div>
                        </div>
                        <div className='groupContact'>
                            <div className='icon'>
                                <img src={github} />
                            </div>
                            <div className='data'>
                                <div className='description'>Check out my Github</div>
                                <div className='link' onClick={() => window.open('https://github.com/scavalleroo', '_blank')}>https://github.com/scavalleroo</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='callToAction'>
                    <div className='title'>
                        Don't hesitate to drop me a message and share my profile
                    </div>
                    <div className='buttons'>
                        <div className='leftButton' onClick={handleEmailClick}>
                            Send a message
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
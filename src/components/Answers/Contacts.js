import linkedin from '../../assets/icons/linkedin.png';
import email from '../../assets/icons/email.png';
import instagram from '../../assets/icons/instagram.png';
import github from '../../assets/icons/github.png';
import React, { useEffect, useState } from 'react';
import './Answers.css';

const Education = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 400);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`bubbleCustom ${isVisible ? 'visible' : ''}`}>
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
                                <div className='link'>cavallotti.alessandro00@gmail.com</div>
                            </div>
                        </div>
                        <div className='groupContact'>
                            <div className='icon'>
                                <img src={linkedin} />
                            </div>
                            <div className='data'>
                                <div className='description'>Connect on Linkedin</div>
                                <div className='link'>https://www.linkedin.com/in/alecava/</div>
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
                                <div className='link'>https://www.instagram.com/scavalleroo/</div>
                            </div>
                        </div>
                        <div className='groupContact'>
                            <div className='icon'>
                                <img src={github} />
                            </div>
                            <div className='data'>
                                <div className='description'>Check out my Github</div>
                                <div className='link'>https://github.com/scavalleroo</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='callToAction'>
                    <div className='title'>
                        Don't hesitate to drop me a message and share my profile
                    </div>
                    <div className='buttons'>
                        <div className='leftButton'>
                            Send a message
                        </div>
                        <div className='rightButton'>
                            Share profile
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
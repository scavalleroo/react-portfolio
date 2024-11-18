import React, { useEffect, useState, useRef } from 'react';
import AppFunctions from '../../utils/AppFunctions';
import './Answers.css';

const WorkExperience = ({ refObj }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(setIsVisible(true), 1400);
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
                {/* Air Liquide */}
                <div className='master'>
                    <div className='details air-liquide'>
                        <div className='blueFilter'></div>
                        <div className='title'>
                            Air Liquide
                        </div>
                        <div className='group'>
                            <div className='title'>Role</div>
                            <div className='text'>UX Designer Intern</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Duration</div>
                            <div className='text'>6 months</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Tools</div>
                            <div className='text'>Figma, Angular</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Team</div>
                            <div className='text'>Product Design Team - La Digital Factory, Paris, France</div>
                        </div>
                    </div>
                    <h2 className='orange m-0'>Contributions</h2>
                    <div className='projects'>
                        <div className='box'>
                            <div className='title'>User Research</div>
                            <div className='text'>I conducted a User Research to <span>validate the use of the Generative AI application</span> to address the problem knowledge management in the company.</div>
                        </div>
                        <div className='box'>
                            <div className='title'>Gen AI Chatbot</div>
                            <div className='text'>Generative AI chatbot <span>build and released in only 2 months</span> thanks to my contributions in the design of the Hi-Fi Prototype and Coding of the front-end of the application.</div>
                        </div>
                        <div className='box'>
                            <div className='title'>Product Design Team</div>
                            <div className='text'>I was able to <span>contribute to the knowledge of the Product Design Team</span> thanks to the study I did Designing Generative AI applications.</div>
                        </div>
                    </div>
                </div>

                <div className='spacer'></div>

                {/* Niipy.com */}
                <div className='master'>
                    <div className='details niipy'>
                        <div className='blueFilter'></div>
                        <div className='title'>
                            Niipy.com
                        </div>
                        <div className='group'>
                            <div className='title'>Role</div>
                            <div className='text'>Full Stack Developer</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Duration</div>
                            <div className='text'>2 years</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Tools</div>
                            <div className='text'>Django, PostgreSQL</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Team</div>
                            <div className='text'>Dev Team - Junto Innovation Hub, Modena, Italy</div>
                        </div>
                    </div>
                    <h2 className='orange m-0'>Contributions</h2>
                    <div className='projects'>
                        <div className='box'>
                            <div className='title'>Google API integration</div>
                            <div className='text'>Implementation of the <span>Authentication with Google</span> and integration of <span>Google APIs</span> for Niipy.com</div>
                        </div>
                        <div className='box'>
                            <div className='title'>Font-End Development</div>
                            <div className='text'>I build the <span>UI for Desktop and Mobile</span> of Niipy.com using responsive CSS frameworks and Jinja templating.</div>
                        </div>
                        <div className='box'>
                            <div className='title'>Design to Dev handover</div>
                            <div className='text'>I was responsible for the feasibility study and <span>translation of the design from Adobe XD to the code</span></div>
                        </div>
                    </div>
                </div>

                <div className='spacer'></div>

                {/* Rosterbook.com */}
                <div className='master'>
                    <div className='details rosterbook'>
                        <div className='blueFilter'></div>
                        <div className='title'>
                            Rosterbook
                        </div>
                        <div className='group'>
                            <div className='title'>Role</div>
                            <div className='text'>CoFounder</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Duration</div>
                            <div className='text'>1 year</div>
                        </div>
                        <div className='group'>
                            <div className='title'>Tools</div>
                            <div className='text'>Flutter, Firebase, GCP, App Store Developer, Google Play Developer</div>
                        </div>
                    </div>
                    <h2 className='orange m-0'>Contributions</h2>
                    <div className='projects'>
                        <div className='box'>
                            <div className='title'>App Design and Ads</div>
                            <div className='text'>I designed all the <span>UI</span> for the applications in many iterations and created all the <span>content for the marketing campaign</span>.</div>
                        </div>
                        <div className='box'>
                            <div className='title'>App development</div>
                            <div className='text'>I build the front end of the App with <span>Flutter</span> and the back-end using <span>Firebase, Javascript, PHP and SQL</span>.</div>
                        </div>
                        <div className='box'>
                            <div className='title'>App Store and Play Store</div>
                            <div className='text'>I managed the release and promotion on the Apple App Store and Google Play Store. <span>Achieved 5K downloads in 3 months</span>.</div>
                        </div>
                    </div>
                </div>

                <div className='callToAction'>
                    <div className='title'>
                        Do you want to know more about my working experience?
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

export default WorkExperience;
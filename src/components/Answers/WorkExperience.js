import React, { useEffect, useState, useRef } from 'react';
import AppFunctions from '../../utils/AppFunctions';
import './Answers.css';
import { sendEventExpand, sendEventDownloadCV } from '../../utils/analytics';

const WorkExperience = ({ refObj }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(setIsVisible(true), 1400);
    }, []);

    const appFunctionsRef = useRef(null);

    const handleDownloadCV = () => {
        appFunctionsRef.current.downloadCV();
        sendEventDownloadCV('work_experience');
    };

    const [expandedSection, setExpandedSection] = useState(null);

    const handleToggle = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
        if (expandedSection !== section)
            sendEventExpand(section);
    };

    const activeContributionTitle = { borderRadius: "8px 8px 0px 0px", fontSize: "15px" };
    const inactiveContributionTitle = { borderRadius: "8px" };
    const activeContributionText = { maxHeight: "140px", padding: "8px 16px" };
    const inactiveContributionText = { maxHeight: "0", padding: "0px" };


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
                        <div className='left'>
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
                        <div className='right'>
                            <h2 className='white-text m-0'>Contributions</h2>
                            <div className='projects'>
                                <div className='box'>
                                    <div className="title" onClick={() => handleToggle('1')} style={expandedSection === '1' ? activeContributionTitle : inactiveContributionTitle}>
                                        User Research {expandedSection === '1' ? '\u2212' : '\u002B'}
                                    </div>
                                    <div className="text" style={expandedSection === '1' ? activeContributionText : inactiveContributionText}>
                                        I conducted a User Research to <span>validate the use of the Generative AI application</span> to address the problem knowledge management in the company.
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className="title" onClick={() => handleToggle('2')} style={expandedSection === '2' ? activeContributionTitle : inactiveContributionTitle}>
                                        Gen AI Chatbot {expandedSection === '2' ? '\u2212' : '\u002B'}
                                    </div>
                                    <div className="text" style={expandedSection === '2' ? activeContributionText : inactiveContributionText}>
                                        Generative AI chatbot <span>build and released in only 2 months</span> thanks to my contributions in the design of the Hi-Fi Prototype and Coding of the front-end of the application.
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className="title" onClick={() => handleToggle('3')} style={expandedSection === '3' ? activeContributionTitle : inactiveContributionTitle}>
                                        Product Design Team {expandedSection === '3' ? '\u2212' : '\u002B'}
                                    </div>
                                    <div className="text" style={expandedSection === '3' ? activeContributionText : inactiveContributionText}>
                                        I was able to <span>contribute to the knowledge of the Product Design Team</span> thanks to the study I did Designing Generative AI applications.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='spacer'></div>

                {/* Niipy.com */}
                <div className='master'>
                    <div className='details niipy'>
                        <div className='blueFilter'></div>
                        <div className='left'>
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
                        <div className='right'>
                            <h2 className='white-text m-0'>Contributions</h2>
                            <div className='projects'>
                                <div className='box'>
                                    <div className='title' onClick={() => handleToggle('4')} style={expandedSection === '4' ? activeContributionTitle : inactiveContributionTitle}>
                                        Google API integration {expandedSection === '4' ? '\u2212' : '\u002B'}
                                    </div>
                                    <div className='text' style={expandedSection === '4' ? activeContributionText : inactiveContributionText}>Implementation of the <span>Authentication with Google</span> and integration of <span>Google APIs</span> for Niipy.com</div>
                                </div>
                                <div className='box'>
                                    <div className='title' onClick={() => handleToggle('5')} style={expandedSection === '5' ? activeContributionTitle : inactiveContributionTitle}>
                                        Font-End Development {expandedSection === '5' ? '\u2212' : '\u002B'}
                                    </div>
                                    <div className='text' style={expandedSection === '5' ? activeContributionText : inactiveContributionText}>I build the <span>UI for Desktop and Mobile</span> of Niipy.com using responsive CSS frameworks and Jinja templating.</div>
                                </div>
                                <div className='box'>
                                    <div className='title' onClick={() => handleToggle('6')} style={expandedSection === '6' ? activeContributionTitle : inactiveContributionTitle}>
                                        Design to Dev handover {expandedSection === '6' ? '\u2212' : '\u002B'}
                                    </div>
                                    <div className='text' style={expandedSection === '6' ? activeContributionText : inactiveContributionText}>I was responsible for the feasibility study and <span>translation of the design from Adobe XD to the code</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='spacer'></div>

                {/* Rosterbook.com */}
                <div className='master'>
                    <div className='details rosterbook'>
                        <div className='blueFilter'></div>
                        <div className='left'>
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
                        <div className='right'>
                            <h2 className='white-text m-0'>Contributions</h2>
                            <div className='projects'>
                                <div className='box'>
                                    <div className='title' onClick={() => handleToggle('7')} style={expandedSection === '7' ? activeContributionTitle : inactiveContributionTitle}>
                                        App Design and Ads {expandedSection === '7' ? '\u2212' : '\u002B'}
                                    </div>
                                    <div className='text' style={expandedSection === '7' ? activeContributionText : inactiveContributionText}>I designed all the <span>UI</span> for the applications in many iterations and created all the <span>content for the marketing campaign</span>.</div>
                                </div>
                                <div className='box'>
                                    <div className='title' onClick={() => handleToggle('8')} style={expandedSection === '8' ? activeContributionTitle : inactiveContributionTitle}>
                                        App development {expandedSection === '8' ? '\u2212' : '\u002B'}
                                    </div>
                                    <div className='text' style={expandedSection === '8' ? activeContributionText : inactiveContributionText}>I build the front end of the App with <span>Flutter</span> and the back-end using <span>Firebase, Javascript, PHP and SQL</span>.</div>
                                </div>
                                <div className='box'>
                                    <div className='title' onClick={() => handleToggle('9')} style={expandedSection === '9' ? activeContributionTitle : inactiveContributionTitle}>
                                        App Store and Play Store {expandedSection === '9' ? '\u2212' : '\u002B'}
                                    </div>
                                    <div className='text' style={expandedSection === '9' ? activeContributionText : inactiveContributionText}>I managed the release and promotion on the Apple App Store and Google Play Store. <span>Achieved 5K downloads in 3 months</span>.</div>
                                </div>
                            </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
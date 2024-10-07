import Menu from '../components/Menu/Menu';
import '../App.css';
import AppFunctions from '../utils/AppFunctions';
import Footer from '../components/Footer/Footer';
import { useRef } from 'react';

function ContactMe() {
    const appFunctionsRef = useRef(null);

    const handleEmailClick = () => {
        appFunctionsRef.current.handleEmailClick();
    };

    return (
        <div className="AskToMe">
            <AppFunctions ref={appFunctionsRef} />
            <div className='content displayMobile'>
                <Menu title="Contact Me" />
                <div className='rightPanel'>
                    <div className='title'>Let's get in touch</div>
                    <div className='text'>
                        As a life long learner, my goal is to constantly improve my skills and grow as a designer.
                        Whether it's to discuss an opportunity or to trade ideas about design or tech, I'm excited to chat!
                    </div>
                    <div className='contentContacts'>
                        <div className='contacts'>
                            <div className='blueFilter'></div>
                            <div className='group'>
                                <div className='title'>Email:</div>
                                <div className='link' onClick={handleEmailClick}>cavallotti.alessandro00@gmail.com</div>
                            </div>
                            <div className='group'>
                                <div className='title'>Connect on LinkedIn:</div>
                                <div className='link' onClick={() => window.open('https://www.linkedin.com/in/alecava/', '_blank')}>https://www.linkedin.com/in/alecava/</div>
                            </div>
                            <div className='callToAction'>
                                <div className='title'>
                                    Do you want to know more?
                                </div>
                                <div className='buttons'>
                                    {/* <div className='leftButton'>
                                        Schedule a call
                                    </div> */}
                                    <div className='rightButton' onClick={handleEmailClick}>
                                        Send a message
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactMe;

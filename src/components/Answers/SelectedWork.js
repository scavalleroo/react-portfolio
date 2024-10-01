import ups from '../../assets/icons/saclay.png';
import upm from '../../assets/icons/upm.png';
import React, { useEffect, useState } from 'react';
import './Answers.css';

const SelectedWork = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(setIsVisible(true), 1400);
    }, []);

    return (
        <div className={`bubbleCustom ${isVisible ? 'visible' : ''}`}>
            <div className='line'>
                <div className='popular'>
                    Most Popular
                    <div className='verticalLine'></div>
                </div>
                <div className='popular'>
                    Most Recent
                    <div className='verticalLine'></div>
                </div>
            </div>
            <div className='content'>
                <div className='projectGallery'>
                    <div className='projectWhite proj-rosterbook'>
                        <div className='projectStory'>Project story →</div>
                    </div>
                    <div className='projectWhite proj-tune-crafter'>
                        <div className='projectStory'>Project story →</div>
                        <div className='madeIn'>
                            <div className='title'>Made in</div>
                            <img src={ups} className='ups' />
                        </div>
                    </div>
                    <div className='projectBlack proj-nomads'>
                        <div className='projectStory'>Project story →</div>
                        <div className='madeIn'>
                            <div className='title'>Made in</div>
                            <img src={upm} className='upm' />
                        </div>
                    </div>
                </div>
                <div className='projectGallery'>

                </div>
                <div className='callToAction'>
                    <div className='title'>
                        Do you want to know more about my work?
                    </div>
                    <div className='buttons'>
                        <div className='leftButton'>
                            See all the projects
                        </div>
                        <div className='rightButton'>
                            Contact me
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedWork;
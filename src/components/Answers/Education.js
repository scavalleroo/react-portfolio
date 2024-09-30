import saclay from '../../assets/icons/saclay.png';
import upm from '../../assets/icons/upm.png'
import React from 'react';
import './Answers.css';

const Education = () => {
    return (
        <div className='bubbleCustom'>
            <div className='line'>

            </div>
            <div className='content'>
                <div className='master'>
                    <div className='details'>
                        <div className='spainFlag'>
                            <span className="red stripe top"></span>
                            <span className="yellow stripe"></span>
                            <span className="red stripe"></span>
                        </div>
                        <div className='franceFlag'></div>
                        <div className='title'>
                            EIT Digital Master Double Degree in Human Computer Interaction and Design
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
                        <div className='group'>
                            <div className='title'>Best Memory</div>
                            <div className='text'>Rappresenting the Padreada football club</div>
                        </div>
                    </div>
                    <div className='projects'>
                        <div className='ups'>
                            <img src={saclay} />
                            <div className='description'>
                                <div className='title'>Tune Crafter</div>
                                <div className='text'>Make music with hands gestures</div>
                            </div>
                            <div className='button'>PLAY</div>
                        </div>
                        <div className='upm'>
                            <img src={upm} />
                            <div className='description'>
                                <div className='title'>Digital Nomads App</div>
                                <div className='text'>Meeting app for Digital Nomads</div>
                            </div>
                            <div className='button'>PLAY</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
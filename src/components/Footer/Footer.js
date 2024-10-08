import email from '../../assets/icons/email.png';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import instagram from '../../assets/icons/instagram.png';
import React from 'react';
import '../../App.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='copyright'>Designed in Paris with Love © 2024 Alessandro Cavallotti</div>
            {/* <div className='contacts'>
                <img src={email} className='icon' />
                <img src={linkedin} className='icon' />
                <img src={github} className='icon' />
                <img src={instagram} className='icon' />
            </div> */}
        </div>
    );
};

export default Footer;
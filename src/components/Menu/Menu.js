import React, { useRef, useEffect } from 'react';
import lizard from '../../assets/icons/chameleon_white.svg';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = ({ title, menuRef, lizardRef }) => {
  return (
    <div className='leftBar'>
      <Link to="/"><img src={lizard} alt="lizard" width="40" height="40" className='lizard' ref={lizardRef} /></Link>
      <div className='callToActions' ref={menuRef}>
        <div className='buttonAction'>
          <Link to="/asktome" className='button'>Ask Me</Link>
        </div>
        <div className='buttonAction'>
          <Link to="/selectedwork" className='button'>Selected Work</Link>
        </div>
        <div className='buttonAction'>
          <Link to="/contactme" className='button'>Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = ({ title }) => {
  return (
    <div className='leftPanel'>
      <div className='disclamer'>
        <Link to="/">Not Another <div className='textColorChange underline'>Portfolio</div></Link>
      </div>
      <div className='titlePage'>
        {title}
      </div>
      <div className='menu'>
        <NavLink to="/asktome"> Ask Me </NavLink>
        <NavLink to="/selectedwork"> Selected Work </NavLink>
        <NavLink to="/contactme"> Contact Me </NavLink>
      </div>
    </div>
  );
};

export default Menu;
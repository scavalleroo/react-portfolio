import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className='menu'>
      <NavLink to="/"> Alessandro </NavLink>
      <NavLink to="/asktome"> Ask to Me </NavLink>
      <NavLink to="/selectedwork"> Selected Work </NavLink>
      <NavLink to="/contactme"> Contact Me </NavLink>
    </div>
  );
};

export default Menu;
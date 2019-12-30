import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import image from '../../images/homeImg-noalpha.png';

function Header(props) {
  return (
    <header>
      <img src={image} alt='Los Altos Construction Logo'></img>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
        <li>Gallery</li>
      </nav>
    </header>
  );
}

export default Header;

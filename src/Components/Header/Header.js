import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import image from '../../images/losAltosLogo.jpg';

function Header(props) {
  return (
    <header>
      <img src={image}></img>

      <h1>Los Altos Construction</h1>
      <h4>Kitchen & Bath Remodeling</h4>
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

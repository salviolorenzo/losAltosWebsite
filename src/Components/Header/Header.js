import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import image from '../../images/homeImg-noalpha.png';
import menuIcon from './images/icons8-menu-48.png';

function Header({ isMobile, handleMenuClick, menuIsOpen, menuClick }) {
  if (isMobile) {
    return (
      <header
        className='mainHeader'
        style={{ justifyContent: 'space-between' }}
      >
        <img
          onClick={handleMenuClick}
          id='menuIcon'
          src={menuIcon}
          alt='Menu Icon'
        />
        <div
          className={
            menuIsOpen ? 'navLinksMenu menuOpen' : 'navLinksMenu menuClosed'
          }
        >
          <nav>
            <div onClick={menuClick}>
              <li>
                <a href='#home'>Home</a>
              </li>
            </div>
            <div onClick={menuClick}>
              <li>
                <a href='#about'>About</a>
              </li>
            </div>
            <div onClick={menuClick}>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </div>
            <div onClick={menuClick}>
              <li>
                <a href='#gallery'>Gallery</a>
              </li>
            </div>
          </nav>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <img src={image} alt='Los Altos Construction Logo'></img>
        <nav>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Gallery</li>
        </nav>
      </header>
    );
  }
}

export default Header;

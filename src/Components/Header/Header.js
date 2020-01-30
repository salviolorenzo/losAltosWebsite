import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import image from '../../images/homeImg-noalpha.png';
import menuIcon from './images/icons8-menu-48.png';

function Header({
  isMobile,
  handleMenuClick,
  menuIsOpen,
  menuClick,
  scrollToComponent,
  home,
  about,
  contact,
  gallery
}) {
  if (isMobile) {
    return (
      <header
        className='mainHeader'
        style={{ justifyContent: 'space-between' }}
      >
        <img src={image} id='logo' alt='Los Altos Construction Logo'></img>

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
            <div
              onClick={() => {
                menuClick();
                scrollToComponent(home, {
                  offset: -100,
                  align: 'top',
                  duration: 1500
                });
              }}
            >
              <li>
                <a href='#home'>Home</a>
              </li>
            </div>
            <div
              onClick={() => {
                menuClick();
                scrollToComponent(about, {
                  offset: -100,
                  align: 'top',
                  duration: 1500
                });
              }}
            >
              <li>
                <a href='#about'>About</a>
              </li>
            </div>
            <div
              onClick={() => {
                menuClick();
                scrollToComponent(contact, {
                  offset: -100,
                  align: 'top',
                  duration: 1500
                });
              }}
            >
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </div>
            <div
              onClick={() => {
                menuClick();
                scrollToComponent(gallery, {
                  offset: -100,
                  align: 'top',
                  duration: 1500
                });
              }}
            >
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
          <li
            onClick={() => {
              menuClick();
              scrollToComponent(home, {
                offset: -65,
                align: 'top',
                duration: 1500
              });
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              menuClick();
              scrollToComponent(about, {
                offset: -65,
                align: 'top',
                duration: 1500
              });
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              menuClick();
              scrollToComponent(contact, {
                offset: -65,
                align: 'top',
                duration: 1500
              });
            }}
          >
            Contact Us
          </li>
          <li
            onClick={() => {
              menuClick();
              scrollToComponent(gallery, {
                offset: -65,
                align: 'top',
                duration: 1500
              });
            }}
          >
            Gallery
          </li>
        </nav>
      </header>
    );
  }
}

export default Header;

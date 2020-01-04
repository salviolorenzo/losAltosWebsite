import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
// import image from '../../images/homeImg-noalpha.png';

function Footer(props) {
  return (
    <footer className='top65'>
      <ul>
        <li>
          <a href='https://www.instagram.com/losaltosconstruction/'>
            <i class='fab fa-instagram'></i>
            Instagram
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/Los-Altos-Construction-Inc-160960637307105/'>
            <i class='fab fa-facebook-square'></i>
            Facebook
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';
import moment from 'moment';
import keys from '../../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  // home component with boards and tiles

  render() {
    return (
      <div>
        <Header />
        <div className='landing top65'>
          <h2>Los Altos Construction</h2>
          <h4>Kitchen &amp; Bathroom Remodeling</h4>
          <div className='services'>
            <h2>Services</h2>
            <ul>
              <li>
                <h3>Kitchens</h3>
                <ul className='serviceList'>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,.
                  </li>
                </ul>
              </li>
              <li>
                <h3>Bathrooms</h3>
                <ul className='serviceList'>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,.
                  </li>
                </ul>
              </li>
            </ul>
            <button>Book Now</button>
          </div>
        </div>

        <div className='about top65'>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className='contactSection top65'>
          <h2>Contact Us</h2>
          <form>
            <label>
              Name<br></br>
              <input type='text' placeholder='John Smith'></input>
            </label>
            <br></br>
            <label>
              Email<br></br>
              <input type='text' placeholder='johnsmith@apple.com'></input>
            </label>
            <br></br>

            <label>
              Phone Number<br></br>
              <input type='text' placeholder='000-000-0000'></input>
            </label>
            <br></br>
            <label>
              Message<br></br>
              <textarea></textarea>
            </label>
            <br></br>

            <button type='submit'>Send</button>
          </form>
        </div>
        <div className='gallery top65'>
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;

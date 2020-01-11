import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';
import moment from 'moment';
import keys from '../../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.scss';
import br1 from '../../images/bathroom1.jpg';
import br2 from '../../images/bathroom2.jpg';
import br3 from '../../images/bathroom3.jpg';
import br4 from '../../images/bathroom4.jpg';
import br5 from '../../images/bathroom5.jpg';
import br6 from '../../images/bathroom6.jpg';
import kitchen1 from '../../images/kitchen1.jpg';
import kitchen2 from '../../images/kitchen2.jpg';
import kitchen3 from '../../images/kitchen3.jpg';
import kitchen4 from '../../images/kitchen4.jpg';
import kitchen5 from '../../images/kitchen5.jpg';
import kitchen6 from '../../images/kitchen6.jpg';
import kitchen7 from '../../images/kitchen7.jpg';

function setImg(url) {
  const style = {
    backgroundImage: `url(${url})`,
    backgroundSize: `contain`,
    backgroundPosition: `center`,
    backgroundRepeat: 'no-repeat'
    // backgroundAttachment: `fixed`
  };
  return style;
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: {},
      selectedIdx: {},
      imgArray: [
        kitchen1,
        br1,
        kitchen2,
        br2,
        kitchen3,
        br3,
        kitchen4,
        br4,
        kitchen5,
        br5,
        kitchen6,
        br6,
        kitchen7
      ]
    };
  }

  componentDidMount() {}

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
          {this.state.imgArray.map((item, index) => {
            return (
              <div
                className='galleryImg'
                key={index}
                style={setImg(item)}
              ></div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;

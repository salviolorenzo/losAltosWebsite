import React, { Component, useRef, useEffect } from 'react';
import moment from 'moment';
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-number-input';
import keys from '../../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.scss';
import scrollToComponent from 'react-scroll-to-component';

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

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

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
      ],
      isMobile: false,
      menuIsOpen: false,
      myRef: '',
      selectedSection: {},
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  }

  componentDidMount() {
    this.setState({
      menuIsOpen: false,
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    });
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
    scrollToComponent(this.Blue, {
      offset: 0,
      align: 'middle',
      duration: 500,
      ease: 'inCirc'
    });
  }

  scrollToRef(ref) {
    window.scrollTo(0, ref.current.offsetTop);
  }

  useMountEffect(fun) {
    useEffect(fun, []);
  }

  myRef() {
    this.setState({
      myRef: useRef(null)
    });
  }

  executeScroll() {
    scrollToRef(this.state.myRef);
  }

  resize() {
    if (window.innerWidth >= 450) {
      this.setState({
        isMobile: false,
        menuIsOpen: false
      });
    } else {
      this.setState({
        isMobile: true
      });
    }
  }

  menuClick() {
    this.setState({
      menuIsOpen: false
      // selectedSection: section
    });
  }

  handleMenuClick() {
    let isOpen = this.state.menuIsOpen;
    this.setState({
      menuIsOpen: !isOpen
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const templateId = 'losAltosEmailTemplate';
    let valid = this.validateEmail(this.state.form.email);
    let form = this.state.form;
    if (valid) {
      emailjs
        .sendForm(
          'gmail-test',
          templateId,
          e.target,
          'user_GrHNLcQ4diZHdAYx4qsid'
        )
        .then(
          result => {
            console.log(result.text);
            this.setState({
              form: {
                name: '',
                email: '',
                phone: '',
                message: ''
              }
            });
          },
          error => {
            console.log(error.text);
          }
        );
    } else {
      alert('You have entered an invalid email address!');
    }
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send('gmail-test', templateId, variables)
      .then(res => {
        console.log('Email successfully sent!');
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
      );
  }

  validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  handleInputChange(event) {
    console.log();
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  }

  render() {
    return (
      <div>
        <Header
          isMobile={this.state.isMobile}
          menuIsOpen={this.state.menuIsOpen}
          handleMenuClick={this.handleMenuClick.bind(this)}
          menuClick={this.menuClick.bind(this)}
          scrollToComponent={scrollToComponent}
          home={this.Home}
          about={this.About}
          contact={this.Contact}
          gallery={this.Gallery}
        />
        <div
          className='landing top65'
          id='home'
          ref={section => {
            this.Home = section;
          }}
        >
          <h2>Los Altos Construction</h2>
          <h4>Kitchen &amp; Bathroom Remodeling</h4>
          <div className='services'>
            <h2>Services</h2>
            <ul>
              <li>
                <ul className='serviceList'>
                  <li>Kitchen &amp; Bath measure and planning</li>
                  <li>Complete kitchen removal and replace as per design</li>
                  <li>Supply full range of kitchen and bath products </li>
                </ul>
              </li>
              {/* <li>
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
              </li> */}
            </ul>
            <button>Book Now</button>
          </div>
        </div>

        <div
          className='about top65'
          id='about'
          ref={section => {
            this.About = section;
          }}
        >
          <h2>About Us</h2>
          <ul>
            <li>
              Our computer design allows you to view your plan before your
              purchase
            </li>

            <li>
              Both an in-home measure and site verification by Los Altos
              Construction ensures your project can be completed as designed.
            </li>
            <li> A line item bid shows you the install cost of each item.</li>
            <li>
              Reliable, on time, and courteous installers working for you.
            </li>
            <li>
              We provide a cabinet-only install or a full remodel which
              includes: demolition, electrical, plumbing, wall work, cabinet and
              appliance install.
            </li>
            <li>
              Quality work from licensed and insured professionals who will get
              the job done right the first time.
            </li>
            <li>
              Installation labor has a one year warranty, giving you piece of
              mind.
            </li>
            <li>
              All phases of the project are professionally managed and scheduled
              in advance.
            </li>
            <li>
              Our installers have the capability to add elegance to your home
              with just a touch of craftsmanship from our skilled employees.
            </li>
            <li>
              We are proud of our reputation, and will work to earn your trust.
            </li>
            <li>
              All of our employees have received extensive background checks,
              ensuring a safe environment in your home.
            </li>
            <li>
              All of our employees have been with Los Altos Construction for a
              minimum of 10 years!
            </li>
          </ul>
        </div>

        <div
          className='contactSection top65'
          id='contact'
          ref={section => {
            this.Contact = section;
          }}
        >
          <h2>Contact Us</h2>
          <form
            onSubmit={e => {
              this.handleSubmit(e);
            }}
          >
            <label>
              Name<br></br>
              <input
                type='text'
                name='name'
                placeholder='John Smith'
                value={this.state.form.name}
                onChange={event => {
                  this.handleInputChange(event);
                }}
              ></input>
            </label>
            <br></br>
            <label>
              Email<br></br>
              <input
                type='text'
                name='email'
                placeholder='johnsmith@apple.com'
                value={this.state.form.email}
                onChange={event => {
                  this.handleInputChange(event);
                }}
              ></input>
            </label>
            <br></br>

            <label>
              Phone Number<br></br>
              <input
                type='text'
                name='phone'
                placeholder='000-000-0000'
                value={this.state.form.phone}
                onChange={event => {
                  this.handleInputChange(event);
                }}
              ></input>
            </label>
            <br></br>
            <label>
              Message<br></br>
              <textarea
                name='message'
                value={this.state.form.message}
                onChange={event => {
                  this.handleInputChange(event);
                }}
              ></textarea>
            </label>
            <br></br>

            <button type='submit'>Send</button>
            <div className='address'>
              <h3>Los Altos Construction</h3>
              <h3>2863 Walnut Ave</h3>
              <h3>Signal Hill, CA</h3>
              <h3>90755</h3>
              <h3>(562) 997-1220</h3>
            </div>
          </form>
        </div>
        <div
          className='gallery top65'
          id='gallery'
          ref={section => {
            this.Gallery = section;
          }}
        >
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

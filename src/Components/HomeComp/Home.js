import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';
import moment from 'moment';
import keys from '../../config';
const Header = React.lazy(() => import('../Header'));

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  // home component with boards and tiles

  render() {
    return <div></div>;
  }
}

export default Home;

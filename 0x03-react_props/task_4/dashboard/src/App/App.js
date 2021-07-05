import React from 'react';
import PropTypes from 'prop-types';

import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList'


import './App.css';

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications />
      <Header />
      {(isLoggedIn === true) ? <CourseList /> : <Login />}
      <Footer />
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false
}
App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default App;

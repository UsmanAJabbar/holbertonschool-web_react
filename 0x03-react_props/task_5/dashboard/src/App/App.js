import React from 'react';
import PropTypes from 'prop-types';

import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList'

import { getLatestNotifcation } from '../utils/utils';

import './App.css';

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications listNotifications={listNotifications} />
      <Header />
      {(isLoggedIn === true) ? <CourseList listCourses={listCourses} /> : <Login />}
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

const listCourses = [
  {id: 1, credit: 60, name: 'ES6'},
  {id: 2, credit: 20, name: 'Webpack'},
  {id: 3, credit: 40, name: 'React'},
];

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: {__html: getLatestNotifcation()}}
]

export default App;

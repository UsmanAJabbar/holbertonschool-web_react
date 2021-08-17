import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { oneOfType } from 'prop-types';

/* React components */
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import AppContext from './AppContext';

import { getLatestNotifcation } from '../utils/utils';
import {
  displayNotificationDrawer,
  hideNotificationDrawer
} from '../actions/uiActionCreators';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.logoutHander           = this.logoutHander.bind(this);
    this.logIn                  = this.logIn.bind(this);
    this.logOut                 = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

    this.state = {
      email: 'someemail@gmail.com',
      password: 'somebigpass',
      logOut: () => this.logOut(),
      isLoggedIn: false,
      listNotifications: [
        {id: 1, type: 'default', value: 'New course available'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'urgent', html: {__html: getLatestNotifcation()}}
      ]
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.logoutHander);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.logoutHander);
  }

  logoutHander(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.state.logOut();
    }
  }

  logIn (email, password) {
    this.setState({
      email: email,
      password: password,
      isLoggedIn: true
    }, () => console.log(
      `Successfully set the email and password to ${this.state.email}:${this.state.password}`, this.state
    ));
  }
  logOut () {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    }, () => console.log(
      'Successfully logged out of the website, the state of the current state is', this.state
    ))
  }

  markNotificationAsRead (id) {
    this.setState({
      listNotifications: this.state
                            .listNotifications
                            .filter(
                              notifcationObj => notifcationObj.id !== id
                            )
    }, () => console.log(
      'Successfully removed the notification from the state'
    ));
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Notifications listNotifications={this.state.listNotifications}
                       displayDrawer={this.props.displayDrawer}
                       handleDisplayDrawer={this.props.handleDisplayDrawer}
                       handleHideDrawer={this.props.handleHideDrawer}
                       markNotificationAsRead={this.markNotificationAsRead}
        />
        <Header />
        {
          (this.state.isLoggedIn === true)
            ? <BodySectionWithMarginBottom title={'Course list'}>
                <CourseList listCourses={ listCourses } />
              </BodySectionWithMarginBottom>
            : <BodySectionWithMarginBottom title={ 'Log in to continue' }>
                <Login logIn={this.logIn}/>
              </BodySectionWithMarginBottom>
        }
        <BodySection title={ 'News from the School' } >
          <p>Some random text</p>
        </BodySection>
        <Footer />
      </AppContext.Provider>
    );
  }

}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {}
}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func
}

const listCourses = [
  {id: 1, credit: 60, name: 'ES6'},
  {id: 2, credit: 20, name: 'Webpack'},
  {id: 3, credit: 40, name: 'React'},
];


export const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible')
});
const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer
};

connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

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
  hideNotificationDrawer,
  loginRequest,
  logout
} from '../actions/uiActionCreators';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.logoutHander           = this.logoutHander.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

    this.state = {
      email: 'someemail@gmail.com',
      password: 'somebigpass',
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
      this.props.logOut();
    }
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
    const {
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
      login,
      isLoggedIn
    } = this.props;

    return (
      <AppContext.Provider value={this.state}>
        <Notifications listNotifications={this.state.listNotifications}
                       displayDrawer={displayDrawer}
                       handleDisplayDrawer={displayNotificationDrawer}
                       handleHideDrawer={hideNotificationDrawer}
                       markNotificationAsRead={this.markNotificationAsRead}
        />
        <Header />
        {
          (!!isLoggedIn)
            ? <BodySectionWithMarginBottom title={'Course list'}>
                <CourseList listCourses={ listCourses } />
              </BodySectionWithMarginBottom>
            : <BodySectionWithMarginBottom title={ 'Log in to continue' }>
                <Login logIn={login}/>
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
  hideNotificationDrawer: () => {},
  login: () => {}
}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func
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
  hideNotificationDrawer,
  login: loginRequest,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
export { App as newApp };

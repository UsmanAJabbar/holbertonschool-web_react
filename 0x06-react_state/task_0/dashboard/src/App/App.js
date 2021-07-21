import React from 'react';
import PropTypes from 'prop-types';

/* React components */
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

import { getLatestNotifcation } from '../utils/utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logoutHander = this.logoutHander.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.state = {
      displayDrawer: false
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
      this.handleHideDrawer();
    }
  }

  handleDisplayDrawer () {
    this.setState({
      displayDrawer: true
    });
  }
  handleHideDrawer () {
    this.setState({
      displayDrawer: false
    });
  }

  render() {
    const { isLoggedIn } = this.props;
    const { displayDrawer } = this.state;
    return (
      <React.Fragment>
        <Notifications listNotifications={ listNotifications }
                       displayDrawer={displayDrawer}
                       handleDisplayDrawer={this.handleDisplayDrawer}
                       handleHideDrawer={this.handleHideDrawer}
        />
        <Header />
        {
          (isLoggedIn === true)
            ? <BodySectionWithMarginBottom title={'Course list'}>
                <CourseList listCourses={ listCourses } />
              </BodySectionWithMarginBottom>
            : <BodySectionWithMarginBottom title={ 'Log in to continue' }>
                <Login />
              </BodySectionWithMarginBottom>
        }
        <BodySection title={ 'News from the School' } >
          <p>Some random text</p>
        </BodySection>
        <Footer />
      </React.Fragment>
    );
  }

}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
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
];

export default App;

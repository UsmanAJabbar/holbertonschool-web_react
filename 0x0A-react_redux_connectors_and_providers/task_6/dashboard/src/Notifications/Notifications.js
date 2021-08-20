import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { NotificationItem } from './NotificationItem';
import { fetchNotifications, markAsAread } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelector';


import PropTypes from 'prop-types';
import closeButton from './close-button.png';
import './Notifications.css';

class Notification extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchNotifications();
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead
    } = this.props;

    return (
      <React.Fragment>
        <div className={`menuItem ${css(styles.menuItem)}`}
             onClick={ () => handleDisplayDrawer() }
        >
          <p>Your notifications</p>
        </div>
        {
          (displayDrawer === true) 
          ? <div className={`Notifications ${css(styles.container)}`}>
              <button aria-label="Close" style={ buttonCSS } 
                onClick={() => {
                  console.log('Close button has been clicked');
                  handleHideDrawer();
                }}
              >
                <img src={ closeButton } alt={ "close button" } style={{ height: '20px' }} />
              </button>
              <p>Here is the list of notifications</p>
              <ul>
                {
                  (!listNotifications.length)
                  ? <NotificationItem type={'default'}
                                      value={'No new notification for now'}
                    />
                  : listNotifications.map(
                      ({type, value, html, guid}, index) =>
                        <NotificationItem key={index}
                                          id={index}
                                          guid={guid}
                                          type={type}
                                          value={value}
                                          html={html}
                                          markNotificationAsRead={markNotificationAsRead}
                        />
                    )
                }
              </ul>
            </div>
          : null
        }
      </React.Fragment>
    );
  }
}

const buttonCSS = {
  display: 'inline-block',
  float: 'right',
  padding: '0',
  margin: '0',
  border: 'none',
  backgroundColor: 'transparent'
}

const styles = StyleSheet.create({
  container: {
    padding: '10px',
    border: 'dashed 1px red',
    width: 'fit-content',
    display: 'inline',
    position: 'absolute',
    right: '0',
    marginTop: '30px',
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      margin: '0',
      padding: '0',
      fontSize: '20px',
    }
  },
  
  menuItem: {
    position: 'absolute',
    right: '0',
    margin: '7px',
  }
});

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {}
}
Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  fetchNotifications: PropTypes.func
}

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotifications(state)
});

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsAread
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
export { Notification as newNotification };

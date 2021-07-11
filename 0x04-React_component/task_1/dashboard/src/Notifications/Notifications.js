import React from 'react';

import { NotificationItem } from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

import PropTypes from 'prop-types';
import closeButton from './close-button.png';
import './Notifications.css';

function Notification({ displayDrawer, listNotifications }) {
  return (
    <React.Fragment>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {
        (displayDrawer == true) ?
          <div className="Notifications">
            <button aria-label="Close"
                    onClick={() => console.log('Close button has been clicked')}
                    style={ buttonCSS }>
              <img src={ closeButton } alt="close button" style={{ height: '20px' }} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {
                (!listNotifications.length) ? <NotificationItem type={'default'}
                                                                value={'No new notification for now'}
                                              />
                                            : listNotifications.map(({id, type, value, html}) =>
                                                <NotificationItem key={id}
                                                                  type={type}
                                                                  value={value}
                                                                  html={html}
                                                />
                                              )
              }
            </ul>
          </div> : null
      }
    </React.Fragment>
  )
}

const buttonCSS = {
  display: 'inline-block',
  float: 'right',
  padding: '0',
  margin: '0',
  border: 'none',
  backgroundColor: 'transparent'
}

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}
Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

export default Notification;
import React from 'react';
import PropTypes from 'prop-types';

import './NotificationItems.css';

function NotificationItem({ type, html, value }) {
  return (
            <li data-notification-type={type}
                dangerouslySetInnerHTML={html}>
              {value}
            </li>
         );
}

NotificationItem.defaultProps = {
  type: 'default'
}

NotificationItem.propTypes = {
  type: PropTypes.oneOf(['default', 'urgent']),
  value: PropTypes.string,
  html: PropTypes.exact({
    __html: PropTypes.string.isRequired,
  })
}

export { NotificationItem };

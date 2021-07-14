import React from 'react';
import PropTypes from 'prop-types';

import './NotificationItems.css';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, html, value, id, markAsRead } = this.props;
    return (
      <li data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  id: 0,
  markAsRead: () => {},
}

NotificationItem.propTypes = {
  type: PropTypes.oneOf(['default', 'urgent']),
  value: PropTypes.string,
  html: PropTypes.exact({
    __html: PropTypes.string.isRequired,
  }),
  id: PropTypes.number,
  markAsRead: PropTypes.func,
}

export { NotificationItem };

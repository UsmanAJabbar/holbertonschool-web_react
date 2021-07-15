import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, html, value, id, markAsRead } = this.props;
    return (
      <li data-notification-type={ type }
          dangerouslySetInnerHTML={ html }
          onClick={ () => markAsRead(id) }
          className={ (type === 'urgent') ? css(styles.red)
                                             : css(styles.blue) }
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

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  blue: {
    color: '#1e0764',
  }
});

export { NotificationItem };

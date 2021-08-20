import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getFooterCopy, getFullYear } from '../utils/utils';

import './Footer.css';

const Footer = ({ user }) => (
  <div className="App-footer">
    <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    { (!!user) ? <a>Contact Us</a> : null }
  </div>
)

const mapStateToProps = (state) => ({
  user: state.ui.get('user')
});

Footer.defaultProps = {
  user: null
}
Footer.propTypes = {
  user: PropTypes.object
}

export default connect(mapStateToProps)(Footer)
export { Footer };

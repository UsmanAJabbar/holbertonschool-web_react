import React from 'react';
import { connect } from 'react-redux';

import AppContext from '../App/AppContext';
import { getFooterCopy, getFullYear } from '../utils/utils';

import './Footer.css';

const Footer = ({ user }) => (
  <div className="App-footer">
    <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    { (!!user) ? <a>Contact Us</a> : null }
  </div>
)

const mapStateToProps = (state) => ({
  user: state.get('user')
});

export default connect(mapStateToProps)(Footer)
export { Footer };

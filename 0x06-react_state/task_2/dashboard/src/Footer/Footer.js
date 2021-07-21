import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css';

const Footer = () => (
  <React.Fragment>
  <div className="App-footer">
    <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
  </div>
  </React.Fragment>
)

export default Footer;
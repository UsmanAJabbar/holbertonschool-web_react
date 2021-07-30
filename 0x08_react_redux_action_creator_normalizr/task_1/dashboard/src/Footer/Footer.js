import React from 'react';

import AppContext from '../App/AppContext';
import { getFooterCopy, getFullYear } from '../utils/utils';

import './Footer.css';

const Footer = () => (
  <AppContext.Consumer>
    { appState => (
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
          { (appState.isLoggedIn) ? <a>Contact Us</a> : null }
        </div>
      )
    }
  </AppContext.Consumer>
)

export default Footer;

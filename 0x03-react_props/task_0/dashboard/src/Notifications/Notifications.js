import React from 'react';
import './Notifications.css';
import { getLatestNotifcation } from '../utils/utils';
import closeButton from './close-button.png';

const buttonCSS = {
                    display: 'inline-block',
                    float: 'right',
                    padding: '0',
                    margin: '0',
                    border: 'none',
                    backgroundColor: 'transparent'
                  }
const Notification = () => (<div className="Notifications">
                             <button aria-label="Close"
                                     onClick={() => console.log('Close button has been clicked')}
                                     style={ buttonCSS }>
                               <img src={closeButton} alt="close button" style={ { 'height': '20px' } } />
                             </button>
                             <p>Here is the list of notifications</p>
                             <ul>
                               <li data-priority="default">New course available</li>
                               <li data-priority="urgent">New resume available</li>
                               <li data-priority="urgent" dangerouslySetInnerHTML={ { __html: getLatestNotifcation() } }></li>
                             </ul>
                           </div>)

export default Notification;
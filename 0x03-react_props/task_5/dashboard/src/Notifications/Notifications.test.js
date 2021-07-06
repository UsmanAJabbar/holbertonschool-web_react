const assert = require('assert');
import { shallow } from 'enzyme';
import { getLatestNotifcation } from '../utils/utils';

import Notification from './Notifications';


describe('Test Notifications component', () => {

  let displayDrawerListNotifs = null;
  let displayDrawerNoArgs = null;
  let noArgs = null;

  beforeEach(() => {
    displayDrawerListNotifs = shallow(<Notification displayDrawer={true}
                                                    listNotifications={listNotifications}
                                      />);
    displayDrawerNoArgs = shallow(<Notification displayDrawer={true}/>);
    noArgs = shallow(<Notification />);
  });

  afterEach(() => {
    displayDrawerNoArgs = displayDrawerListNotifs = noArgs = null;
  })
  
  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotifcation()}}
  ];

  it('test that Notifications renders without crashing', () => {
    assert.equal(displayDrawerListNotifs.length, 1);
  })
  it('verify that Notifications renders three list items', () => {
    assert.equal(displayDrawerListNotifs.find('ul').children().length, 3);
  });
  it('verify that Notifications renders the text', () => {
    assert.equal(displayDrawerListNotifs.find('p').last().text(), 'Here is the list of notifications');
  });
  it('Verifies whether NotificationItem element renders', () => {
    assert.equal(displayDrawerListNotifs.find('NotificationItem').exists(), true);
  });
  it('Verifies whether NotificationItem element renders the exp output', () => {
    assert.equal(displayDrawerListNotifs.find('NotificationItem').last().html(), '<li data-notification-type=\"urgent\"><strong>Urgent requirement</strong> - complete by EOD</li>');
  });
  it('Verfies whether menuItem is displayed when <Notification displayDrawer={false}>', () => {
    assert.equal(noArgs.find('.menuItem').exists(), true);
  });
  it('Verifies the Notifications box is not being displayed when <Notification displayDrawer={false}>', () => {
    assert.equal(noArgs.find('.Notifications').exists(), false);
  });
  it('Verfies whether menuItem is displayed when <Notification displayDrawer={true}>', () => {
    assert.equal(displayDrawerListNotifs.find('.menuItem').exists(), true);
  });
  it('Verifies the Notifications box is not being displayed when <Notification displayDrawer={true}>', () => {
    assert.equal(displayDrawerListNotifs.find('.Notifications').exists(), true);
  });
  it('Verifies whether Notifications renders correctly if you pass an empty array', () => {
    assert.equal(displayDrawerNoArgs.find('NotificationItem').length, 1);
    assert.equal(displayDrawerNoArgs.find('NotificationItem').html().includes('No new notification for now'), true);
  });
  it('Verifies whether Notifications renders correctly if you don\'t pass an empty array', () => {
    assert.equal(displayDrawerListNotifs.find('NotificationItem').length, 3);
  });
  it('Verifies whether "Here is the list of notifications" is displayed when listNotifications is empty', () => {
    assert.equal(displayDrawerNoArgs.find('NotificationItem').length, 1);
    assert.equal(displayDrawerNoArgs.find('NotificationItem').html().includes('No new notification for now'), true);
    assert.equal(displayDrawerNoArgs.find('NotificationItem').html().includes('Here is the list of notifications'), false);
  });
});

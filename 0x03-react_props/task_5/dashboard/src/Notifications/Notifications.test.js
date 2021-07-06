const assert = require('assert');
import { shallow } from 'enzyme';
import { getLatestNotifcation } from '../utils/utils';

import Notification from './Notifications';


describe('Test Notifications component', () => {
  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotifcation()}}
  ];

  it('test that Notifications renders without crashing', () => {
    const wrapper = shallow(<Notification displayDrawer={true}
                                          listNotifications={listNotifications} />);
    assert.equal(wrapper.length, 1);
  })
  it('verify that Notifications renders three list items', () => {
    const wrapper = shallow(<Notification displayDrawer={true}
                                          listNotifications={listNotifications} />);
    assert.equal(wrapper.find('ul').children().length, 3);
  });
  it('verify that Notifications renders the text', () => {
    const wrapper = shallow(<Notification displayDrawer={true}
                                          listNotifications={listNotifications} />);
    assert.equal(wrapper.find('p').last().text(), 'Here is the list of notifications');
  });
  it('Verifies whether NotificationItem element renders', () => {
    const wrapper = shallow(<Notification displayDrawer={true}
                                          listNotifications={listNotifications} />);
    assert.equal(wrapper.find('NotificationItem').exists(), true);
  });
  it('Verifies whether NotificationItem element renders the exp output', () => {
    const wrapper = shallow(<Notification displayDrawer={true}
                                          listNotifications={listNotifications} />);
    assert.equal(wrapper.find('NotificationItem').last().html(), '<li data-notification-type=\"urgent\"><strong>Urgent requirement</strong> - complete by EOD</li>');
  });
  it('Verfies whether menuItem is displayed when <Notification displayDrawer={false}>', () => {
    const wrapper = shallow(<Notification displayDrawer={false}/>);
    assert.equal(wrapper.find('.menuItem').exists(), true);
  });
  it('Verifies the Notifications box is not being displayed when <Notification displayDrawer={false}>', () => {
    const wrapper = shallow(<Notification displayDrawer={false}/>);
    assert.equal(wrapper.find('.Notifications').exists(), false);
  });
  it('Verfies whether menuItem is displayed when <Notification displayDrawer={true}>', () => {
    const wrapper = shallow(<Notification displayDrawer={true}
                                          listNotifications={listNotifications} />);
    assert.equal(wrapper.find('.menuItem').exists(), true);
  });
  it('Verifies the Notifications box is not being displayed when <Notification displayDrawer={true}>', () => {
    const wrapper = shallow(<Notification displayDrawer={true}
                                          listNotifications={listNotifications} />);
    assert.equal(wrapper.find('.Notifications').exists(), true);
  });
  it('Verifies whether Notifications renders correctly if you pass an empty array', () => {
    const wrapper = shallow(<Notification displayDrawer={true} />);
    assert.equal(wrapper.find('NotificationItem').length, 1);
    assert.equal(wrapper.find('NotificationItem').html().includes('No new notification for now'), true);
  });
  it('Verifies whether Notifications renders correctly if you don\'t pass an empty array', () => {
    const wrapper = shallow(<Notification displayDrawer={true}
                                          listNotifications={listNotifications} />);
    assert.equal(wrapper.find('NotificationItem').length, 3);
  });
  it('Verifies whether "Here is the list of notifications" is displayed when listNotifications is empty', () => {
    const wrapper = shallow(<Notification displayDrawer={true} />);
    assert.equal(wrapper.find('NotificationItem').length, 1);
    assert.equal(wrapper.find('NotificationItem').html().includes('No new notification for now'), true);
    assert.equal(wrapper.find('NotificationItem').html().includes('Here is the list of notifications'), false);
  });
});

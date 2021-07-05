const assert = require('assert');
import {shallow} from 'enzyme';
import Notification from './Notifications';


describe('Test Notifications component', () => {
  it('test that Notifications renders without crashing', () => {
    const wrapper = shallow(<Notification displayDrawer={true}/>);
    assert.equal(wrapper.length, 1)
  })
  it('verify that Notifications renders three list items', () => {
    const wrapper = shallow(<Notification displayDrawer={true}/>);
    assert.equal(wrapper.find('ul').children().length, 3);
  });
  it('verify that Notifications renders the text', () => {
    const wrapper = shallow(<Notification displayDrawer={true}/>);
    assert.equal(wrapper.find('p').last().text(), 'Here is the list of notifications');
  });
  it('Verifies whether NotificationItem element renders', () => {
    const wrapper = shallow(<Notification displayDrawer={true}/>);
    assert.equal(wrapper.find('NotificationItem').exists(), true);
  });
  it('Verifies whether NotificationItem element renders the exp output', () => {
    const wrapper = shallow(<Notification displayDrawer={true}/>);
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
    const wrapper = shallow(<Notification displayDrawer={true}/>);
    assert.equal(wrapper.find('.menuItem').exists(), true);
  });
  it('Verifies the Notifications box is not being displayed when <Notification displayDrawer={true}>', () => {
    const wrapper = shallow(<Notification displayDrawer={true}/>);
    assert.equal(wrapper.find('.Notifications').exists(), true);
  });  
});

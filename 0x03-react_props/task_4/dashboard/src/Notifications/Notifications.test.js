const assert = require('assert');
import {shallow} from 'enzyme';
import Notification from './Notifications';


describe('Test Notifications component', () => {
  it('test that Notifications renders without crashing', () => {
    const wrapper = shallow(<Notification />);
    assert.equal(wrapper.length, 1)
  })
  it('verify that Notifications renders three list items', () => {
    const wrapper = shallow(<Notification />);
    assert.equal(wrapper.find('ul').children().length, 3);
  });
  it('verify that Notifications renders the text', () => {
    const wrapper = shallow(<Notification />);
    assert.equal(wrapper.find('p').text(), 'Here is the list of notifications');
  });
  it('Verifies whether NotificationItem element renders', () => {
    const wrapper = shallow(<Notification />);
    assert.equal(wrapper.find('NotificationItem').exists(), true);
  });
  it('Verifies whether NotificationItem element renders the exp output', () => {
    const wrapper = shallow(<Notification />);
    assert.equal(wrapper.find('NotificationItem').last().html(), '<li data-notification-type=\"urgent\"><strong>Urgent requirement</strong> - complete by EOD</li>');
  });
});

const { React } = require('react');
const { shallow, mount, render } = require('enzyme');
const { Notification } = require('./Notifications')

describe('Test Notifications component', () => {
  it('test that Notifications renders without crashing', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper).to.have.length(1);
  })
  it('verify that Notifications renders three list items', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find('ul').children()).to.have.lengthOf(3);
  });
  it('verify that Notifications renders the text', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find('p').text()).to.equal('Here is the list of notifications');
  });
});
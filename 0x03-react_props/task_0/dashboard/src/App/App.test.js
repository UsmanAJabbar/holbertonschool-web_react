const assert = require('assert');
import { shallow } from 'enzyme';
import App from './App';


describe('Test App component', () => {
  it('test that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    assert.equal(wrapper.length, 1);
  })
  // it('verify that App renders a div with the class App-header', () => {
  //   const wrapper = shallow(<App />);
  //   assert.equal(wrapper.find('div.App-header').hasClass('App-header'), true);
  // });
  // it('verify that App renders a div with the class App-body', () => {
  //   const wrapper = shallow(<App />);
  //   assert.equal(wrapper.find('div.App-body').hasClass('App-body'), true);
  // });
  // it('verify that App renders a div with the class App-footer', () => {
  //   const wrapper = shallow(<App />);
  //   assert.equal(wrapper.find('div.App-footer').hasClass('App-footer'), true);
  // });
});

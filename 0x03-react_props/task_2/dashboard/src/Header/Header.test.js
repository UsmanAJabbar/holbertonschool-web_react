const assert = require('assert');
import { shallow } from 'enzyme';
import Header from './Header';

describe('Test header exists', () => {
  it('test that header renders without crashing', () => {
    const wrapper = shallow(<Header />);
    assert.equal(wrapper.length, 1);
  });
  it('Tests whether the img tag exists', () => {
    const wrapper = shallow(<Header />);
    assert(wrapper.find('img').length, 1);
  });
  it('Tests whether the h1 tag exists', () => {
    const wrapper = shallow(<Header />);
    assert(wrapper.find('h1').length, 1);
  });
});
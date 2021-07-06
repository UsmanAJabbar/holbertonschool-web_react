const assert = require('assert');
import { shallow } from 'enzyme';
import Header from './Header';

describe('Test header exists', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('test that header renders without crashing', () => {
    assert.equal(wrapper.length, 1);
  });
  it('Tests whether the img tag exists', () => {
    assert(wrapper.find('img').length, 1);
  });
  it('Tests whether the h1 tag exists', () => {
    assert(wrapper.find('h1').length, 1);
  });
});
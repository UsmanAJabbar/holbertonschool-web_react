const assert = require('assert');
import { shallow } from 'enzyme';
import Login from './Login';

describe('Test header exists', () => {
  it('test that header renders without crashing', () => {
    const wrapper = shallow(<Login />);
    assert.equal(wrapper.length, 1);
  });
  it('Tests whether 2 input tags exist', () => {
    const wrapper = shallow(<Login />);
    assert(wrapper.find('input').length, 2);
  });
  it('Tests whether 2 label tags exist', () => {
    const wrapper = shallow(<Login />);
    assert(wrapper.find('label').length, 2);
  });
});
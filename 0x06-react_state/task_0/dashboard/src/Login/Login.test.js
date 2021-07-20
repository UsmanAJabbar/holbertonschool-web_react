const assert = require('assert');
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import Login from './Login';

describe('Test header exists', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Login />);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    wrapper = null;
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('test that header renders without crashing', () => {
    assert.equal(wrapper.length, 1);
  });
  it('Tests whether 2 input tags exist', () => {
    assert(wrapper.find('input').length, 2);
  });
  it('Tests whether 2 label tags exist', () => {
    assert(wrapper.find('label').length, 2);
  });
});

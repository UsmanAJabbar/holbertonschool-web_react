/**
 * @jest-environment jsdom
*/

import assert from 'assert';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import Header from './Header';

describe('Test header exists', () => {
  let wrapper = null;
  let mountedWrapper = null;
  let notLoggedInContext = {
    email: 'a@gmail.com',
    password: 'somebigpass',
    isLoggedIn: false,
    logout: () => sinon.spy()
  }
  beforeEach(() => {
    wrapper = shallow(<Header />, { context: notLoggedInContext });
    mountedWrapper = mount(<Header />, { context: notLoggedInContext });
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    wrapper = mountedWrapper = null;
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('test that header renders without crashing', () => {
    assert.equal(wrapper.length, 1);
  });
  it('Tests whether the img tag exists', () => {
    assert.equal(wrapper.find('img').length, 1);
  });
  it('Tests whether the h1 tag exists', () => {
    assert.equal(wrapper.find('h1').length, 1);
  });
  it('Tests whether the default context is available when the context isn\'t passed by <App />', () => {
    assert.equal(mountedWrapper.context('isLoggedIn'), false);
  })
  it('Tests whether the login welcome message exists if context does not indicate a successful login', () => {
    assert.equal(wrapper.find('#logoutSection').exists(), false);
  });
  // it('Tests whether the login webcome message exists if the context says that there is a login', () => {
  //   mountedWrapper.setContext({
  //     isLoggedIn: true,
  //     email: 'email',
  //     password: 'password'
  //   });
  //   wrapper.setContext({
  //     isLoggedIn: true,
  //     email: 'email',
  //     password: 'password'      
  //   })
  //   console.log(
  //     mountedWrapper.context('isLoggedIn'),
  //     wrapper.context('isLoggedIn'),
  //     { context: notLoggedInContext }
  //   )
  //   assert.equal(mountedWrapper.find('#logoutSection').exists(), true);
  // })
});

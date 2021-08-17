/**
 * @jest-environment jsdom
 */

const assert = require('assert');
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';

import App, { mapStateToProps } from './App';


describe('Test App component', () => {
  let wOArgsApp = null;
  let wArgsApp = null;

  beforeEach(() => {
    wOArgsApp = shallow(<App />);
    wArgsApp = shallow(<App isLoggedIn={true} />);
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    wOArgsApp = wArgsApp = null;
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('test that App renders without crashing', () => {
    assert.equal(wOArgsApp.length, 1);
  });
  it('Tests whether the <Header /> component exists', () => {
    assert.equal(wOArgsApp.find('Header').exists(), true);
  });
  it('Tests whether the <Login /> component exists', () => {
    assert.equal(wOArgsApp.find('Login').exists(), true);
  });
  it('Tests whether the <Footer /> component exists', () => {
    assert.equal(wOArgsApp.find('Footer').exists(), true);
  });
  it('Tests whether the <Login /> is rendered rather than <CourseList />', () => {
    assert.equal(wOArgsApp.find('Login').exists(), true);
    assert.equal(wOArgsApp.find('CourseList').exists(), false);
  });
  // it('Tests whether the <CourseList /> is rendered rather than <Login />', () => {
  //   assert.equal(wArgsApp.find('Login').exists(), false);
  //   assert.equal(wArgsApp.find('CourseList').exists(), true);
  // });

  // it('Tests whether alert was called when ctrl-h is pressed', () => {
  //   const logOut = jest.fn(() => {});
 
  //   const alert = jest.spyOn(global, 'alert');

  //   const wrapper = shallow(<App logOut={logOut} />);
  //   wrapper.find(document)
  //     .simulate('keydown', { key: 'h', ctrlKey: true })

  //   expect(logOut).toHaveBeenCalled();
  //   expect(alert).toHaveBeenCalled();

  //   alert.mockRestore();
  // });
  it('Tests whether the default state for the displayDrawer Prop is false', () => {
    assert.equal(wOArgsApp.state('displayDrawer'), false);
  });
  it('Tests whether both of the handler methods that update displayDrawer\'s state are working', () => {
    const instance = wOArgsApp.instance();
    instance.handleDisplayDrawer();
    assert.equal(wOArgsApp.state('displayDrawer'), true);
    instance.handleHideDrawer();
    assert.equal(wOArgsApp.state('displayDrawer'), false);
  });
  it('Tests whether fromJS returns the right object', () => {
    let state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false
    });
    expect(mapStateToProps(state))
      .toStrictEqual(
        { isLoggedIn: true, displayDrawer: false }
      )
  })
});

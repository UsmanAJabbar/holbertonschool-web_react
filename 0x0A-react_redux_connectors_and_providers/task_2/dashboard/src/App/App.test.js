/**
 * @jest-environment jsdom
 */

const assert = require('assert');
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import { mapStateToProps } from '../App/App';
import { newApp as App } from './App';


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
  it('Tests whether the <Login /> component exists', () => {
    assert.equal(wOArgsApp.find('Login').exists(), true);
  });
  it('Tests whether the <Login /> is rendered rather than <CourseList />', () => {
    assert.equal(wOArgsApp.find('Login').exists(), true);
    assert.equal(wOArgsApp.find('CourseList').exists(), false);
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
